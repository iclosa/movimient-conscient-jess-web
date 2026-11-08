/**
 * URL base de la API pública del backend (Laravel). Se configura con PUBLIC_API_URL en .env.
 * Ejemplo local con DDEV: http://moviment-conscient-backend.ddev.site/api/v1/public
 */
export const API_URL = (
  import.meta.env.PUBLIC_API_URL ?? 'http://moviment-conscient-backend.ddev.site/api/v1/public'
).replace(/\/$/, '');

// En el servidor, varias partes de una misma página piden el mismo recurso: se comparte la petición durante unos segundos.
// Los errores no se guardan (la siguiente petición vuelve a intentarlo).
const SHARE_MS = 10_000;
const shared = new Map<string, { at: number; p: Promise<unknown> }>();

function request<T>(path: string): Promise<T> {
  const hit = shared.get(path);
  if (hit && Date.now() - hit.at < SHARE_MS) return hit.p as Promise<T>;
  const p = (async () => {
    const res = await fetch(`${API_URL}${path}`, {
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return ((await res.json()) as { data: T }).data;
  })();
  shared.set(path, { at: Date.now(), p });
  p.catch(() => shared.delete(path));
  return p;
}

/** GET a la API en cada petición. Devuelve null si falla (la sección sale vacía; nunca se inventan datos). */
export async function apiGet<T>(path: string): Promise<T | null> {
  try {
    return await request<T>(path);
  } catch (err) {
    console.warn(`[api] No se ha podido leer ${API_URL}${path}:`, (err as Error).message);
    return null;
  }
}

/** GET imprescindible: si falla la página da error con un mensaje claro (no se muestra una web vacía o inventada). */
export async function apiRequire<T>(path: string): Promise<T> {
  try {
    return await request<T>(path);
  } catch (err) {
    throw new Error(
      `No se puede leer ${API_URL}${path} (${(err as Error).message}). ` +
        'Las actividades se definen en el backend: arranca el backend (ddev start) o revisa PUBLIC_API_URL en .env.',
    );
  }
}

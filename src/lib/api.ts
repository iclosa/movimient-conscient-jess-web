/**
 * URL base de la API pública del backend (Laravel). Se configura con PUBLIC_API_URL en .env.
 * Ejemplo local con DDEV: http://moviment-conscient-backend.ddev.site/api/v1/public
 */
export const API_URL = (
  import.meta.env.PUBLIC_API_URL ?? 'http://moviment-conscient-backend.ddev.site/api/v1/public'
).replace(/\/$/, '');

async function request<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return ((await res.json()) as { data: T }).data;
}

/** GET a la API en tiempo de build. Devuelve null si falla (la web sigue compilando sin esos datos). */
export async function apiGet<T>(path: string): Promise<T | null> {
  try {
    return await request<T>(path);
  } catch (err) {
    console.warn(`[api] No se ha podido leer ${API_URL}${path}:`, (err as Error).message);
    return null;
  }
}

/** GET imprescindible: si falla se detiene el build/la página con un mensaje claro (no se publica una web vacía). */
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

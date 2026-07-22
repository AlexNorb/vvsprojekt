/**
 * Prepends the base URL to a given path.
 * Usage: pb('/about') -> '/about'
 */
export function pb(path: string): string {
    // Ensure we don't double-slash if BASE_URL ends with / and path starts with /
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    if (cleanPath === '/') return base || '/';

    return `${base}${cleanPath}`;
}

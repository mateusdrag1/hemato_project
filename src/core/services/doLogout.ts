export async function doLogout(): Promise<void> {
  sessionStorage.clear();
  window.location.href = '/login';
}

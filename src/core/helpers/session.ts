export function getSessionItem(key: string) {
  return sessionStorage.getItem(key);
}

export function setSessionItem(key: string, value: string) {
  if (value) {
    sessionStorage.setItem(key, value);
  }
}

export function removeSessionItem(key: string) {
  sessionStorage.removeItem(key);
}

export function clearSession() {
  sessionStorage.clear();
}

export function getSession() {
  return sessionStorage;
}

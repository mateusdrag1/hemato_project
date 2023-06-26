export function getLocalStorageItem(key: string) {
  return localStorage.getItem(key);
}

export function setLocalStorageItem(key: string, value: string) {
  if (value) {
    localStorage.setItem(key, value);
  }
}

export function removeLocalStorageItem(key: string) {
  localStorage.removeItem(key);
}

export function clearLocalStorage() {
  localStorage.clear();
}

export function getLocalStorage() {
  return localStorage;
}

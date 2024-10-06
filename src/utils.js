export function storeInLocalStorage(token, userId) {
  localStorage.setItem("token", token);
  localStorage.setItem("userId", userId);
}

export function getFromLocalStorage(item) {
  return localStorage.getItem(item);
}

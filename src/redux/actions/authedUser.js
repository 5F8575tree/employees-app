export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const REMOVED_AUTHED_USER = "REMOVED_AUTHED_USER";

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}
export function removeAuthedUser() {
  return {
    type: REMOVED_AUTHED_USER,
  };
}

import { getInitialData } from "../utils/api";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then((data) => {
      dispatch(receiveUsers(data.users));
    });
  };
}

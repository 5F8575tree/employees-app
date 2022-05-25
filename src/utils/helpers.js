export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

//check username and password
export function checkLogin(username, password) {
  if (username === "admin" && password === "admin") {
    return "admin";
  } else if (username === "user" && password === "user") {
    return "user";
  } else {
    return null;
  }
}

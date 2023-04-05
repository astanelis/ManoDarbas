export function addNewUser(userObj, username) {
  let users = JSON.parse(localStorage.getItem('users')) || []
  users.push(userObj)
  localStorage.setItem('users', JSON.stringify(users))
}
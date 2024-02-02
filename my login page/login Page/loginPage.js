
const USER_NAME = document.getElementById("username");
const PASSWORD = document.getElementById("password")
const LOGIN = document.getElementById("login")

function saveUserData() {
  localStorage.setItem('user', JSON.stringify({username: USER_NAME.value, password: PASSWORD.value }))
}

LOGIN.addEventListener("click", function(event) {
  event.preventDefault();
  saveUserData();
})

// USER_NAME.addEventListener("keydown", function(event) {
//   const VALUE = event.target.value
//   console.log(VALUE)
// })

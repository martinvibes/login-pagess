const EMAIL = document.getElementById("email_input");
const PASS = document.getElementById("password_input");
const LOG = document.getElementById("submit");

function saveInput() {
  localStorage.setItem(
    "client",
    JSON.stringify({ username: EMAIL.value, password: PASS.value })
  );
}

LOG.addEventListener("click", function (party) {
  // party.preventDefault()
  saveInput();
});

const imgs = ["benz.jpg", "benz.jpg", "benz.jpg"];
const FLEX = document.getElementById("flex");

function pic() {
  let image = "";
  for (let i = 0; i < imgs.length; i++) {
    image += `<img  alt="benz car in the desert" class="from" src="${imgs[i]}" >`;
  }
  FLEX.innerHTML = image;
}
pic();

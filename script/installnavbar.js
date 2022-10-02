let installnav = document.querySelector(".container");

import navbar from "./NAVBAR.js";

installnav.innerHTML = navbar();

let pro = document.querySelector("#rk_profile");
pro.addEventListener("click", () => {
  signup();
});

function signup() {
  window.location.href = "../html/signup.html";
}

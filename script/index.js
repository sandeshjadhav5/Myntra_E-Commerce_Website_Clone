import {navbar} from "./NAVBAR.js";
document.querySelector(".container").innerHTML=navbar();


import { footer } from "./footer.js";
document.getElementById("footer").innerHTML=footer();






 document.querySelector("#goToBag").addEventListener("click", goToBag);


function goToBag() {
    console.log("hello")
    window.location.href ="./html/cart.html";
  }

  document.querySelector(".profile").addEventListener('click',goToSignup)

  function goToSignup(){
    window.location.href="./html/signup.html"
  }
  
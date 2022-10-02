import { Bag_Nav } from "./bag_navbar.js";

let show_btn = document.querySelector("#show_btn");
let showMore = document.querySelector("#showMore")

show_btn.addEventListener("click" , function(){
    showMore.style.display = "block";
    show_btn.style.display = "none";
})

let hide_btn = document.querySelector("#hide_btn");

hide_btn.addEventListener("click" , function(){
    showMore.style.display = "none";
    show_btn.style.display = "block"   
})

let place_btn = document.querySelector("#place_btn");
place_btn.addEventListener("click", function(){
    window.location.href = "Address.html"
})


document.getElementById("placeOrder").addEventListener("click", placeOrder);

let cartItem = JSON.parse(localStorage.getItem("cartItem"));

let price = cartItem.price;
console.log(price);

// console.log

let discount = price * (15 / 100);
// console.log(discount)

let cart_total_price = price - discount;
console.log(cart_total_price);

document.getElementById("totalActual").innerText = cartItem.price;

document.getElementById("discount").innerText = discount;

document.getElementById("total").innerText = cart_total_price;

function placeOrder() {
  alert("order placed");
  window.location.href = "./ordersucess.html";
}








let cartItem = JSON.parse(localStorage.getItem("cartItem"));

console.log(cartItem);

// let nums = cartItem.length;
let count = 1;
let cart_count = document.getElementById("cart_count");
cart_count.innerText = `${count} `;
// cartItem.length;

display(cartItem);

function display(cartItem) {
  let box = document.createElement("div");
  box.setAttribute("class", "box");

  let boxLeft = document.createElement("div");
  boxLeft.setAttribute("class", "boxLeft");

  let boxRight = document.createElement("div");
  boxRight.setAttribute("class", "boxRight");

  let img = document.createElement("img");
  img.setAttribute("class", "product_img");
  img.src = cartItem.img;

  let brand = document.createElement("h6");
  brand.setAttribute("class", "brand");
  brand.innerText = cartItem.brand;

  let name = document.createElement("p");
  name.setAttribute("class", "name");
  name.innerText = cartItem.name;

  let remove = document.createElement("button");
  remove.setAttribute("class", "remove");
  remove.innerText = "REMOVE";

  remove.addEventListener("click", function () {
    removeElement(index);
  });

  let nameButtonDiv = document.createElement("div");
  nameButtonDiv.setAttribute("class", "nameButtonDiv");

  nameButtonDiv.append(name);

  let size = document.createElement("button");
  size.setAttribute("class", "size");

  size.innerText = "Size: Onesize";

  let qty = document.createElement("select");
  qty.setAttribute("class", "qty");
  qty.innerText = `QTY: 1`;
  let one = document.createElement("option");
  one.innerText = "1";
  let two = document.createElement("option");
  two.innerText = "2";
  let three = document.createElement("option");
  three.innerText = "3";
  let four = document.createElement("option");
  four.innerText = "4";
  let five = document.createElement("option");
  five.innerText = "5";
  qty.append(one, two, three, four, five);

  let sizeDiv = document.createElement("div");
  sizeDiv.setAttribute("class", "sizeDiv");
  sizeDiv.append(size, qty);

  let price = document.createElement("h6");
  price.setAttribute("class", "price");
  price.innerText = `₹  ${cartItem.price}`;

  let offer = document.createElement("p");
  offer.setAttribute("class", "offer");
  offer.innerText = "15% OFF";

  let priceDiv = document.createElement("div");
  priceDiv.setAttribute("class", "priceDiv");

  priceDiv.append(price, offer);

  let deliveryDate = document.createElement("p");
  deliveryDate.setAttribute("class", "deliveryDate");

  deliveryDate.innerText = "Delivery by: 7 Sep 2022";

  boxLeft.append(img);
  boxRight.append(brand, nameButtonDiv, sizeDiv, priceDiv, deliveryDate);

  box.append(boxLeft, boxRight);
  document.getElementById("cart_items").append(box);
}

// cartItem.map((elem, index) => {

// });

let price = cartItem.price;
console.log(price);

//   console.log

let discount = price * (15 / 100);
// console.log(discount)

let cart_total_price = price - discount;
console.log(cart_total_price);

document.getElementById("total_mrp").innerText = cartItem.price;

document.getElementById("discount_on_mrp").innerText = discount;

document.getElementById("cart_tatal_amount").innerText = cart_total_price;

function removeElement(index) {
  cartItem.splice(index, 1);
  localStorage.setItem("cartItem", JSON.stringify(cartItem));
  window.location.reload();
}

document.getElementById("cart_place_order_btn").addEventListener("click", placeOrder);

 

function placeOrder() {
  window.location.href = "./payment.html";

}



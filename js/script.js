const btnSub = document.querySelector(".btn-sub");
btnSub.addEventListener("click", () => {
  alert(" Thank for subcribing👍🙏💖💖")
})

// Cart Animation

let added = "added  ✅"
const cartbtn = document.querySelector(".cart-btn");
const cartbtn2 = document.querySelector(".cart-btn2");
const cartbtn3 = document.querySelector(".cart-btn3");
const cartbtn4 = document.querySelector(".cart-btn4");
const cartbtn5 = document.querySelector(".cart-btn5");
const cartbtn6 = document.querySelector(".cart-btn6");
const cartbtn7 = document.querySelector(".cart-btn7");
const cartbtn8 = document.querySelector(".cart-btn8");
cartbtn.addEventListener("click", () => {
  cartbtn.textContent = added;
})
cartbtn2.addEventListener("click", () => {
  cartbtn2.textContent = added;
})
cartbtn3.addEventListener("click", () => {
  cartbtn3.textContent = added;
})
cartbtn4.addEventListener("click", () => {
  cartbtn4.textContent = added;
})
cartbtn5.addEventListener("click", () => {
  cartbtn5.textContent = added;
})
cartbtn6.addEventListener("click", () => {
  cartbtn6.textContent = added;
})
cartbtn7.addEventListener("click", () => {
  cartbtn7.textContent = added;
})
cartbtn8.addEventListener("click", () => {
  cartbtn8.textContent = added;
})


const viewCart = document.getElementById("viewCart");
viewCart.addEventListener("click", () => {
  //Show cart
  document.getElementById("cart").classList.add("open");
})

let cart = [];
let total = 0;

function addToCart(name, price, image) {
  // //Show the cart
  // document.getElementById("cart").classList.add("open");

  //Add item to cart
  cart.push({ name, price, image });
}
function addToCart(name, price, image) {
  //Show the cart 
  // document.getElementById("cart").classList.add("open");

  //Add item to cart
  cart.push({ name, price, image });
}

function closeCart() {
  document.getElementById("cart").classList.remove("open")
}

function addToCart(name, price, image) {
  // document.getElementById("cart").classList.add("open");

  const cartItemsDiv = document.getElementById("cart-items");

  // Create item wrapper 
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("cart-item");

  // Create item content 
  itemDiv.innerHTML = `
      <img src="${image}" alt="${name}">
      ${name} - $${price}
      <button class="remove-btn">Remove</button>
      `;

  //Append to cart 
  cartItemsDiv.appendChild(itemDiv);

  //Update total
  total += price;
  document.getElementById("total").textContent = `Total: ₦${total}`;

  //Handle remove button 
  itemDiv.querySelector(".remove-btn").addEventListener("click", () => {
    cartItemsDiv.removeChild(itemDiv);
    total -= price;
    document.getElementById("total").textContent = `Total: $${total}`;
  });

  function addToCart(name, price, image) {
    addToCart.addEventListener('click', function (event) {
      event.preventDefault();
    })
  }
}
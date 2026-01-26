let cart = [];
let total = 0;

function addToCart(name, price, image) {
    //Show the cart
    document.getElementById("cart").classList.add("open")

    //Add items to cart
    cart.push({ name, price, image });
}

function closeCart(name, price, image) {
    document.getElementById("cart").classList.remove("open");
}

function addToCart(name, price, image) {
    document.getElementById("cart").classList.add("open")
    const cartItemsDiv = document.getElementById("cart-items");

    //Create item wrapper
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    //Create item content
    itemDiv.innerHTML = `
    <img src="${image}" alt"${name}">
    ${name} -- $${price}
    <button class="remove-btn">Remove</button>
    `;

    // Append to cart
    cartItemsDiv.appendChild(itemDiv);

    //Update total
    total += price;
    document.getElementById("total").textContent = `Total: ₦${total}`;

    // Handle remove
    itemDiv.querySelector(".remove-btn").addEventListener("click", () => {
        cartItemsDiv.removeChild(itemDiv);
        total -= price;
        document.getElementById("total").textContent = `Total: ₦${total}`;
    });

    function addToCart(name, price, image) {
        addToCart.addEventListener("click", (event) => {
            event.preventDefault();
        })
    }
}
//Media size 
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("open");
});

// Header interaction
const header = document.getElementById("header");

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.add("active");
  })
}
// if (window.addEventListener("scroll", () => {
  // setTimeout(() => {
  //   header.classList.remove("active")
  //   header.classList.add("fade-out");
  //   // alert("U didi it")
  // }, 900)
//   header.classList.add("active")
// })) {

// }

// window.addEventListener("scroll", () => {
//   setTimeout(() => {
//     document.getElementById("header").classList.add("fade-out")
//   }, 5000);
// })

// if (addToCart) {
//   addToCart.addEventListener("click", (e) => {
//     e.preventDefault();
//     const msg = 'added  ✅';
//     setTimeout(() => {
//       addToCart.reset();
//     }, 900);
//   });
// }

      // Cart Animation

      let added = "added  ✅"
      const cartbtn = document.querySelector(".cart-btn1");
      const cartbtn2 = document.querySelector(".cart-btn2");
      const cartbtn3 = document.querySelector(".cart-btn3");
      const cartbtn4 = document.querySelector(".cart-btn4");
      const cartbtn5 = document.querySelector(".cart-btn5");
      const cartbtn6 = document.querySelector(".cart-btn6");
      const cartbtn7 = document.querySelector(".cart-btn7");
      const cartbtn8 = document.querySelector(".cart-btn8");



      if (cartbtn) {
        cartbtn.addEventListener('click', (e) => {
          e.preventDefault();
          const msg = document.querySelector('.cart-btn1');
          msg.textContent = 'added  ✅';
          setTimeout(() => {
            msg.textContent = 'Add';
            cartbtn.reset();
          }, 900);
        });
      }
      if (cartbtn2) {
        cartbtn2.addEventListener('click', (e) => {
          e.preventDefault();
          const msg = document.querySelector('.cart-btn2');
          msg.textContent = 'added  ✅';
          setTimeout(() => {
            msg.textContent = 'Add';
            cartbtn2.reset();
          }, 900);
        });
      }
      if (cartbtn2) {
        cartbtn2.addEventListener('click', (e) => {
          e.preventDefault();
          const msg = document.querySelector('.cart-btn2');
          msg.textContent = 'added  ✅';
          setTimeout(() => {
            msg.textContent = 'Add';
            cartbtn2.reset();
          }, 900);
        });
      }
      if (cartbtn3) {
        cartbtn3.addEventListener('click', (e) => {
          e.preventDefault();
          const msg = document.querySelector('.cart-btn3');
          msg.textContent = 'added  ✅';
          setTimeout(() => {
            msg.textContent = 'Add';
            cartbtn3.reset();
          }, 900);
        });
      }
      if (cartbtn4) {
        cartbtn4.addEventListener('click', (e) => {
          e.preventDefault();
          const msg = document.querySelector('.cart-btn4');
          msg.textContent = 'added  ✅';
          setTimeout(() => {
            msg.textContent = 'Add';
            cartbtn4.reset();
          }, 900);
        });
      }
      if (cartbtn5) {
        cartbtn5.addEventListener('click', (e) => {
          e.preventDefault();
          const msg = document.querySelector('.cart-btn5');
          msg.textContent = 'added  ✅';
          setTimeout(() => {
            msg.textContent = 'Add';
            cartbtn5.reset();
          }, 900);
        });
      }
      if (cartbtn6) {
        cartbtn6.addEventListener('click', (e) => {
          e.preventDefault();
          const msg = document.querySelector('.cart-btn6');
          msg.textContent = 'added  ✅';
          setTimeout(() => {
            msg.textContent = 'Add';
            cartbtn6.reset();
          }, 900);
        });
      }

      if (cartbtn7) {
        cartbtn7.addEventListener('click', (e) => {
          e.preventDefault();
          const msg = document.querySelector('.cart-btn7');
          msg.textContent = 'added  ✅';
          setTimeout(() => {
            msg.textContent = 'Add';
            cartbtn7.reset();
          }, 900);
        });
      }

      if (cartbtn8) {
        cartbtn8.addEventListener('click', (e) => {
          e.preventDefault();
          const msg = document.querySelector('.cart-btn8');
          msg.textContent = 'added  ✅';
          setTimeout(() => {
            msg.textContent = 'Add';
            cartbtn8.reset();
          }, 900);
        });
      }


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
        document.getElementById("total").textContent = `Total: $${total}`;

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
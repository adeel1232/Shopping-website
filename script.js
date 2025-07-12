// Cart Elements
const buyBtns = document.querySelectorAll(".buy-btn");
const cartModal = document.getElementById("cartModal");
const cartItemsContainer = document.getElementById("cart-items");
const closeCartBtn = document.querySelector(".close-cart");
const totalPriceElement = document.getElementById("total-price");
const placeOrderBtn = document.querySelector(".submit-order");

let cart = [];

// Function to update cart UI
function updateCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <span>${item.name} ($${item.price})</span>
      <div>
        <button class="qty-btn" data-action="decrease" data-index="${index}">-</button>
        <span>${item.quantity}</span>
        <button class="qty-btn" data-action="increase" data-index="${index}">+</button>
        <button class="qty-btn" data-action="delete" data-index="${index}">Delete</button>
      </div>
    `;
    cartItemsContainer.appendChild(div);
  });

  totalPriceElement.innerText = total.toFixed(2);
}

// Event delegation for cart buttons (+, -, delete)
cartItemsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("qty-btn")) {
    const action = e.target.getAttribute("data-action");
    const index = parseInt(e.target.getAttribute("data-index"));

    if (action === "increase") {
      cart[index].quantity += 1;
    } else if (action === "decrease") {
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        cart.splice(index, 1); // Remove item if qty = 1
      }
    } else if (action === "delete") {
      cart.splice(index, 1);
    }
    updateCart();
  }
});

// Add to Cart
buyBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const name = card.querySelector("h3").innerText;
    const priceText = card.querySelector("p:nth-of-type(2)").innerText;
    const price = parseFloat(priceText.replace(/[^\d.]/g, ""));

    const existingIndex = cart.findIndex(item => item.name === name);
    if (existingIndex >= 0) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }

    updateCart();
    cartModal.style.display = "flex";
  });
});

// Close cart modal
closeCartBtn.addEventListener("click", () => {
  cartModal.style.display = "none";
});

// Close when clicking outside the cart modal
window.addEventListener("click", (e) => {
  if (e.target === cartModal) {
    cartModal.style.display = "none";
  }
});

// Place Order button - show checkout modal
placeOrderBtn.addEventListener("click", () => {
  cartModal.style.display = "none";
  document.getElementById("buyModal").style.display = "flex";
});

// Close Buy Modal
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("buyModal").style.display = "none";
});

// Optional: Close Buy Modal when clicking outside
window.addEventListener("click", (e) => {
  const buyModal = document.getElementById("buyModal");
  if (e.target === buyModal) {
    buyModal.style.display = "none";
  }
});




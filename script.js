// Cart Elements
const buyBtns = document.querySelectorAll(".buy-btn");
const cartModal = document.getElementById("cartModal");
const cartItemsContainer = document.getElementById("cart-items");
const closeCartBtn = document.querySelector(".close-cart");
const totalPriceElement = document.getElementById("total-price");
const placeOrderBtn = document.querySelector(".submit-order");
const buyModal = document.getElementById("buyModal");
const closeBuyBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".submit");

let cart = [];

// Update cart display
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

// Cart actions
cartItemsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("qty-btn")) {
    const action = e.target.getAttribute("data-action");
    const index = parseInt(e.target.getAttribute("data-index"));

    if (action === "increase") {
      cart[index].quantity++;
    } else if (action === "decrease") {
      cart[index].quantity > 1 ? cart[index].quantity-- : cart.splice(index, 1);
    } else if (action === "delete") {
      cart.splice(index, 1);
    }

    updateCart();
  }
});

// Add to cart
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

// Close modals
closeCartBtn.onclick = () => cartModal.style.display = "none";
closeBuyBtn.onclick = () => buyModal.style.display = "none";

// Outside click
window.addEventListener("click", (e) => {
  if (e.target === cartModal) cartModal.style.display = "none";
  if (e.target === buyModal) buyModal.style.display = "none";
});

// Place Order → show buy modal
placeOrderBtn.addEventListener("click", () => {
  cartModal.style.display = "none";
  buyModal.style.display = "flex";
});

// Submit order
submitBtn.addEventListener("click", () => {
  const name = buyModal.querySelector('input[placeholder="Enter Your Name"]').value.trim();
  const address = buyModal.querySelector('input[placeholder="Enter Your Address"]').value.trim();
  const mobile = buyModal.querySelector('input[placeholder="Enter Your Mobile Number"]').value.trim();

  if (name && address && mobile) {
    alert("✅ Order placed successfully!");
    buyModal.style.display = "none";
    cart = [];
    updateCart();
  } else {
    alert("⚠️ Please fill in all details.");
  }
});

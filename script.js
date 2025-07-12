const modal = document.getElementById("buyModal");
const buyBtns = document.querySelectorAll(".buy-btn");
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".submit");

// ان پٹ فیلڈز ریفرنس
const nameInput = document.querySelector('input[placeholder="Enter Your Name"]');
const addressInput = document.querySelector('input[placeholder="Enter Your Address"]');
const mobileInput = document.querySelector('input[placeholder="Enter Your Mobile Number"]');

buyBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// ✅ Submit پر Validation چیک کریں
submitBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const address = addressInput.value.trim();
  const mobile = mobileInput.value.trim();

  if (name === "" || address === "" || mobile === "") {
    alert("Please fill in all the fields before submitting.");
    return;
  }

  alert("Your order has been placed successfully!");
  modal.style.display = "none";

  // فیلڈز خالی کریں (optional)
  nameInput.value = "";
  addressInput.value = "";
  mobileInput.value = "";
});


const btnEl = document.getElementById("calculator");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
  const billValue = parseFloat(billInput.value) || 0; // Handle invalid input
  const tipValue = parseFloat(tipInput.value) || 0;   // Handle invalid input
  const totalValue = billValue * (1 + tipValue / 100);
  totalSpan.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);

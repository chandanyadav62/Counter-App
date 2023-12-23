// getting the html elements//
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");

// for decrement button click//
decrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value > 0) {
    displayValue.innerText = value - 1;
  } else {
    alert("Negative value not allowed so shanti s hath peeche krlo!");
  }
});

// for increment button click//
incrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value >= 10) {
    alert("10+ values are not allowed shnti s rho ab!");
  } else {
    displayValue.innerText = value + 1;
  }
});

// for reset button click/
resetBtn.addEventListener("click", () => {
  displayValue.innerText = 0;
});

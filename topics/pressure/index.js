// Interactive water level
const range = document.getElementById("waterRange");
const water = document.getElementById("waterLevel");

range.addEventListener("input", () => {
  water.style.height = `${range.value}%`;
});

// Pressure calculator
document.getElementById("calcBtn").addEventListener("click", () => {
  const h = parseFloat(document.getElementById("height").value);
  const rho = parseFloat(document.getElementById("density").value);
  const g = parseFloat(document.getElementById("gravity").value);

  if (isNaN(h) || isNaN(rho) || isNaN(g)) {
    document.getElementById("result").textContent = "Please enter all values.";
    return;
  }

  const pressure = rho * g * h;
  document.getElementById("result").textContent = `Pressure: ${pressure.toFixed(2)} Pa`;
});

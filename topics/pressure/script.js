// ---------------- WATER DEPTH VISUAL ---------------- //
const range = document.getElementById("waterRange");
const water = document.getElementById("waterLevel");

if (range && water) {
  range.addEventListener("input", () => {
    water.style.height = `${range.value}%`;
  });
}

function updateWaterLevel() {
  const h = parseFloat(document.getElementById("height").value);
  if (!isNaN(h) && h >= 0 && h <= 50) {
    water.style.height = `${Math.min(h * 3, 100)}%`;
  }
}

// ---------------- PRESSURE CALCULATOR ---------------- //
function calculatePressure() {
  const density = parseFloat(document.getElementById("density").value);
  const height = parseFloat(document.getElementById("height").value);
  const gravity = parseFloat(document.getElementById("gravity").value);

  const resultBox = document.getElementById("resultBox");
  const resultElement = document.getElementById("result");

  if (isNaN(density) || isNaN(height) || isNaN(gravity)) {
    resultElement.textContent = "Please fill all fields";
    resultElement.style.color = "#ff6b6b";
    resultBox?.classList.add("show");
    return;
  }

  const pressure = density * gravity * height;
  resultElement.textContent = `${pressure.toFixed(2)} Pa`;
  resultElement.style.color = "#2b6fecff";
  resultBox?.classList.add("show");

  // Update pressure bar visual based on pressure
  const indicator = document.getElementById("pressureIndicator");
  if (indicator) {
    indicator.style.height = `${Math.min(pressure / 2000, 100)}%`;
  }

  // Update water level visual too
  updateWaterLevel();
}

// ---------------- BUTTON EVENT LISTENER ---------------- //
const calcBtn = document.getElementById("calcBtn");
if (calcBtn) {
  calcBtn.addEventListener("click", calculatePressure);
}

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
    resultBox.classList.add("show");
    return;
  }

  const pressure = density * gravity * height;
  resultElement.textContent = `${pressure.toFixed(2)} Pa`;
  resultElement.style.color = "#63e6be";
  resultBox.classList.add("show");

  // Update pressure bar visual based on pressure
  document.getElementById("pressureIndicator").style.height = `${Math.min(pressure / 2000, 100)}%`;
}

// ---------------- WATER DEPTH VISUAL ---------------- //
function updateWaterLevel() {
  const h = parseFloat(document.getElementById("height").value);
  const water = document.getElementById("waterLevel");

  if (!isNaN(h) && h >= 0 && h <= 50) {
    water.style.height = `${Math.min(h * 3, 100)}%`;
  }
}

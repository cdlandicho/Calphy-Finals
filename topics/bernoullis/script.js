// =======================================
// Bernoulli’s Equation Calculator Script
// =======================================
function calculateBernoulli() {
  const density = parseFloat(document.getElementById("density").value);
  const velocity = parseFloat(document.getElementById("velocity").value);
  const height = parseFloat(document.getElementById("height").value);
  const pressure = parseFloat(document.getElementById("pressure").value);
  const resultElement = document.getElementById("result");
  const g = 9.8;

  if (isNaN(density) || isNaN(velocity) || isNaN(height) || isNaN(pressure)) {
    resultElement.textContent = "⚠️ Please enter valid numbers for all fields.";
    resultElement.style.color = "#ffb3b3";
    return;
  }

  const totalEnergy = pressure + 0.5 * density * velocity ** 2 + density * g * height;
  resultElement.textContent = `Result: ${totalEnergy.toFixed(2)} Pa (Total Energy)`;
  resultElement.style.color = "#fff";
}

// ===================================================
// Interactive Flow Illustration (Animated)
// ===================================================
document.addEventListener("DOMContentLoaded", () => {
  // Auto flow simulation (randomized)
  const flowSpeed = document.getElementById("flowSpeed");
  const widePressure = document.getElementById("widePressure");
  const narrowPressure = document.getElementById("narrowPressure");

  if (flowSpeed && widePressure && narrowPressure) {
    let speed = 5;

    setInterval(() => {
      speed += Math.random() * 2 - 1;
      if (speed < 3) speed = 3;
      if (speed > 7) speed = 7;

      const Pw = (100 - speed * 2.5).toFixed(1);
      const Pn = (80 - speed * 4).toFixed(1);

      flowSpeed.textContent = `${speed.toFixed(1)} m/s`;
      widePressure.textContent = `${Pw} kPa`;
      narrowPressure.textContent = `${Pn} kPa`;
    }, 1500);
  }

  // Flow speed slider control
  const speedSlider = document.getElementById("speed");
  const flowDots = document.querySelector(".flow-dots");
  const p1Text = document.getElementById("p1");
  const p2Text = document.getElementById("p2");

  if (speedSlider && flowDots && p1Text && p2Text) {
    speedSlider.addEventListener("input", () => {
      const speed = parseFloat(speedSlider.value);
      flowDots.style.animationDuration = `${6 / speed}s`;

      const p1 = 120 - (speed - 1) * 5;
      const p2 = 90 - (speed - 1) * 10;

      p1Text.textContent = `${Math.round(p1)} kPa`;
      p2Text.textContent = `${Math.round(p2)} kPa`;
    });
  }
});

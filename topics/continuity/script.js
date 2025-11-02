// Continuity Equation: A1 * V1 = A2 * V2
const area1Input = document.getElementById('area1');
const velocity1Input = document.getElementById('velocity1');
const area2Slider = document.getElementById('area2');
const velocity2Display = document.getElementById('velocity2');

function calculateVelocity2() {
  const A1 = parseFloat(area1Input.value);
  const V1 = parseFloat(velocity1Input.value);
  const A2 = parseFloat(area2Slider.value);

  if (A1 > 0 && V1 > 0 && A2 > 0) {
    const V2 = (A1 * V1) / A2;
    velocity2Display.value = `${V2.toFixed(2)} m/s`;
  } else {
    velocity2Display.value = "—";
  }
}

area1Input.addEventListener('input', calculateVelocity2);
velocity1Input.addEventListener('input', calculateVelocity2);
area2Slider.addEventListener('input', calculateVelocity2);

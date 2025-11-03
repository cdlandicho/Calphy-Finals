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

  if (density <= 0 || height < 0 || gravity <= 0) {
    resultElement.textContent = "Values must be positive";
    resultElement.style.color = "#ff6b6b";
    resultBox.classList.add("show");
    return;
  }

  const pressure = density * gravity * height;
  resultElement.textContent = `${pressure.toFixed(2)} Pa`;
  resultElement.style.color = "#63e6be";
  resultBox.classList.add("show");
}

// Allow Enter key to calculate
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('input[type="number"]');
  inputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        calculatePressure();
      }
    });
  });
});


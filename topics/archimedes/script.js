function calculate() {
  const density = parseFloat(document.getElementById("density").value);
  const volume = parseFloat(document.getElementById("volume").value);
  const g = 9.8;

  const resultBox = document.getElementById("resultBox");
  const resultElement = document.getElementById("result");

  if (isNaN(density) || isNaN(volume)) {
    resultElement.textContent = "Please enter valid numbers";
    resultElement.style.color = "#ff6b6b";
    resultBox.classList.add("show");
    return;
  }

  if (density <= 0 || volume <= 0) {
    resultElement.textContent = "Values must be positive";
    resultElement.style.color = "#ff6b6b";
    resultBox.classList.add("show");
    return;
  }

  const Fb = density * g * volume;
  resultElement.textContent = `${Fb.toFixed(2)} N`;
  resultElement.style.color = "#4dabf7";
  resultBox.classList.add("show");
}

// Allow Enter key to calculate
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('input[type="number"]');
  inputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        calculate();
      }
    });
  });
});

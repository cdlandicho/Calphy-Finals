function calculateContinuity() {
  const area1 = parseFloat(document.getElementById("area1").value);
  const velocity1 = parseFloat(document.getElementById("velocity1").value);
  const area2 = parseFloat(document.getElementById("area2").value);

  const resultBox = document.getElementById("resultBox");
  const resultElement = document.getElementById("result");

  if (isNaN(area1) || isNaN(velocity1) || isNaN(area2)) {
    resultElement.textContent = "Please fill all fields";
    resultElement.style.color = "#ff6b6b";
    resultBox.classList.add("show");
    return;
  }

  if (area1 <= 0 || velocity1 < 0 || area2 <= 0) {
    resultElement.textContent = "Values must be positive";
    resultElement.style.color = "#ff6b6b";
    resultBox.classList.add("show");
    return;
  }

  const velocity2 = (area1 * velocity1) / area2;
  resultElement.textContent = `${velocity2.toFixed(2)} m/s`;
  resultElement.style.color = "#a5d8ff";
  resultBox.classList.add("show");
}

// Allow Enter key to calculate
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('input[type="number"]');
  inputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        calculateContinuity();
      }
    });
  });
});

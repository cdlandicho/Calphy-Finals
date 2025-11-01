function calculate() {
  const density = parseFloat(document.getElementById("density").value);
  const volume = parseFloat(document.getElementById("volume").value);
  const g = 9.8;

  if (isNaN(density) || isNaN(volume)) {
    document.getElementById("result").textContent = "Please enter valid numbers.";
    return;
  }

  const Fb = density * g * volume;
  document.getElementById("result").textContent = Fb.toFixed(2) + " N";
}

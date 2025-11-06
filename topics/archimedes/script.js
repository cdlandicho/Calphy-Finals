function calculate() {
  let rho = parseFloat(document.getElementById("density").value); // kg/m³
  let V = parseFloat(document.getElementById("volume").value); // m³
  let g = parseFloat(document.getElementById("gravity").value); // m/s²

  if (isNaN(rho) || isNaN(V) || isNaN(g)) {
    alert("Please enter valid numbers.");
    return;
  }

  let Fb = rho * g * V; // Newtons
  document.getElementById("resultBox").classList.add("show");
  document.getElementById("result").innerHTML = Fb.toFixed(2) + " N";
}

function checkFloat() {
  let objectD = parseFloat(document.getElementById("objectDensity").value);
  let fluidD = parseFloat(document.getElementById("fluidDensity").value);
  let object = document.getElementById("floatingObject");
  let resultText = document.getElementById("floatResult");

  if (isNaN(objectD) || isNaN(fluidD)) {
    alert("Please enter values first.");
    return;
  }

  if (objectD < fluidD) {
    object.classList.remove("sink");
    object.classList.add("float");
    resultText.innerHTML = "✅ The object FLOATS (ρobject < ρfluid)";
    resultText.style.color = "#4aed88";
  } else {
    object.classList.remove("float");
    object.classList.add("sink");
    resultText.innerHTML = "❌ The object SINKS (ρobject > ρfluid)";
    resultText.style.color = "#ff6b6b";
  }
}

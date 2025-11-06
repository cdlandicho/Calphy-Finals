function calculateContinuity() {
  let A1 = parseFloat(document.getElementById("area1").value);
  let V1 = parseFloat(document.getElementById("velocity1").value);
  let A2 = parseFloat(document.getElementById("area2").value);

  if (!A1 || !V1 || !A2) {
    document.getElementById("result").textContent = "Incomplete Input";
    return;
  }

  let V2 = (A1 * V1) / A2;
  document.getElementById("result").textContent = V2.toFixed(2) + " m/s";

  updateFlowSpeed(V2);
}

function updateFlowSpeed(speed) {
  let container = document.getElementById("flow-arrows");
  container.innerHTML = ""; 

  let numArrows = 8;
  for (let i = 0; i < numArrows; i++) {
    let arrow = document.createElement("div");
    arrow.classList.add("arrow");
    arrow.textContent = "➤";
    arrow.style.animationDuration = (2 / speed) + "s"; 
    container.appendChild(arrow);
  }
}

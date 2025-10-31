// === Elements ===
const startBtn = document.getElementById('start-btn');
const introCard = document.getElementById('intro-card');
const quizWrapper = document.getElementById('quiz-wrapper');
const darkLayer = quizWrapper.querySelector('.layer.dark');
const lightLayer = quizWrapper.querySelector('.layer.light');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentSpan = document.getElementById('current');
const totalSpan = document.getElementById('total');

// === Questions ===
const quizData = [
  {
    question: "They exist as liquids or gasses and are distinguished through the inability to withstand shear or tangential tension at rest?",
    options: ["Solid", "Pressure", "Fluids", "Gravity"],
    answer: "Fluids"
  },
  {
    question: "What is the SI unit of pressure?",
    options: ["Pascal", "Joule", "Newton", "Bar"],
    answer: "Pascal"
  },
  {
    question: "Fluid Mechanics is the study of the behavior of fluids at rest and in ____",
    options: ["Pressure", "Motion", "Density", "Volume"],
    answer: "Motion"
  },
  {
    question: "Pressure is scalar quantity because it has magnitude but no _____",
    options: ["Density", "Velocity", "Direction", "Volume"],
    answer: "Direction"
  },
  {
    question: "Fluid pressure increases with ___?",
    options: ["Density", "Depth", "Velocity", "Volume"],
    answer: "Depth"
  },
  {
    question: "What is the pressure applied when the fluid at rest is a result of gravity?",
    options: ["Archimedes Principle", "Bernoulli Principle", "Fluids", "Hydrostatic Pressure"],
    answer: "Hydrostatic Pressure"
  },
  {
    question: "What principle states that any object that is submerged in a fluid (liquid or gas) experiences an upward buoyant force equal to the weight of the fluid displaced by that object?",
    options: ["Archimedes Principle", "Bernoulli Principle", "Continuity Principle", "Hydrostatic Pressure"],
    answer: "Archimedes Principle"
  },
  {
    question: "What is the CORRECT key concepts about Pressure",
    options: ["Pressure applied to an enclosed fluid is transmitted equally", "Upward force = weight of displaced fluid", 
        "Force per unit area.", "Resistance to flow."],
    answer: "Force per unit area."
  },
  {
    question: "The Buoyant force on an object is dependent on?",
    options: [" The object's density.", "The submerged volume of the object.", 
        "The mass of the object.", "The shape of the object."],
    answer: "The mass of the object."
  },
  {
    question: "The general formula for fluid pressure is?",
    options: ["P = F/A", "P = m/A", " P = F × A", "P = ρVg"],
    answer: "P = F/A"
  },
  {
    question: "The formula for the Continuity Principle is",
    options: ["A1 + A2 = V1 + V2", "A1V1 = A2V2", 
        "P1 + P2 = ρgh", "ρ1V1 = ρ2V2"],
    answer: "A1V1 = A2V2"
  },
  {
    question: "What does Archimedes Principle state about buoyancy",
    options: ["Downward force equals displaced fluid weight", "Downward force equals displaced fluid weight", 
        "Upward force equals displaced fluid weight", "Downward force equals fluid density"],
    answer: "Upward force equals displaced fluid weight"
  },
  {
    question: "Who introduced the Bernoulli Principle?",
    options: ["Daniel Bernoulli", "Mark Bernoulli", "Luis Bernoulli", "Daniel Pascal"],
    answer: "Daniel Bernoulli"
  },
  {
    question: "An object will either float or sink in a fluid depending on the relative _____ of the object and the fluid.",
    options: ["Motion", "Tension", "Volume", "Density"],
    answer: "Density"
  },
  {
    question: "Compared to solids, fluids _____",
    options: ["Have a defined shape", "Cannot change their volume", 
        "Take the shape of their container", "Are unable to move freely"],
    answer: "Take the shape of their container"
  },
  {
    question: "What does the formula A1V1= A2V2  represent?",
    options: ["Archimedes’ Principle", "Bernoulli’s Principle", 
        "Continuity Principle", "Law of Gravity"],
    answer: "Continuity Principle"
  },
  {
    question: "A bath tub is filled with water up to 2m height, find the pressure at the bottom of the tub. P = 1000 kg/m³, g + 9.8 m/s²",
    options: ["19,600 Pa", "9800 Pa", "98000 Pa", "1980 Pa"],
    answer: "19,600 Pa"
  },
  {
    question: "If the area of the first pipe is 4m² and the velocity is 2m/s,  find the velocity in the second pipe if its area is 2m².",
    options: ["2 m/s", "3 m/s", "5 m/s", "4 m/s"],
    answer: "4 m/s"
  },
  {
    question: "Calculate the resulting force, if the gym sand ball of radius 12cm is immersed in water?",
    options: ["7.1 N", "35.0 N", "100 N", "70.9 N"],
    answer: "70.9 N"
  },
  {
    question: "A candle has a density of 20g/cm³. What would be the mass of the candle if the volume is 10cm³?",
    options: ["20g", "50g", "100g", "200g"],
    answer: "200g"
  },
  {
    question: "A pump is used to send water through a hose, the diameter of which is 10 times that of the nozzle through which the water exits. If the nozzle is 1m higher than the pump, and the water flows through the hose 4.0 m/s , what is the gauge pressure of the water at the pump?",
    options: ["1.0 x 10⁴ Pa", "8.0 x 10⁵ Pa", "4.0 x 10⁵ Pa", "7.8 x 10⁴ Pa"],
    answer: "8.0 x 10⁵ Pa"
  },
  {
    question: "Which formula correctly represents hydrostatic pressure?",
    options: ["P = ρgh", "P = F × A", "P = mg", "P = h/ρg"],
    answer: "P = ρgh"
  },
  {
    question: "In the hydrostatic pressure equation, what does “ρ” represent?",
    options: ["Height of the fluid", "Pressure of the fluid", "Density of the fluid", "Weight of the fluid"],
    answer: "Density of the fluid"
  },
  {
    question: "A diver is swimming at a depth of 20 meters below the surface of the ocean. If the density of seawater is 1025 kg/m³, calculate the hydrostatic pressure acting on the diver due to the water alone. (Take 𝑔= 9.81 m/s²)",
    options: ["2.11×10⁴ Pa", "1.01×10 P⁵a", "2.01×10⁵ Pa", "3.01×10⁵ Pa"],
    answer: "2.01×10⁵ Pa"
  },
  {
    question: "If an object weighing 50N Displaces a volume of water with a weight of 10N, What is the buoyant force on the object?",
    options: ["60 N", "50 N", "40 N", "10 N"],
    answer: "10 N"
  },
  {
    question: "Hydrostatic pressure increases with ___?",
    options: ["Velocity", "Volume", "Density", "Depth"],
    answer: "Depth"
  },
  {
    question: "What year was introduced the bernoulli principle",
    options: ["1783", "1736", "1738", "1786"],
    answer: "1738"
  },
  {
    question: "Water flows through a horizontal pipe that narrows from a cross-sectional area of A1= 0.04 m² to A2= 0.01m². If the speed in the wider section is v1= 2 m/s, find the speed v2 in the narrower section.",
    options: ["4 m/s", "8 m/s", "6 m/s", "10 m/s"],
    answer: "8 m/s"
  },
  {
    question: "Water flows through a horizontal pipe that narrows from a diameter of 10 cm to 5 cm. If the speed of water in the wider section is 2 m/s, find the speed in the narrower section.",
    options: ["4 m/s", "8 m/s", "6 m.s", "10 m/s"],
    answer: "Direction"
  },
  {
    question: "A force of 200 N is applied on an area of 0.5 m². Find the pressure.",
    options: ["100 Pa", "300 Pa", "200 Pa", "400 Pa"],
    answer: "400 Pa"
  },
 
];

// === Setup ===
totalSpan.textContent = quizData.length;
let currentQuestion = 0;
let userAnswers = Array(quizData.length).fill(null);

// === Animation ===
function animateFlyAway() {
  // Fly away
  darkLayer.style.transition = "transform 0.9s cubic-bezier(0.4, 0, 1, 1), opacity 0.9s ease-in";
  lightLayer.style.transition = "transform 0.9s cubic-bezier(0.4, 0, 1, 1), opacity 0.9s ease-in";

  darkLayer.style.transform = "translate(-400px, -300px) rotate(-40deg) scale(0.8)";
  lightLayer.style.transform = "translate(400px, 300px) rotate(40deg) scale(0.8)";
  darkLayer.style.opacity = "0";
  lightLayer.style.opacity = "0";

  // Come back
  setTimeout(() => {
    darkLayer.style.transition = "transform 0.9s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.9s ease-out";
    lightLayer.style.transition = "transform 0.9s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.9s ease-out";

    darkLayer.style.transform = "rotate(-6deg) translate(0, 0) scale(1)";
    lightLayer.style.transform = "rotate(4deg) translate(0, 0) scale(1)";
    darkLayer.style.opacity = "1";
    lightLayer.style.opacity = "1";
  }, 900);
}

// === Load Question ===
function loadQuestion() {
  const q = quizData[currentQuestion];
  questionText.textContent = q.question;
  optionsContainer.innerHTML = "";

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.classList.add("option");
    btn.textContent = opt;

    // restore previous selected answer
    if (userAnswers[currentQuestion]) {
      btn.classList.add("disabled");
      if (opt === q.answer) btn.classList.add("correct");
      if (opt === userAnswers[currentQuestion] && opt !== q.answer)
        btn.classList.add("wrong");
    }

    btn.addEventListener("click", () => checkAnswer(btn, q.answer));
    optionsContainer.appendChild(btn);
  });

  // update progress
  currentSpan.textContent = currentQuestion + 1;
  prevBtn.disabled = currentQuestion === 0;
  nextBtn.disabled = currentQuestion === quizData.length - 1;
}

// === Check Answer (Fixed One-Time Click) ===
function checkAnswer(selected, correctAnswer) {
  //  Block all future clicks right away
  const buttons = optionsContainer.querySelectorAll(".option");
  buttons.forEach(btn => {
    btn.disabled = true; // actual HTML disable (not just class)
    btn.classList.add("disabled");
  });

  userAnswers[currentQuestion] = selected.textContent.trim();

  // ✅ Color feedback
  if (selected.textContent.trim() === correctAnswer) {
    selected.classList.add("correct");
  } else {
    selected.classList.add("wrong");
    buttons.forEach(btn => {
      if (btn.textContent.trim() === correctAnswer) btn.classList.add("correct");
    });
  }
}

// === Navigation Buttons ===
nextBtn.addEventListener("click", () => {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    animateFlyAway();
    setTimeout(loadQuestion, 900);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    animateFlyAway();
    setTimeout(loadQuestion, 900);
  }
});

// === Start Quiz ===
startBtn.addEventListener("click", () => {
  introCard.style.display = "none";
  quizWrapper.style.display = "block";
  animateFlyAway();
  loadQuestion();
});



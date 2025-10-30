// === Elements ===
const startBtn = document.getElementById('start-btn');
const introCard = document.getElementById('intro-card');
const quizWrapper = document.getElementById('quiz-wrapper');
const darkLayer = quizWrapper.querySelector('.layer.dark');
const lightLayer = quizWrapper.querySelector('.layer.light');
const nextBtn = quizWrapper.querySelector('.nav-btn.next');

// === Fly-Away (Nalipad) Animation ===
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

// === Start Quiz ===
startBtn.addEventListener("click", () => {
  introCard.style.display = "none";
  quizWrapper.style.display = "block";
  animateFlyAway();
});

// === Next Button Animation ===
nextBtn.addEventListener("click", () => {
  animateFlyAway();
});

// === Quiz Logic (Correct/Wrong + One Try Only) ===
const options = document.querySelectorAll(".option");
const correctAnswer = "10N";

options.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.classList.contains("disabled")) return;

    options.forEach((btn) => btn.classList.add("disabled"));

    if (option.textContent.trim() === correctAnswer) {
      option.classList.add("correct");
    } else {
      option.classList.add("wrong");
      options.forEach((btn) => {
        if (btn.textContent.trim() === correctAnswer) {
          btn.classList.add("correct");
        }
      });
    }
  });
});

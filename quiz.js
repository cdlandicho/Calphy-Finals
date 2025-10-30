const options = document.querySelectorAll('.option');
const correctAnswer = '10N';

options.forEach(option => {
  option.addEventListener('click', () => {
    const selected = option.textContent.trim();

    // Disable all buttons so user can't change after picking
    options.forEach(btn => btn.classList.add('disabled'));

    if (selected === correctAnswer) {
      option.classList.add('correct');
      console.log('✅ Correct! The buoyant force is 10N.');
    } else {
      option.classList.add('wrong');
      console.log('❌ Incorrect. The correct answer is 10N.');

      // Highlight the correct answer
      options.forEach(btn => {
        if (btn.textContent.trim() === correctAnswer) {
          btn.classList.add('correct');
        }
      });
    }
  });
});

// Navigation buttons (still placeholders)
document.querySelector('.prev').addEventListener('click', () => {
  alert('Previous question');
});

document.querySelector('.next').addEventListener('click', () => {
  alert('Next question');
});

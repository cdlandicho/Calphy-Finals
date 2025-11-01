const NAV_HEIGHT = 70; // navbar height

// --- Original Smooth Scroll Logic (Unchanged) ---
function smoothScroll(target, duration = 1500) {
  const start = window.scrollY;
  const end = target.offsetTop - NAV_HEIGHT + 70;
  const distance = end - start;
  let startTime = null;

  function easeInOutCubic(t) {
    return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2;
  }

  function animate(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

// Scroll button
const scrollBtn = document.getElementById('scrollBtn');
const aboutSection = document.getElementById('about');
scrollBtn.addEventListener('click', () => smoothScroll(aboutSection, 2000));

// Navbar links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) smoothScroll(target, 1500);
  });
});


// -------------------- AUTOMATIC SMOOTH CAROUSEL LOGIC --------------------

const aboutBoxes = document.getElementById('aboutBoxes');
const originalCards = aboutBoxes.querySelectorAll('.topic-card');

// Card width (280px) + gap (32px) = 312px. Using 315px for safe margin.
const CARD_SCROLL_AMOUNT = 315; 
const TOTAL_CARDS = originalCards.length; // 4
const TOTAL_WIDTH_OF_SET = CARD_SCROLL_AMOUNT * TOTAL_CARDS; // 315 * 4 = 1260

let animationFrameId;
const SCROLL_SPEED = 1; // Pixels per frame (adjust for slower/faster speed)
const FRAME_RATE_MS = 16.6; // ~60 frames per second

/**
 * 1. Clone Cards for Smoother Looping
 * Structure: [1, 2, 3, 4] [1, 2, 3, 4]
 * We clone the entire original set and append it once.
 */
function setupSmoothInfiniteCarousel() {
    // Clone the entire original set and append it.
    originalCards.forEach(card => {
        const clone = card.cloneNode(true);
        aboutBoxes.appendChild(clone);
    });
    
    // Crucially, we do NOT set the initial scroll position here. 
    // The animation loop will start from scrollLeft = 0.
}

// Set up the carousel when the page loads
setupSmoothInfiniteCarousel();

/**
 * 2. Continuous Animation Loop
 * This function uses requestAnimationFrame for smoother, browser-optimized scrolling.
 */
function animateScroll() {
    // Scroll the box container continuously
    aboutBoxes.scrollLeft += SCROLL_SPEED;

    // Check if we have scrolled past the original set of cards (i.e., we are viewing the clone)
    if (aboutBoxes.scrollLeft >= TOTAL_WIDTH_OF_SET) {
        // Instantly jump back to the start of the first original set.
        // This jump is instantaneous because scroll-behavior: smooth is NOT used here.
        aboutBoxes.scrollLeft = 0;
    }

    // Request the next frame to continue the animation
    animationFrameId = requestAnimationFrame(animateScroll);
}


// 3. Start/Stop Animation on Hover (Good UX practice)
function stopAutoScroll() {
    cancelAnimationFrame(animationFrameId);
}

// Start the continuous scrolling
window.addEventListener('load', () => {
    // We disable CSS smooth scroll for this continuous loop
    aboutBoxes.style.scrollBehavior = 'auto';
    animateScroll();

    // Pause on hover
    aboutBoxes.addEventListener('mouseenter', stopAutoScroll);
    aboutBoxes.addEventListener('mouseleave', animateScroll);
});
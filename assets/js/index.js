const toggleBtn = document.querySelector('.toggle_button');
const overlay = document.querySelector('.mobile-menu-overlay');
const closeBtn = document.querySelector('.mobile-menu-close');

toggleBtn.addEventListener('click', () => {
  overlay.classList.add('active');
  document.body.classList.add('menu-open');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
  document.body.classList.remove('menu-open');
});

document.querySelectorAll('.mobile-nav-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.mobile-nav-item');
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.mobile-nav-item.open').forEach(el => {
      el.classList.remove('open');
    });

    if (!isOpen) item.classList.add('open');
  });
});



/* ============================================
   ADD NEW SLIDES HERE.
   Just add another { title, text, img } object.
   The heading "Advice and Guidance / Membership"
   never changes — only these three fields do.
   ============================================ */
const slides = [
  {
    title: "Play Skills",
    text: "Play is essential for connection and development. Our guides help you transform everyday moments into powerful, joyful learning opportunities. Find compassionate advice on Beginning Play, Functional Pretend Play, and structured Construction Play.",
    img: "./assets/images/Rectangle 11.svg"
  },
  {
    title: "Social Interaction",
    text: "Navigating social life is simpler with the right tools. Our resources offer practical strategies to teach and understand the nuances of interaction and connection. Find advice on Joint Attention, using Gestures, and comfortable Eye Contact.",
    img: "./assets/images/slider2.webp"
  },
 {
    title: "Building Blocks for Language & Communication",
    text: "We offer structured resources to build skills from basic awareness to complex ideas. Explore visual lessons on Understanding Sound, Object Labels, and recognising Same and Different.",
    img: "./assets/images/slider3.webp"
},
  {
    title: "Self-Help Skills",
    text: "Fostering independence in daily life builds self-esteem and simplifies family routines. This section offers practical, step-by-step guides for mastering essential self-care skills in a positive way. Find easy-to-follow routines for Toileting, Dressing, and managing transitions.",
     img: "./assets/images/slider4.webp"
  },
   {
    title: "Academic Strategies",
    text: "Learning should be rewarding for every student. This section provides targeted strategies to support various academic disciplines and skill levels. We offer clear resources on literacy fundamentals like Letters, Phonics, and Reading Comprehension.",
     img: "./assets/images/slider-6.webp"
  },
   {
    title: "Cognitive Skills",
    text: "Cognitive skills are essential tools for learning, thinking, and self-management. This area provides structured resources to build foundational concepts for success. Our guides enhance critical executive functions like Planning and Problem Solving.",
     img: "./assets/images/slider-8.webp"
  },

  // add more slides here in the same { title, text, img } shape...
];

let currentIndex = 0;
let isAnimating = false;

const track = document.getElementById('carouselTrack');
const img = document.getElementById('carouselImg');
const titleEl = document.getElementById('carouselTitle');
const textEl = document.getElementById('carouselText');
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');

/* Same motion every time, regardless of which arrow was clicked:
   current content slides out to the LEFT, new content slides in
   from the RIGHT. No mirroring based on direction anymore. */
function goToSlide(newIndex) {
  if (isAnimating) return;
  isAnimating = true;

  track.classList.add('slide-out-left');
  img.classList.add('slide-out-left');

  setTimeout(() => {
    currentIndex = newIndex;
    const slide = slides[currentIndex];
    titleEl.textContent = slide.title;
    textEl.textContent = slide.text;
    img.src = slide.img;

    track.classList.remove('slide-out-left');
    img.classList.remove('slide-out-left');
    track.classList.add('slide-out-right');
    img.classList.add('slide-out-right');

    // force reflow so the browser registers the starting position
    void track.offsetWidth;

    track.classList.remove('slide-out-right');
    img.classList.remove('slide-out-right');
    track.classList.add('slide-in');
    img.classList.add('slide-in');

    setTimeout(() => {
      track.classList.remove('slide-in');
      img.classList.remove('slide-in');
      isAnimating = false;
    }, 400);
  }, 400);
}

nextBtn.addEventListener('click', () => {
  const nextIndex = (currentIndex + 1) % slides.length;
  goToSlide(nextIndex);
});

prevBtn.addEventListener('click', () => {
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  goToSlide(prevIndex);
});

// https://hubforautism.bubblestaging.com/wp-content/uploads/2026/03/Causes-of-Autism-curve-img1-1024x67.png
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



// https://hubforautism.bubblestaging.com/wp-content/uploads/2026/03/Causes-of-Autism-curve-img1-1024x67.png
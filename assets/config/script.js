// ==== Navbar Scroll Effect ====
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }
});

// ==== Typing Effect ====
const typedText = document.querySelector('.typed-text');
if (typedText) {
  const messages = [
    'Keindahan Kota Medan',
    'Budaya yang Kaya',
    'Kuliner yang Menggoda',
    'Alam yang Memukau'
  ];
  let index = 0, charIndex = 0, isDeleting = false;

  function type() {
    const current = messages[index];
    typedText.textContent = current.substring(0, charIndex);

    if (!isDeleting && charIndex < current.length) {
      charIndex++;
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
    }

    if (charIndex === current.length && !isDeleting) {
      isDeleting = true;
      setTimeout(type, 1200); // delay before deleting
      return;
    } else if (charIndex === 0 && isDeleting) {
      isDeleting = false;
      index = (index + 1) % messages.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }

  setTimeout(type, 500); // initial delay
}

// ==== Button Click Animation ====
document.querySelectorAll('.btn, .btn-outline').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('clicked');
    setTimeout(() => btn.classList.remove('clicked'), 200);
  });
});

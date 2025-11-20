// Mobile nav toggle
document.getElementById('navToggle')?.addEventListener('click', () => {
const nav = document.getElementById('siteNav');
const btn = document.getElementById('navToggle');
const open = nav.classList.toggle('open');
btn.setAttribute('aria-expanded', open ? 'true' : 'false');
});


// Smooth scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
a.addEventListener('click', (e) => {
const id = a.getAttribute('href');
const target = document.querySelector(id);
if (target) {
e.preventDefault();
target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
});
});


// Current year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
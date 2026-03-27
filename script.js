/**
 * Evaluación Sumativa 1 - Frontend
 * Archivo: script.js
 * Funcionalidades:
 *  - Menú hamburgesa responsive
 *  - Animación de barras de habilidades al hacer scroll
 *  - Validación del formulario de contacto
 *  - Año dinámico en el footer
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSkillBars();
  initContactForm();
  setCurrentYear();
});

/* ── Menú hamburguesa ──────────────────────────────── */
function initNavbar() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
  });

  // Cerrar menú al hacer clic en un enlace
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '&#9776;';
    });
  });
}

/* ── Animación de barras de habilidades ────────────── */
function initSkillBars() {
  const fills = document.querySelectorAll('.skill-card__fill');

  if (!fills.length) return;

  // Guardar el nivel objetivo y comenzar en 0
  fills.forEach((fill) => {
    fill.dataset.target = fill.style.getPropertyValue('--skill-level');
    fill.style.setProperty('--skill-level', '0%');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          fill.style.setProperty('--skill-level', fill.dataset.target);
          observer.unobserve(fill);
        }
      });
    },
    { threshold: 0.3 }
  );

  fills.forEach((fill) => observer.observe(fill));
}

/* ── Validación del formulario de contacto ─────────── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMsg = document.getElementById('formSuccess');

    clearErrors();
    successMsg.textContent = '';

    let isValid = true;

    if (!nameInput.value.trim()) {
      showError('nameError', 'Por favor, ingresa tu nombre.');
      isValid = false;
    }

    if (!emailInput.value.trim()) {
      showError('emailError', 'Por favor, ingresa tu correo electrónico.');
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError('emailError', 'El formato del correo no es válido.');
      isValid = false;
    }

    if (!messageInput.value.trim()) {
      showError('messageError', 'Por favor, escribe tu mensaje.');
      isValid = false;
    }

    if (isValid) {
      successMsg.textContent = '¡Mensaje enviado correctamente! Te responderé pronto.';
      form.reset();
    }
  });
}

function showError(id, message) {
  const el = document.getElementById(id);
  if (el) el.textContent = message;
}

function clearErrors() {
  ['nameError', 'emailError', 'messageError'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = '';
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ── Año dinámico en el footer ─────────────────────── */
function setCurrentYear() {
  const el = document.getElementById('currentYear');
  if (el) el.textContent = new Date().getFullYear();
}

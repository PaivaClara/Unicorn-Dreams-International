// Simula una carga lenta de datos con setTimeout
document.getElementById('load-data-btn').addEventListener('click', () => {
  const output = document.getElementById('data-output');
  output.textContent = 'Cargando datos mágicos... 🦄✨';

  // Simula un delay largo (4 segundos)
  setTimeout(() => {
    output.textContent = '¡Datos cargados! Aquí hay un unicornio 🦄 con errores intencionales 😅';
  }, 4000);
});

// Formulario con validación incompleta y errores intencionales
document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const errorMsg = document.getElementById('form-error');

  errorMsg.textContent = '';

  // Validación incompleta: no valida formato email correctamente
  if (!email.includes('@')) {
    errorMsg.textContent = 'Por favor, ingresa un correo válido (falta @).';
    return;
  }

  // Contraseña mínima pero no valida longitud real (error)
  if (password.length < 1) {
    errorMsg.textContent = 'La contraseña debe tener al menos 6 caracteres.';
    return;
  }

  // Error: no valida que confirmPassword sea igual a password
  // Esto es intencional para testing QA

  errorMsg.textContent = 'Registro enviado (pero con errores intencionales para testing)';
  // Aquí no se envía realmente nada ni se procesa
});

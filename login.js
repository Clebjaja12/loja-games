// Capturar o formulário de login
const loginForm = document.getElementById('login-form');

// Adicionar um evento de envio ao formulário de login
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar o envio do formulário

  // Capturar os valores inseridos no formulário de login
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Verificar se as informações de login correspondem a algum usuário cadastrado
  const user = users.find(function(user) {
    return user.email === email && user.password === password;
  });

  if (user) {
    // Login bem-sucedido: redirecionar para a página index.html
    window.location.href = 'index.html';
  } else {
    // Login inválido: exibir mensagem de erro
    console.log('Email ou senha inválidos. Tente novamente.');
  }

  // Limpar o formulário
  loginForm.reset();
});
function redirectToIndex() {
  window.location.href = "index.html";
}
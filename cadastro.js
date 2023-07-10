// Armazenar informações de cadastro em uma estrutura de dados (por exemplo, um array)
const users = [];

// Capturar o formulário de cadastro
const signupForm = document.getElementById('signup-form');

// Adicionar um evento de envio ao formulário de cadastro
signupForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar o envio do formulário

  // Capturar os valores inseridos no formulário de cadastro
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Criar um objeto para representar o usuário cadastrado
  const user = {
    name: name,
    email: email,
    password: password
  };

  // Adicionar o usuário à lista de usuários cadastrados
  users.push(user);

  // Limpar o formulário
  signupForm.reset();

  console.log('Cadastro realizado com sucesso!', user);
});
function redirectToIndex() {
  window.location.href = "index.html";
}
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;

  // Armazena os dados no LocalStorage
  localStorage.setItem('cadastroEmail', email);
  localStorage.setItem('cadastroSenha', senha);

  alert('Cadastro realizado com sucesso!');
  window.location.href = 'login.html'; // Redireciona para a página de login
});
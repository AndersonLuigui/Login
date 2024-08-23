const users = [
    { username: 'AndersonLuigui', password: 'senha123' },
    { username: 'Neura', password: 'neura123' },
    { username: 'emanuel', password: '1234' },
    { username: 'joãomiguel', password: 'joaomiguel123' },
    { username:'Matheus', password: 'matheus123'}

];

const loginForm = document.getElementById('loginForm');
const loginResult = document.getElementById('loginResult');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = loginForm.username.value.trim();  // O Método trim() remove espaços em branco
    const password = loginForm.password.value.trim();  // O Método trim() remove espaços em branco

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        loginResult.textContent = `Bem-vindo, ${username}!`;
        sessionStorage.setItem('username', username);  // O sessionStorage serve para expiração na aba
        window.location.href = './html/page.html';
    } else {
        loginResult.textContent = 'Usuário ou senha incorretos.';
    }
});

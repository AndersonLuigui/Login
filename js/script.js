const users = [
    { username: 'AndersonLuigui', password: 'senha123' },
    { username: 'usuario2', password: 'abcd1234' },
    { username: 'emanuel', password: '1234' }
];

const loginForm = document.getElementById('loginForm');
const loginResult = document.getElementById('loginResult');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        loginResult.textContent = `Bem-vindo, ${username}!`;
        localStorage.setItem('username', username);
        window.location.href = './html/page.html';

    } else {
        loginResult.textContent = 'Usuário ou senha incorretos.';
    }
});

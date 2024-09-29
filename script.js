const usuarios = [];

        function salvarUsuario() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username && password) {
                usuarios.push({ username, password });
                localStorage.setItem('usuario', username); // Salva o nome do usuário no localStorage
                document.getElementById('username').value = '';
                document.getElementById('password').value = '';
                window.location.href = 'app.html';
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        }

        window.onload = function() {
            const usuario = localStorage.getItem('usuario');
            if (usuario) {
                // Divide o nome do usuário em partes e pega apenas o primeiro nome
                const primeiroNome = usuario.split(' ')[0];
                document.getElementById('welcome').innerText = `Olá, ${primeiroNome}!`;
            }
        };


        
// Variável de status de login (false indica que o usuário não está logado)
let isLoggedIn = false;

// Função para atualizar a interface do usuário com base no estado de login
function updateUserInterface() {
    if (isLoggedIn) {
        // Se o usuário estiver logado, ocultar o botão de login e mostrar o de logout
        document.getElementById("login").style.display = "none";
        document.getElementById("logout").style.display = "block";

        // Exibir o nome do usuário (aqui simula-se um nome fixo para exemplo)
        document.getElementById("username").textContent = "João"; 

        // Exibir a data atual formatada
        document.getElementById("current-date").textContent = new Date().toLocaleDateString();
    } else {
        // Se o usuário não estiver logado, mostrar o botão de login e esconder o de logout
        document.getElementById("login").style.display = "block";
        document.getElementById("logout").style.display = "none";
    }
}

// Evento de clique no botão de Login
document.getElementById("login").addEventListener("click", () => {
    isLoggedIn = true; // Marca o status de login como verdadeiro
    updateUserInterface(); // Atualiza a interface
});

// Evento de clique no botão de Logout
document.getElementById("logout").addEventListener("click", () => {
    isLoggedIn = false; // Marca o status de login como falso
    updateUserInterface(); // Atualiza a interface
});

// Inicializa a interface com base no estado de login
updateUserInterface();

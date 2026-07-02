// Seleciona o botão que está no HTML
const botao = document.getElementById("botaoTrocar");

// Lista de cores aleatórias para o fundo
const cores = ["#1e1e2e", "#2a0845", "#0f2027", "#203a43", "#12c2e9", "#c471ed"];

// Executa uma função toda vez que o botão é clicado
botao.addEventListener("click", () => {
    // Escolhe uma cor aleatória da lista acima
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    // Aplica a cor ao fundo da página
    document.body.style.backgroundColor = corAleatoria;
});
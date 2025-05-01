function criarPlacar (divJogo, lifes, score) {
    // Cria e adiciona o placar logo após a tabela
    const placar = document.createElement("p");
    placar.id = "pts";
    placar.innerHTML = `Vidas: ${lifes} &nbsp; Pontos: ${score}`;
    placar.style.marginTop = "0.5rem"; // Espaçamento entre tabela e placar
    divJogo.appendChild(placar); // Adiciona o placar abaixo da tabela
}
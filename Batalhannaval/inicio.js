function batalhaNaval() {
    // Mostra a mensagem de carregamento
    document.getElementById("loading").style.display = "block";
    // Esconde a tela inicial e carrega o jogo após 2 segundos
    setTimeout(() => {
        document.getElementById("inicio").style.display = "none";
        document.getElementById("jogo").style.display = "block";
        iniciarJogo();
    }, 1000); // 1000 ms = 2 segundos
}

function iniciarJogo() {
    const tabela = document.createElement("table");

    // Embaralha o array antes de criar a tabela
    position = embaralharArray(position);

    for (let i = 0; i <= 9; i++) {
        const linha = document.createElement("tr");

        for (let j = 0; j <= 9; j++) {
            const celula = document.createElement("td");
            const img = document.createElement("img");

            img.className = "tiro";
            img.src = "img/Fire-icon.png";

            img.onclick = function () {
                atirar(i, j, img);
            };

            celula.appendChild(img);
            linha.appendChild(celula);
        }

        tabela.appendChild(linha);
    }

    const divJogo = document.getElementById("jogo"); // Define a variável corretamente
    divJogo.appendChild(tabela); // Adiciona a tabela ao jogo

    // Cria e adiciona o placar logo após a tabela
    const placar = document.createElement("p");
    placar.id = "pts";
    placar.innerHTML = `Vidas: ${lifes} &nbsp; Pontos: ${score}`;
    placar.style.marginTop = "0.5rem"; // Espaçamento entre tabela e placar
    divJogo.appendChild(placar); // Adiciona o placar abaixo da tabela
}
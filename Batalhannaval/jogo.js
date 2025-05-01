let lifes=5;
let score= 0;

function atirar(linha, coluna, imgElement) {

    if (imgElement.getAttribute("data-clicked") === "true") {
        return; // Se já foi clicada, não faz nada
        }

        // Marca a imagem como clicada
        imgElement.setAttribute("data-clicked", "true");
        // Atualiza a imagem com base na posição
        imgElement.src = imagens[position[linha][coluna]];
 
        // Verifica as condições de pontuação ou perda de vida
        if (position[linha][coluna] == "1") {
            score += 15; // Incrementa 15 pontos
        } else if (position[linha][coluna] == "2") {
            score += 10; // Incrementa 10 pontos
        } else if (position[linha][coluna] == "3") {
            score += 5; // Incrementa 5 pontos
        } else if (position[linha][coluna] == "b") {
            lifes--; // Perde uma vida
            score -= 20; // Perde 20 pontos
        }

        document.getElementById("pts").innerHTML = `Vidas: ${lifes} &nbsp; Pontos: ${score}`;
        
        if (score>=50) {
            alert ("Você venceu!")

            document.getElementById("jogo").style.display="none";
            document.getElementById("inicio").style.display="flex";
            document.getElementById("loading").style.display="none";

            // Remove a tabela se ela existir
            const tabela = document.querySelector("#jogo table");
            if (tabela) {
                tabela.remove();
            }

            // Remove o placar, se ele existir
            const placar = document.getElementById("pts");
            if (placar) {
                placar.remove();
            }

            // Reseta as variáveis de estado
            lifes = 5;
            score = 0;

            // Reseta o tabuleiro para o estado inicial
            position = [
                ["1", "o", "o", "3", "o", "o", "b", "o", "o", "3"],
                ["o", "o", "o", "o", "b", "o", "o", "o", "o", "o"],
                ["o", "o", "o", "o", "o", "3", "o", "o", "b", "2"],
                ["o", "b", "2", "o", "o", "o", "o", "1", "o", "o"],
                ["o", "o", "o", "1", "2", "b", "o", "o", "o", "o"],
                ["3", "o", "o", "b", "o", "o", "o", "o", "o", "b"],
                ["o", "o", "1", "o", "o", "o", "1", "o", "o", "o"],
                ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
                ["b", "2", "b", "o", "o", "o", "o", "o", "b", "2"],
                ["o", "o", "o", "o", "o", "o", "o", "3", "o", "o"]
            ];  
        }

        if (lifes<=0) {
            alert ("Game Over!")

            document.getElementById("jogo").style.display="none";
            document.getElementById("inicio").style.display="flex";
            document.getElementById("loading").style.display="none";

            // Remove a tabela se ela existir
            const tabela = document.querySelector("#jogo table");
            if (tabela) {
                tabela.remove();
            }

            // Remove o placar, se ele existir
            const placar = document.getElementById("pts");
            if (placar) {
                placar.remove();
            }

            // Reseta as variáveis de estado
            lifes = 5;
            score = 0;

            // Reseta o tabuleiro para o estado inicial
            position = [
                ["1", "o", "o", "3", "o", "o", "b", "o", "o", "3"],
                ["o", "o", "o", "o", "b", "o", "o", "o", "o", "o"],
                ["o", "o", "o", "o", "o", "3", "o", "o", "b", "2"],
                ["o", "b", "2", "o", "o", "o", "o", "1", "o", "o"],
                ["o", "o", "o", "1", "2", "b", "o", "o", "o", "o"],
                ["3", "o", "o", "b", "o", "o", "o", "o", "o", "b"],
                ["o", "o", "1", "o", "o", "o", "1", "o", "o", "o"],
                ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
                ["b", "2", "b", "o", "o", "o", "o", "o", "b", "2"],
                ["o", "o", "o", "o", "o", "o", "o", "3", "o", "o"]
            ];  
        }
        }
       
        function embaralharArray(array) {
            // Embaralha cada linha do array
            return array.map(linha => linha
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
            );
        }
 
        const imagens = {
            "o": "img/Wave.png",
            "b": "img/bomba.png",
            "1": "img/Ship-1.png",
            "2": "img/Ship-2.png",
            "3": "img/Ship-3.png",
        };
 
        let position = [
            ["1", "o", "o", "3", "o", "o", "b", "o", "o", "3"],
            ["o", "o", "o", "o", "b", "o", "o", "o", "o", "o"],
            ["o", "o", "o", "o", "o", "3", "o", "o", "b", "2"],
            ["o", "b", "2", "o", "o", "o", "o", "1", "o", "o"],
            ["o", "o", "o", "1", "2", "b", "o", "o", "o", "o"],
            ["3", "o", "o", "b", "o", "o", "o", "o", "o", "b"],
            ["o", "o", "1", "o", "o", "o", "1", "o", "o", "o"],
            ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
            ["b", "2", "b", "o", "o", "o", "o", "o", "b", "2"],
            ["o", "o", "o", "o", "o", "o", "o", "3", "o", "o"]
        ];
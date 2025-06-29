//------------------------------------------botao 1-------------------------------------------------

function soma() {
  let num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
  let num2 = parseInt(prompt("Digite o segundo número inteiro:"));

  let resultado = num1 + num2;
  alert("A soma dos números é: " + resultado);
}
//---------------------------------------------botao 2------------------------------------------------
function media() {
  let quantidadeStr = prompt(
    "Quantos números você deseja inserir para calcular a média?"
  );
  let quantidade = parseInt(quantidadeStr);

  if (isNaN(quantidade) || quantidade <= 0) {
    alert("Por favor, digite um número válido e maior que zero.");
    return;
  }

  let soma = 0;
  let numerosDigitados = [];

  for (let i = 0; i < quantidade; i++) {
    let numeroStr = prompt(`Digite o ${i + 1}º número:`);
    let numero = parseFloat(numeroStr);

    if (isNaN(numero)) {
      alert(
        "Entrada inválida. Por favor, digite apenas números. Tente novamente."
      );
      i--;
      continue;
    }

    soma += numero;
    numerosDigitados.push(numero);
  }

  const media = soma / quantidade;

  const elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = `
                <p>Você digitou os números: ${numerosDigitados.join(", ")}</p>
                <p>A média é: <strong>${media.toFixed(2)}</strong></p>
            `;
}

//----------------------------------------botao 3------------------------------------------

function adv() {
  const numeroMaximo = 10;
  const numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
  let tentativas = 0;
  let chute;

  alert(
    `Bem-vindo ao jogo de adivinhação!\nEu pensei em um número entre 1 e ${numeroMaximo}. Tente adivinhar qual é!`
  );

  while (true) {
    chute = prompt(`Qual é o seu palpite?`);
    tentativas++;

    if (chute === null) {
      alert("Jogo cancelado. Que pena!");
      return;
    }

    const palpiteNumero = parseInt(chute);

    if (isNaN(palpiteNumero)) {
      alert("Por favor, digite apenas números.");
      // caso não seja numero
      tentativas--;
      continue;
    }

    if (palpiteNumero === numeroSecreto) {
      alert(
        `Parabéns! Você acertou!\nO número secreto era ${numeroSecreto}.\nVocê precisou de ${tentativas} tentativas.`
      );
      break;
    } else if (palpiteNumero > numeroSecreto) {
      alert(`O número secreto é MENOR que ${palpiteNumero}.`);
    } else {
      alert(`O número secreto é MAIOR que ${palpiteNumero}.`);
    }
  }
}

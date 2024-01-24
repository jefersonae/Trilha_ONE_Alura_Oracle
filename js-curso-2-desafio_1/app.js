let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

function btnConsole(){
    console.log("O botão foi clicado");
}

function btnAlerta(){
    alert("Eu amo JS");
}

function btnPropt(){
    cidade = prompt("Escreva o nome de uma cidade do Brasil");
    alert(`Estive em ${cidade} e lembrei de você`);
}

function btnSoma(){
    num1 = prompt("Digite o primeiro número da soma");
    num2 = prompt("Digite o segundo número da soma");
    soma = parseInt(num1) + parseInt(num2);
    alert(`A soma entre ${num1} + ${num2} = ${soma}`);
}
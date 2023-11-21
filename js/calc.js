document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(e) {
      e.preventDefault();
  
      const idade = parseInt(document.getElementById('idade').value);
      const peso = parseFloat(document.getElementById('peso').value);
      const altura = parseFloat(document.getElementById('altura').value);
  
      const imc = peso / (altura * altura);
  
      const operadoraA = calcplanosoperadoraA(idade, imc);
      const operadoraB = calcplanosoperadoraB(imc);
  
      resultados(operadoraA, operadoraB);
      recomendar(operadoraA, operadoraB);
});

function calcplanosoperadoraA(idade, imc) {
    const planobasico = 100 + (idade * 10 * (imc / 10));
    const planostandard = (150 + (idade * 15)) * (imc / 10);
    const planopremium = (200 - (imc * 10) + (idade * 20)) * (imc / 10);

    return { planobasico, planostandard, planopremium };
  }

function calcplanosoperadoraB(imc) {
    let comorbidade = 0;
    if (imc < 18.5) {
      comorbidade = 10;
    } else if (imc >= 18.5 && imc < 24.9) {
      comorbidade = 1;
    } else if (imc >= 25 && imc < 29.9) {
      comorbidade = 6;
    } else if (imc >= 30 && imc < 34.9) {
      comorbidade = 10;
    } else if (imc >= 35 && imc < 39.9) {
      comorbidade = 20;
    } else {
      comorbidade = 30;
    }

    const planobasico = 100 + (comorbidade * 10 * (imc / 10));
    const planostandard = (150 + (comorbidade * 15)) * (imc / 10);
    const planopremium = (200 - (imc * 10) + (comorbidade * 20)) * (imc / 10);

    return { planobasico, planostandard, planopremium };
  }
function resultados(operadoraA, operadoraB) {
    document.getElementById('planobasicoA').textContent = operadoraA.planobasico.toFixed(2);
    document.getElementById('planostandardA').textContent = operadoraA.planostandard.toFixed(2);
    document.getElementById('planopremiumA').textContent = operadoraA.planopremium.toFixed(2);

    document.getElementById('planobasicoB').textContent = operadoraB.planobasico.toFixed(2);
    document.getElementById('planostandardB').textContent = operadoraB.planostandard.toFixed(2);
    document.getElementById('planopremiumB').textContent = operadoraB.planopremium.toFixed(2);

    document.getElementById('results').style.display = 'block';
  }
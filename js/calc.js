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
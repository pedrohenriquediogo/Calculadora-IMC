
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

function imc() {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    
    if (nome === '' && altura === '' && peso === '') {
        alert ("Preencha os campos vazios!");
    }
    else {
        const imc = (peso / (altura * altura)).toFixed(1);
        
        let classificacao = '';
        
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        }
        else if (imc < 25) {
            classificacao = 'com peso ideal. Parabéns!';
        }
        else if (imc < 30) {
            classificacao = 'levemente acima do peso';
        }
        else if (imc < 35) {
            classificacao = 'com obesidade grau I';
        }
        else if (imc < 40) {
            classificacao = 'com obesidade grau II';
        }   
        else {
            classificacao = 'com obesidade grau III. Cuidado!';
        }


        resultado.textContent = `${nome}, seu IMC é ${imc} e você está ${classificacao}.`;
    }
}

calcular.addEventListener('click', imc);
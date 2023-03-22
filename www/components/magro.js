// This is a JavaScript file

function CalcImc(){
    var imc, massa, altura, nome

    nome = document.getElementById('nome').value
    massa = parseFloat(document.getElementById('massa').value);
    altura = parseFloat(document.getElementById('altura').value);

    imc = (massa / (altura * altura)).toFixed(2)

    document.getElementById('texto1').innerHTML = "Olá " + nome + " seu IMC é: " + imc

    if(imc < 18.5)
    {
        document.getElementById('texto2').innerHTML = " Classificado como: Magreza"
    }

    else if(imc < 24.9){
        document.getElementById('texto2').innerHTML = " Classificado como: Saudável"
    }

    else if(imc < 29.9){
        document.getElementById('texto2').innerHTML = " Classificado como: Sobrepeso"
    }

    else if(imc < 34.9){
        document.getElementById('texto2').innerHTML = " Classificado como: Obesidade Grau I"
    }

    else if(imc < 39.9){
        document.getElementById('texto2').innerHTML = " Classificado como: Obesidade Grau II (severa)"
    }

    else{
        document.getElementById('texto2').innerHTML = " Classificado como: Obesidade Grau III (morbida)"
    }
}
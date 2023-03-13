// This is a JavaScript file

function CalcImc(){
    var imc, massa, altura, nome

    nome = document.getElementById('nome').value
    massa = parseFloat(document.getElementById('massa').value);
    altura = parseFloat(document.getElementById('altura').value);

    imc = (massa / (altura * altura)).toFixed(2)

    document.getElementById('resultado').innerHTML = "Olá " + nome + " seu imc é: " + imc

    if(resultado < 18,5)
    {
        document.getElementById('resultado2').innerHTML = " Classificado como: Magreza"
    }

    else if(resultado < 24,9){
        document.getElementById('resultado2').innerHTML = " Classificado como: Saudável"
    }

    else if(resultado < 29,9){
        document.getElementById('resultado2').innerHTML = " Classificado como: Sobrepeso"
    }

    else if(resultado < 34,9){
        document.getElementById('resultado2').innerHTML = " Classificado como: Obesidade Grau I"
    }

    else if(resultado < 39,9){
        document.getElementById('resultado2').innerHTML = " Classificado como: Obesidade Grau II (severa)"
    }

    else{
        document.getElementById('resultado2').innerHTML = " Classificado como: Obesidade Grau III (morbida)"
    }
}
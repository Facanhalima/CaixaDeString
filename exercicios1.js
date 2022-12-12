const botaoInverte = document.getElementById("invertedor")
const botaoDestaca = document.getElementById("negrito")
const botaoRepetido = document.getElementById("repetida")
const botaoMaiorOcorrencia = document.getElementById("maiorOcorrencia")
const botaoSubstitui = document.getElementById("substituirPalavra")
const botaoCalculaNascimento = document.getElementById("data")
const botaoCalculaDistanciaEmSemanas = document.getElementById("calcularSemanas")
const botaoTestarSenha = document.getElementById("testarSenha")
const botaoCodifica = document.getElementById("codificar")

//how to create encripytation on js

var dataAtual = new Date(); 
var datetime = "Last Sync: " + dataAtual.getDate() + "/"
                + (dataAtual.getMonth()+1)  + "/" 
                + dataAtual.getFullYear() + " @ "  
                + dataAtual.getHours() + ":"  
                + dataAtual.getMinutes() + ":" 
                + dataAtual.getSeconds();


// For todays date;
Date.prototype.today = function () { 
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
}

// For the time now
Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}


var newDate = new Date();
var datetime = "LastSync: " + newDate.today() + " @ " + newDate.timeNow();


var datetime = "LastSync: " + new Date().today() + " @ " + new Date().timeNow();

let inverter = (frase, fraseInvertida) => {

    for(let i=frase.length-1; i>=0; i--) {
        fraseInvertida +=frase[i];
    }

    document.getElementById("fraseInvertida").innerHTML = fraseInvertida;

}

let inverterTexto = () =>{
     // pega valor digitado na caixa de texto
     const frase = document.getElementById("caixaInverter").value;     
     let fraseInvertida= "";
     inverter(frase, fraseInvertida);

 }

 let percorreArray = (frase, fraseNegrito) =>{

    for(let i=0; i<frase.length; i++){

        
        if(("AEIOUaeiou").indexOf(frase[i]) != -1){

            fraseNegrito += (frase[i].bold());

        }else{

            fraseNegrito += frase[i];

        }

    }

    document.getElementById("fraseNegrito").innerHTML = fraseNegrito

 }

 let eDiferente = (listaDePalavras, palavrasNovas) =>{

    if(palavrasNovas.indexOf(listaDePalavras) == -1){

        palavrasNovas.push(listaDePalavras)
        return true

    }

 }

 let contarOcorrencias = (palavra, array) =>{

    let contador = 0

    for(let i = 0; i < array.length; i++){

        if(array[i] == palavra) contador++

    }

    return contador

 }

 let imprimiTabela = (palavra, qnt, tabela) =>{

    if(palavra != ''){

        tabela.innerHTML +=
        `<tr>
        <td>${palavra}</td>
        <td>${qnt}</td>
        </tr>`

    }

 }

 let colocaNegrito = () => {

    const frase = document.getElementById("caixaNegrito").value;    
    let fraseEmNegrito = "";
    percorreArray(frase, fraseEmNegrito) 

 }

 let contarPalavras = () => {

    const frase = document.getElementById("caixaRepetida").value
    const tabela = document.getElementById("tabela")
    tabela.innerHTML = ""
    let listaDePalavras = frase.split(" ")

    let palavrasNovas = []
    
    for(i=0; i < listaDePalavras.length; i++){

        if(eDiferente(listaDePalavras[i], palavrasNovas) == true) 
        imprimiTabela(listaDePalavras[i], contarOcorrencias(listaDePalavras[i], listaDePalavras), tabela)

    }
    

 }

 let maisAparece = (array) => {

    let palavras = []
    let maiorOcorrencia = 0
    let palavra
    for(let i = 0; i < array.length; i++){

        if(eDiferente(array[i], palavras) && contarOcorrencias(array[i], array) > maiorOcorrencia){

            palavra = array[i]
            maiorOcorrencia = contarOcorrencias(array[i], array)

        }

    }

    return palavra

 }

 let encontrarPalavra = (frase, palavraExcluir, palavraDesejada) =>{

    let fraseNova = []

    for(let i = 0; i < frase.length; i++){

        if((frase[i]).indexOf(palavraExcluir) != -1){

            fraseNova[i] = (palavraDesejada)

        }else{

            fraseNova[i] = (frase[i])

        }

    }

    return fraseNova.join(" ")

 }

 let contarMaiorOcorrencia = () => {

    const frase = document.getElementById("caixaMaiorOcorrencia").value
    const tabela = document.getElementById("tabelaMaior")
    tabela.innerHTML = ""
    let listaDePalavras = frase.split(" ")

    let palavrasMaior = maisAparece(listaDePalavras) 
    imprimiTabela(palavrasMaior, contarOcorrencias(palavrasMaior, listaDePalavras), tabela)

 }

 let substituirPalavra = () =>{

    const frase = document.getElementById("caixaPrincipal").value
    const palavraExcluir = document.getElementById("caixaPalavra").value
    const palavraDesejada = document.getElementById("caixaSubstitui").value
    let fraseQuebrada = frase.split(" ")
    let fraseNova = encontrarPalavra(fraseQuebrada, palavraExcluir, palavraDesejada)
    document.getElementById("fraseCompleta").innerHTML = fraseNova

 }

 let reescrever = (data) =>{

    switch(data[1]){

        case 1: data[1] = "de Janeiro de";
        break;

        case 2: data[1] = "de Fevereiro de";
        break;

        case 3: data[1] = "de Março de";
        break;

        case 4: data[1] = "de Abril de";
        break;

        case 5: data[1] = "de Maio de";
        break;

        case 6: data[1] = "de Junho de";
        break;

        case 7: data[1] = "de Julho de";
        break;

        case 8: data[1] = "de Agosto de";
        break;

        case 9: data[1] = "de Setembro de";
        break;

        case 10: data[1] = "de Outubro de";
        break;

        case 11: data[1] = "de Novembro de";
        break;

        case 12: data[1] = "de Dezembro de";
        break;

    }

    return data.join(" ")

 }

 let contarDias = () => {

    const caixaDataNascimento = document.getElementById("dataNascimento").value
    let dataArray = caixaDataNascimento.split("/")
    let dataDeNascimento = new Date(dataArray[2], dataArray[1], dataArray[0]);
    let hoje = new Date(dataAtual.getFullYear(), (dataAtual.getMonth() + 1), dataAtual.getDate())
    let days = Math.floor((hoje - dataDeNascimento) / 86400000);
    document.getElementById("dias").innerHTML = days

 }

 let escreverPorExtenso = () =>{

    const dataNascimento = document.getElementById("dataNascimento").value
    let dataArray = dataNascimento.split("/")
    let converter = reescrever(dataArray)
    document.getElementById("dataExtensa").innerHTML = converter

 }

 let calculaSemanas = () =>{

    const caixa1 = document.getElementById("data1").value
    const caixa2 = document.getElementById("data2").value
    let data1 = caixa1.split("/")
    let data2 = caixa2.split("/")
    let distancia1 = new Date(data1[2], data1[1], data1[0])
    let distancia2 = new Date(data2[2], data2[1], data2[0])
    let distanciaEmDias = Math.floor((distancia2 - distancia1) / 86400000)
    let distanciaEmSemanas = (String(distanciaEmDias / 7)).split(".")
    document.getElementById("semanas").innerHTML = distanciaEmSemanas[0]

 }

 let categorizaSenha = (senha) =>{

    var strength = 0;
    if (senha.match(/[a-z]+/)) {
    strength += 1;
    }
    if (senha.match(/[A-Z]+/)) {
    strength += 1;
    }
    if (senha.match(/[0-9]+/)) {
    strength += 1;
    }
    if (senha.match(/[$@#&!]+/)) {
    strength += 1;

    }
    return strength

 }

 let testarSenha = (senha) =>{

    let avaliacao = categorizaSenha(senha)

    switch(avaliacao){

        case 4: avaliacao = "forte"
        document.getElementById("avaliacao").style.color = 'green';
        break
        
        case 3: avaliacao = "média"
        document.getElementById("avaliacao").style.color = 'orange';
        break

        case 2: avaliacao = "fraca"
        document.getElementById("avaliacao").style.color = 'red';
        break

        case 1: avaliacao = "fraca"
        document.getElementById("avaliacao").style.color = 'red';
        break

    }

    return avaliacao

 }

 let avaliarSenha = () =>{

    const caixaSenha = document.getElementById("senha").value
    let avaliacao = testarSenha(caixaSenha)
    console.log(avaliacao)
    document.getElementById("avaliacao").innerHTML = avaliacao

 }

 let retornaPolar = posicao =>{
    const polar = ["p","o","l","a","r",]
    return polar[posicao]
  }
  let retornaTenis = posicao =>{
    const tenis = ["t","e","n","i","s",]
    return tenis[posicao]
  }
  let trocarTenisPolar = array =>{
    for(let i = 0; i < array.length; i++){
      if("tenis".indexOf(array[i].toLowerCase()) != -1){
        if(array[i] == array[i].toLowerCase()){
          array[i] = retornaPolar("tenis".indexOf(array[i].toLowerCase()))
        }else array[i] = retornaPolar("tenis".indexOf(array[i].toLowerCase())).toUpperCase()
        continue
      }
      if("polar".indexOf(array[i].toLowerCase()) != -1){
        if(array[i] == array[i].toLowerCase()){
          array[i] = retornaTenis("polar".indexOf(array[i].toLowerCase()))
        }else array[i] = retornaTenis("polar".indexOf(array[i].toLowerCase())).toUpperCase()
        continue
      }
    }   
  }

  let imprimirArrayCaracteres = (div,array) =>{
    for(let i = 0; i<array.length; i++){
      div.innerHTML += array[i]
    }
  }

  let codificar = () =>{

    const textoDigitado = document.querySelector("#frase").value
    let contentDiv = document.querySelector("#fraseCodificada")
    contentDiv.innerHTML = ``
    let bagOfLetters = textoDigitado.split("")
    trocarTenisPolar(bagOfLetters)
    imprimirArrayCaracteres(contentDiv,bagOfLetters)

  }

botaoInverte.addEventListener("click",function(){
    
    inverterTexto()

})

botaoDestaca.addEventListener("click", function(){

    colocaNegrito()

})

botaoRepetido.addEventListener("click", function(){

    contarPalavras()

})

botaoMaiorOcorrencia.addEventListener("click", function(){

    contarMaiorOcorrencia()

})

botaoSubstitui.addEventListener("click", function(){

    substituirPalavra()

})

botaoCalculaNascimento.addEventListener("click", function(){

    contarDias()
    escreverPorExtenso()

})

botaoCalculaDistanciaEmSemanas.addEventListener("click", function(){

    calculaSemanas()

})

botaoTestarSenha.addEventListener("click", function(){

    avaliarSenha()

})

botaoCodifica.addEventListener("click", function(){

    codificar()

})
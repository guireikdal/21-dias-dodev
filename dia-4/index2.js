let nome = prompt("Olá, qual o seu nome?")
let idade = parseInt(prompt("Qual a sua idade"))
let carteira = prompt("Possui carteira de motorista")
let carro = prompt("Possui carro?")


if ( idade<18 || carteira == "não"){
    console.log (nome + ", você não pode dirigir!")   

}else if( carro == "não"){
    console.log( nome + ", compre um carro!")


}else{
    console.log(nome + ", você será o motorista")


}
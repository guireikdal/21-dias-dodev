
// camelCase


let nome = "";
let idade = 0
let altura = 0
let peso = 0



 nome = prompt("Olá, qual o seu nome?");
 idade = parseInt(prompt("Qual sua idade?"));
 altura = parseFloat(prompt("Qual sua altura(em m)"));
 peso = prompt("Qual seu peso(em kg)?");

let anoDeNascimento = 0
 anoDeNascimento = 2024 - idade

 let IMC = 0
  IMC = peso / (altura * altura)


console.log ("Ola " + nome + ", você tem " + idade + " anos, nasceu em " + anoDeNascimento + 
    ", tem " + altura + "m de altura, pesa " + peso + "Kg e seu IMC é " +IMC+ "Kg/m2")  

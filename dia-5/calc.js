// switch = muitas igualdades
// if else = poucas igualdades ou comparação

let num1 = parseInt(prompt("Forneça o primeiro número"))
let num2 = parseInt(prompt("Forneça o segundo número"))
let operacao = parseInt(prompt( " Qual operação deseja ?" + "\n1 = +; \n2 = -; \n3 = *; \n4 = /"))

switch(operacao){
    case 1:
        console.log(num1 + " + " + num2 + " = " + (num1 + num2))
        break;
    case 2:
        console.log(num1 +  " - " +  num2 + " = " + (num1 - num2))
        break; 
    case 3:
        console.log(num1 + " * " + num2 + " = " + (num1 * num2))
        break;    
     case 4:
        console.log(num1 + "/" + num2 +  " = " + (num1 / num2))
        break;     
    default:
    console.log("Operação inválida")
        break;
}

let pedido = parseInt(prompt("Qual serviço vocÊ deseja?" + "\n1 = Abastecer gasolina; \n2 = Abastecer com alcool; \n3 = Calibrar o pneu"));

switch(pedido){

        case 1:
            let gasolina = parseInt(prompt("Quantos reais de Gasolina quer abastecer?"));
                console.log ("Esse valor equivale à " + gasolina / 5 + " litros");
                break; 

        case 2: 
             let alcool = parseInt(prompt("Quantos reais de álcool quer abastecer?"));
                console.log ("Esse valor equivale à " + alcool / 3 + " litros");
                break;
             
        case 3: 
            console.log("Pneus calibrados com sucesso!");
            break;

        default:
            console.log("Não oferecemos esse serviço")
 

}
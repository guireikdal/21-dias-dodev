//ex1
let valor = parseInt(prompt("Insira um valor inteiro e positivo diferente de 0"))

if (valor>0){
    for(let contagem =0; contagem <= valor; contagem++) {  
        console.log(contagem)
    }
}    
    else{
    console.log("Insira um valor dentro da especificação")
}


//ex2

for(contagem = 0; contagem<=50; contagem+=5 ){
    console.log(contagem)
}



//ex3

for(contagem2 = 50; contagem2>=0; contagem2-=5){
    console.log(contagem2)
}
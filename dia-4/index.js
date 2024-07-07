let fome = prompt("Olá, você está com fome?")
let dinheiro = prompt("Você está com dinheiro?")
let restaurante = prompt("O restuarante que voce deseja ir está aberto?")

if(dinheiro == "não" || fome == "não"){
 console.log("Hoje a janta sera em casa!")

}else if( dinheiro == "sim" && restaurante == "sim"){
 console.log("Hoje o jantar será no seu restaurante favorito");

}else {
 console.log("Peça um delivery!");
}

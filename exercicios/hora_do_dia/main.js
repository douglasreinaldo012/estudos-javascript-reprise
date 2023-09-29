var agora = new Date();
var hora = agora.getHours();
var txthora = document.querySelector('p#hr')

if(hora > 5 && hora<18){
 txthora.innerHTML = `Bom Dia!${hora}`
}
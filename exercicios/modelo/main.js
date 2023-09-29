var agora = new Date();
var hora = agora.getHours();
var txthora = document.querySelector('div#hr')
var m = document.querySelector('main#main')

if(hora >= 5 && hora< 12){
    txthora.innerHTML = `Bom Dia! Agora são ${hora} horas.`
    
}else if(hora >= 12  && hora < 18){
        txthora.innerHTML = `Boa Tarde! Agora são ${hora} horas.`;
}else if(hora >= 18 && hora<24){
        txthora.innerHTML = `Boa Noite! Agora são ${hora} horas.`;
}else if(hora >= 0  && hora < 5){
         txthora.innerHTML = `Boa Madrugada! Agora são ${hora} horas.`;
}else {
    txthora.innerHTML = `Agora são ${hora} horas.`;
}
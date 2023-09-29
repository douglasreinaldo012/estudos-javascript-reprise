function carregar(){
var agora = new Date();
var hora = agora.getHours();
var txthora = document.querySelector('div#hr')

var img = document.getElementById("imagem")

if(hora >= 5 && hora< 12){
    txthora.innerHTML = `Bom Dia! Agora são ${hora} horas.`
    img.src = './img/manha2.png' 
    document.body.style.background = '#e7bd47';

}else if(hora >= 12  && hora < 18){
        txthora.innerHTML = `Boa Tarde! Agora são ${hora} horas.`;
        img.src = './img/tarde2.png'
        document.body.style.background = '#374b21';
        
}else if(hora >= 18 && hora<24){
        txthora.innerHTML = `Boa Noite! Agora são ${hora} horas.`;
        img.src = './img/noite2.png'
        document.body.style.background ='#183241';

}else if(hora >= 0  && hora < 5){
         txthora.innerHTML = `Boa Madrugada! Agora são ${hora} horas.`;
         img.src = './img/noite2.png'
         document.body.style.background ='#183241';
         
}else {
    txthora.innerHTML = `Agora são ${hora} horas.`;
}
}
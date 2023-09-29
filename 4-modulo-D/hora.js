var agora = new Date();
var hora_atual = agora.getHours();
var min = agora.getMinutes();
if(hora_atual >= 5 && hora_atual < 12){
    console.log(`Hora:${hora_atual}:${min}`);
    console.log('Bom Dia!');
}else if(hora_atual>12 && hora_atual < 18){
        console.log(`Hora:${hora_atual}`);
        console.log("Boa tarde!")
}else if(hora_atual>18 && hora_atual<24){
    console.log(`Hora:${hora_atual}:${min}`);
    console.log("Boa Noite!")
}else{
    console.log(`Hora:${hora_atual}:${min}`);
    console.log("Boa Madrugada!")
}

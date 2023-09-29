var agora = new Date();
var dia = agora.getDay();
var hoje = "";
switch(dia){
    
case 0:
    
     hoje = 'Domingo' 
break
case 1:
    
    hoje = 'Segunda' 
break
case 2:
    
    hoje = 'Terça' 
break
case 3:
   
    hoje = 'Quarta' 
break
case 4:
    
    hoje = 'Quita' 
break
case 5:
    
    hoje = 'Sexta' 
break
case 6:
    
    hoje = 'Sábado' 
break
default:
    console.log('Erro')
break
}
console.log(`Hoje é ${hoje}`)
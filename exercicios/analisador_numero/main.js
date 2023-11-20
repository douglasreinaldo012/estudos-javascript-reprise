
function adicionar(){
    var num_adc = document.getElementById('numero_adc');
    var num_tran = Number(num_adc.value);
    var res = document.getElementById('sel-res')
     
    if(num_tran >= 1 && num_tran <= 100 ){
        

    }else{
        window.alert("Este valor não é válido para analise!")
    }
    
}
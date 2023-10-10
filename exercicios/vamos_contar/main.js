function contar(){
var txt_inic = document.getElementById('txt_inicio');
var txt_fim = document.querySelector('input#txt_fim')
var txt_passo = document.getElementById("txt_passo")
var res = document.getElementById('res');
if(txt_inic.value.length == 0 || txt_fim.value.length == 0){
    res.innerHTML = "Impossível contar, verifique se os compos estão preechidos corretamente!"
}else{
    res.innerHTML ='Contando:'
    var i = Number(txt_inic.value);  
    var f = Number(txt_fim.value)
    var p = Number(txt_passo.value)
    if(p == 0 || p < 0 || txt_passo.value.length == 0){
        window.alert('Passo inválido! considerando passo 1');
        p = 1;
    }
    //1F6B6
    if(i<f){
        for(var c = i; c <= f; c += p){
        //contagem crescente
        res.innerHTML += `${c} \u{1F6B6}`
        }
    }else if(i>f){
        //contagem regressiva
        for(var c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F6B6}`
            }
    }else{
        res.innerHTML ='Os valores são iguais!'
    }
}
}

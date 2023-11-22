let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];
//Esta função verifica se o valor está entre os valores validos para analise
function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  }else{
    return false
  }
}
//esta função verifica se o valor se encontra na lista
function inLista(l , n){
    //-1 um significa que o valor não se encontra na lista
    if(l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(valores , num.value)){
        window.alert("Tudo Ok")
    }else{
        window.alert("Valor Inválido! Verifique se está entre 1 e 100")
    }
}
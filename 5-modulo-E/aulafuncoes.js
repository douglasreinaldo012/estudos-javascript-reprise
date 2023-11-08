
function chamar(){
    var nrecebido = document.getElementById('numero')
    var n3 = Number(nrecebido.value);
    var p = document.getElementById('res')

    var resultado = chamada(n3)
    p.innerHTML = ` ${resultado}`;

function chamada(n1){
var n = n1;
 if(n % 2 == 0){
 return 'par'
  }else{
    return 'impar'
}

}
}






 
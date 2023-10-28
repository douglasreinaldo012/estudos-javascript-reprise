var numeros = [];
function buscar(){
    var n = document.getElementById('numero');
    var res = document.getElementById('res');
    var reso = document.getElementById('reso');
    var res1 = document.getElementById('res1');
    var n2 = Number(n.value);
    numeros.push(n2);
    res.innerHTML = `Adicionados: ${numeros}`;
    numeros.sort();
    reso.innerHTML = `Ordenado:`;
    for(var i in numeros){
    reso.innerHTML += ` ${numeros[i]},`;
    }
    pos = numeros.indexOf(3);
    if(pos == -1){
        res1.innerHTML = `O valor 3 não foi encontrado`;
    }else{
        res1.innerHTML = `O valor 3 esta na posição ${pos}`;
    }
}

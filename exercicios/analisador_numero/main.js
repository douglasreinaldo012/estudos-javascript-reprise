var numeros = [];
var res2 = document.getElementById('res-div')
function adicionar(){
    var num_adc = document.getElementById('numero_adc');
    var num_tran = Number(num_adc.value);
    var res = document.getElementById('sel-res')
    res2.innerHTML =` `;
    if(num_tran >= 1 && num_tran <= 100){
        if(numeros.includes(num_tran)==false){
            res.innerHTML = ` ` 
            numeros.push(num_tran)
        
            for(i in numeros){
            res.innerHTML +=`<option><p>Valor ${numeros[i]} Adicionado</p></option>`;
            }
        }else{
            window.alert("Este valor já existe!")
        }
    }else{
        window.alert("Este valor não é válido para analise!confira se está entre 1 e 100")
    }
    
}
function finalizar(){
    var maior_valor = 0;
    var menor_valor = 0;
    var soma = 0;
    var media = numeros.length;

    for(j in numeros){
        if(numeros[j] > maior_valor){
            maior_valor = numeros[j];
            
        } else {
        }
    }
    for(k in numeros){
        soma = soma + numeros[k];
    }
    menor_valor = maior_valor;
    media = soma / media;
    for(c in numeros){
        if(numeros[c] <= menor_valor){
            menor_valor = numeros[c]
        }else{
        }

    }
    res2.innerHTML = `<p>Ao todo temos ${numeros.length} posições</p>
    <p>O maior valor foi ${maior_valor}</p>
    <p>O menor valor foi ${menor_valor}</p>
    <p>A soma dos valores : ${soma}</p>
    <p>A media dos valores : ${media}</p>`;
}
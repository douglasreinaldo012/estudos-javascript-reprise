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
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(valores , num.value)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = ` Valor ${num.value} Adicionado`
        lista.appendChild(item)
        res.innerHTML = ' '
    }else{
        window.alert("Valor Inválido! Verifique se está entre 1 e 100 ou se já existe na lista")
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
      window.alert("Adicione valores antes de finalizar");
    }else{
      let tot = valores.length
      let maior = valores[0]
      let menor = valores[0]
      let soma = 0
      let media = 0
      for(let pos in valores){
        soma += valores[pos]
        if(valores[pos] > maior){
          maior = valores[pos]
        }
        if(valores[pos] < menor){
          menor = valores[pos]
        }
      }
      media = soma / valores.length
      res.innerHTML = ''
      res.innerHTML += `<p>Ao todo temos ${tot} numeros cadastrados</p>`
      res.innerHTML += `<p>O maior ${maior} </p>`
      res.innerHTML += `<p>O menor valor foi ${menor} </p>`
      res.innerHTML += `<p>Soma dos valores :${soma}</p>`
      res.innerHTML += `<p>Media dos valores :${media}</p>`
    }
}
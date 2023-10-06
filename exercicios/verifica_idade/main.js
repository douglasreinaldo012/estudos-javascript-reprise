function verificarIdade(){

var agora = new Date();
var ano_atual = agora.getFullYear();
var ano = document.getElementById('ano');
var texto = document.getElementById('texto')
var imagem = document.getElementById('imagem')

if(ano.value.length == 0 || ano.value > ano_atual){
    window.alert('ERRO, Verrifique se os dados estão preechidos corretamente!')
}else{
        var idade = ano_atual - Number(ano.value);
        var fsex = document.getElementsByName ('radsex');
        var genero = ''

        if(fsex[0].checked && idade>=0 && idade <= 1){

            genero = "um menino"
            texto.innerText = `Você tem ${idade} ano de idade e é ${genero}`
            imagem.src = './img/bebe-homem.png'

        }else if(fsex[0].checked && idade>0 && idade <= 4){

                genero = "um menino"
                texto.innerText = `Você tem ${idade} anos de idade e é ${genero}`
                imagem.src = './img/bebe-homem.png'

        }else if(fsex[1].checked && idade>=0 && idade <= 1){

                genero = "uma menina"
                texto.innerText = `Você tem ${idade} ano de idade e é ${genero}`
                imagem.src = './img/bebe-menina.png'
    
        }else if(fsex[1].checked && idade>0 && idade <= 4){

                genero = "uma menina"
                texto.innerText = `Você tem ${idade} anos de idade e é ${genero}`
                imagem.src = './img/bebe-menina.png'

        }else if(fsex[0].checked && idade>4 && idade <= 12){

                genero = "um rapaz"
                texto.innerText = `Você tem ${idade} anos de idade e é ${genero}`
                imagem.src = './img/menino.png'

        }else if(fsex[1].checked && idade>4 && idade <= 12){

                genero = "uma Moça"
                texto.innerText = `Você tem ${idade} anos de idade e é ${genero}`
                imagem.src = './img/menina.png'
    
        }else if(fsex[0].checked && idade>12 && idade <= 59){

                genero = "um Homem"
                texto.innerText = `Você tem ${idade} anos de idade e é ${genero}`
                imagem.src = './img/homem.png'
        
        }else if(fsex[1].checked && idade>12 && idade <= 59){

                genero = "uma Mulher"
                texto.innerText = `Você tem ${idade} anos de idade e é ${genero}`
                imagem.src = './img/mulher.png'
            
        }else if(fsex[0].checked && idade>59){

                genero = "uma idoso"
                texto.innerText = `Você tem ${idade} anos de idade e é ${genero}`
                imagem.src = './img/idoso.png'
                
        }else if(fsex[1].checked && idade>59){

                genero = "uma idosa"
                texto.innerText = `Você tem ${idade} anos de idade e é ${genero}`
                imagem.src = './img/idosa.png'
                    
        }else{
                genero = ""
                texto.innerText = `ERRO!`
                imagem.src = ' '
        }
    
}   
}

function gerarTabuada(){
    var n = document.getElementById('txt_num');
    var num = Number(n.value);
    var mult = document.getElementById('mult');
    var div = document.getElementById('div');
    var ad = document.getElementById('ad');
    var sub = document.getElementById('sub');

    if(n.value.length == 0 ||num < 0){
        window.alert("Digite um número!")
    }else{
        mult.innerHTML = `
        <option>Multiplicação</option>
        `;
        div.innerHTML = `
        <option>Divisão</option>
        `;
        ad.innerHTML = `
        <option>Adição</option>
        `;
        sub.innerHTML = `
        <option>Subtração</option>
        `;

        var rm = 0
        var rd = 0
        var ra = 0
        var rs = 0
        //tabuada de multiplicação e adição
        for(var c = 1; c <= 10;c++){
            rm = c * num
            ra = c + num 
            mult.innerHTML += `
                <option>${num} x ${c} = ${rm}</option>
            `;
            ad.innerHTML += `
            <option>${c} + ${num} = ${ra}</option>
        `
        }
        //tabuada de subtração
        c2 = num;
        for(i = 1; i <= 10; i++){
            c2 ++;
            rs = c2 - num;
            sub.innerHTML += `
            <option>${c2} - ${num} = ${rs}</option>
            `
        }
        //tabuada de divisão
        var c3 = num
        for(i = 1; i <= 10; i++){
                
            rd = c3 / num;
            div.innerHTML += `
            <option>${c3} / ${num} = ${rd}</option>
            ` 
            c3 += num;
        }
    }
}
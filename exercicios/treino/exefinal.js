let pessoa = {
    nome:'Douglas',
    idade:28,
    peso:68.5,
    engordar(a = 0){
        let i = a;
        this.peso = this.peso + i;
    },
    status(){
        console.log("-------- Informações-------------")
        console.log(`Nome : ${this.nome}`)
        console.log(`idade: ${this.idade} anos`)
        console.log(`peso : ${this.peso} Kg`)
        console.log("---------------------------------")

    }
};
pessoa.engordar(10.2);
pessoa.status();

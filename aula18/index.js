/* function criaPessoa ( nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 2)

console.log(pessoa1.nome, pessoa1.sobrenome); */

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala () {
        console.log(`${this.nome} ${this.sobrenome} está falando oii..`);
        console.log(`Minha idade atual é: ${this.idade}`)
    },

    incrementaIdade () {
        this.idade++;

    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
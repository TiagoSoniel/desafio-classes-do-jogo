// Fontes de auxílio: https://github.com/Esdras015/Desafio3-logica/commit/e011f8130c51679fa7a74e7300cbe48a7771aed1

// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
// Estrutura de decisão

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'lançando magia';
                break;
            case 'guerreiro':
                ataque = 'com a espada';
                break;
            case 'monge':
                ataque = 'utilizando artes marciais';
                break;
            case 'ninja':
                ataque = 'arremessando shuriken';
                break;
            case 'ranger':
            	ataque = 'disparando flechas';
                break;
            default:
                ataque = 'realizou um ataque';
        }

        console.log(`O ${this.tipo} atacou ${ataque}`);
    }
}

// Criando instâncias da classe Heroi
const heroi1 = new Heroi('Jayle', 22, 'guerreiro');
const heroi2 = new Heroi('Liséria', 322, 'mago');
const heroi3 = new Heroi('Altair', 32, 'monge');
const heroi4 = new Heroi('Shadow', 25, 'ninja');
const heroi5 = new Heroi('Sparrow', 30, 'ranger');

// Chamando o método atacar para cada herói
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
heroi5.atacar();
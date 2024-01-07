// classes
// Para definir um atributo opcional adiciona o "?" no atributo
// void - metodos que não retornam nada, td que estiver dentro irá ser executado apenas no metodo
// protected - apenas pode enxergar subclasses que herdam a classe, private só pode ser encxergado dentro da classe

class Character {
    protected name?: string;
    protected stregth: number;
    protected skill: number;

    constructor(name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    protected attack(): void{
        console.log(`attack with ${this.stregth} points`)
    }
}

const Eduardo = new Character("José Eduardo", 10, 20);

// subclasses para defiinir uma subclasses, utiliza o extends "nome da classe pai"

class Magician extends Character {
    magicPoints: number
    constructor(
        name: string, 
        stregth: number, 
        skill: number, 
        magicPoints: number
        ){
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}

const eduardoMago = new Magician("José Eduardo", 20, 10, 99);
function ExibirNome(target: any) {
    console.log(target);
}


// funciona para decorar funções, por exemplo exibir nome está decorado na memoria então oque for exebido abaixo dele passará pela função
@ExibirNome
class Funcionario {}

function apiVersion(version: string){
    return(target: any) => {
        Object.assign(target.prototype, {__version: version});
    };
}

// função para verificar o tamanho de algo
function minLength(length: number) {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error (`Tamanho menor que ${length}`);
                return; } 
            _value = value;
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    }
}

@apiVersion("1.29")
class Api{
    @minLength(3)
    name: string;
    

    constructor(name: string){
        this.name = name;
    }
}


const api = new Api("Cerveja");
console.log(api.name);

// atribute decorator
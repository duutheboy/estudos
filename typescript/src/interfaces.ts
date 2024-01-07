// interfaces são párecidos com o "type"

type robot = {
    readonly id: number | string,
    name: string
};

const rb: android = {
    id: 10,
    name: "du"
}

interface android {
    id: number | string,
    name: string
}

class robos implements robot {
    id: string | number;
    name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
}
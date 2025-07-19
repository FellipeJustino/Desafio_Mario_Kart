class Player {
    constructor(option) {
        switch (option) {
            case 1:
                return this.Mario;
            case 2:
                return this.Luigi;
            case 3:
                return this.Bowser;
            case 4:
                return this.Peach;
            case 5:
                return this.Yoshi;
            case 6:
                return this.Dk;
            default:
                console.log("Opção inválida!");
                return null;
        }
    }

    Mario = {
        NOME: "Mario",
        VELOCIDADE: 4,
        MANOBRABILIDADE: 3,
        PODER: 3,
        PONTOS: 0,
    };

    Luigi = {
        NOME: "Luigi",
        VELOCIDADE: 3,
        MANOBRABILIDADE: 4,
        PODER: 4,
        PONTOS: 0,
    };

    Bowser = {
        NOME: "Bowser",
        VELOCIDADE: 5,
        MANOBRABILIDADE: 2,
        PODER: 5,
        PONTOS: 0,
    };

    Peach = {
        NOME: "Peach",
        VELOCIDADE: 3,
        MANOBRABILIDADE: 4,
        PODER: 2,
        PONTOS: 0,
    };

    Yoshi = {
        NOME: "Yoshi",
        VELOCIDADE: 2,
        MANOBRABILIDADE: 4,
        PODER: 3,
        PONTOS: 0,
    };

    Dk = {
        NOME: "Donkey Kong",
        VELOCIDADE: 2,
        MANOBRABILIDADE: 2,
        PODER: 5,
        PONTOS: 0,
    };
}

export { Player };

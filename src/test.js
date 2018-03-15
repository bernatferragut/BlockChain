// 1. Let's create a diamond object class

class Diamond{
    constructor(name, size, shape, color){
        this.name = name;
        this.size = size;
        this.shape = shape;
        this.color = color;
    }

    diamondData() {
        console.log(`Diamond ${this.name} data: 
                        Size : ${this.size}
                        Shape : ${this.shape}
                        Color : ${this.color} 
                    `);
    }
}

// A diamond creation

let diamondA = new Diamond('A', 'small', 'cone', 'white-transparent');
diamondA.diamondData();

// B diamond creation

let diamondB = new Diamond('B', 'medium', 'circle', 'rubi-red');
diamondB.diamondData();

// 2. Let's crete a chain-collar object Class

class DiamondChain {
    constructor(name){
        this.name = name;
        this.diamondChain = [];
    }

    addDiamond(diamond) {
        this.diamondChain.push(diamond);
    }
    eraseDiamond() {
        this.diamondChain.pop();
    }

    diamondData() {
        console.log(`DiamondChain ${this.name} data: 
                        Length : ${this.diamondChain.length }
                        First Diamond : ${this.diamondChain[0].name}
                        First Diamond color : ${this.diamondChain[0].color}
                        Last Diamond : ${this.diamondChain[this.diamondChain.length-1].name}
                        Last Diamond color : ${this.diamondChain[this.diamondChain.length-1].color}
                    `);
    }
}

// Let's create a Diamon Chain

let diamondCollar1 = new DiamondChain('Collar1');
diamondCollar1.addDiamond(diamondA);
diamondCollar1.addDiamond(diamondB);
diamondCollar1.addDiamond(diamondA);
diamondCollar1.addDiamond(diamondB);
diamondCollar1.addDiamond(diamondA);
diamondCollar1.addDiamond(diamondB);
diamondCollar1.eraseDiamond();
diamondCollar1.diamondData();




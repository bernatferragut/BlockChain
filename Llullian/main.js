// LLULLIAN DIVINITIES - v.1.0 - next Blockchain

// DIVINITY OBJECT CREATION - 7 Params
class Divinity {
    constructor(letter, name, relationship, question, subject, virtue, vice ) {
        this.letter = letter;
        this.name = name;
        this.relationship = relationship;
        this.question = question;
        this.subject = subject;
        this.virtue = virtue;
        this.vice = vice;
    }

    divinityProps() {
        console.log(`
        #${this.letter}----------------------
        Divinity: ${this.name} 
        Relationship: ${this.relationship} 
        Question: ${this.question} 
        Subject: ${this.subject}
        Virtue: ${this.virtue} 
        Vice: ${this.vice}
        ------------------------
        `);
    }
}

// 9 DIVINITIES CREATION
let B = new Divinity('B','Goodness', 'Difference', 'Whether?', 'God', 'Justice', 'Avarice' );
let C = new Divinity('C','Greatness', 'Concordance', 'What?', 'Angel', 'Prudence', 'Gluttony' );
let D = new Divinity('D','Eternity', 'Contrariety', 'Of what?', 'Heaven', 'Fortitude', 'Lust' );
let E = new Divinity('E','Power', 'Beginning', 'Why?', 'Man', 'Temperance', 'Pride' );
let F = new Divinity('F','Wisdom', 'Middel', 'How much?', 'Imaginative', 'Faith', 'Accidie' )
let G = new Divinity('G','Will', 'End', 'Of what kind?', 'Sensitive', 'Hope', 'Envy' );
let H = new Divinity('H','Virtue', 'Majority', 'When?', 'Vegetative', 'Charity', 'Ire' );
let I = new Divinity('I','Truth', 'Equality', 'Where?', 'Elementative', 'Patience', 'Lying' );
let K = new Divinity('K','Glory', 'Minority', 'How?', 'Instrumentative', 'Pity', 'Inconstancy' );

// Console.log
B.divinityProps();
K.divinityProps();

// DIVINE OBJECT CREATION - CHAIN OF DIVINITIES CREATION
class Divine {
    constructor(){
        this.divineChain = [];
    }

    addDivinity(divinity) {
        this.divineChain.push(divinity);
    }

    randomNumber(){
        return Math.floor(Math.random()* 8) ;
    }
}

// CREATE The A Divine Chain made of 9 Divinities Objects
const A = new Divine();
A.addDivinity(B);
A.addDivinity(C);
A.addDivinity(D);
A.addDivinity(E);
A.addDivinity(F);
A.addDivinity(G);
A.addDivinity(H);
A.addDivinity(I);
A.addDivinity(K);

// LOGS
console.log(A);
console.log(JSON.stringify(A,null,2));
console.log(typeof(A));
console.log(A.divineChain[A.randomNumber()]);

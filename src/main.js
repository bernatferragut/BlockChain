// importing SHA256 Cypher Library

const SHA256 = require('crypto-js/sha256');

// BLOCK  CREATION
class Block {
    constructor(index, timeStamp, data, previousHash='') {
        this.index = index;
        this.timeStamp = timeStamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index + this.timeStamp + this.previousHash + JSON.stringify(this.data)).toString();
    }
}

// CHAIN CREATION
class BlockChain {
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "03/03/2018", 'Genesis Block', '0');
    }

    getLatestBlock() {
        return 'The latest Block created is: ' + this.chain[this.chain.length-1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid() {
        for(let i=1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];
            if(currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if(currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
            return true;
        }
    }
}

// WORKING TEST

let bernieCoin = new BlockChain();
bernieCoin.addBlock(new Block(1, '03/03/2018', { amount: 4 }));
bernieCoin.addBlock(new Block(2, '04/03/2018', { amount: 9 }));

// Hacking the data
// bernieCoin.chain[1].data = {amount: 10};
// Hack the hash
// bernieCoin.chain[1].hash = bernieCoin.calculateHash();

console.log(JSON.stringify(bernieCoin, null, 2));
// console.log('is bernieCoin valid? => ' + isChainValid());

// =======================================================

// let button1 = document.getElementById('buttonA');





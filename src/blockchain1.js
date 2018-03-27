// importing SHA256 Cypher Library
const SHA256 = require('crypto-js/sha256');

// BLOCK  CREATION
class Block {
    constructor(index, timeStamp, data, previousHash = '') {
        this.index = index;
        this.timeStamp = timeStamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        // random value
        this.nonce = 0;
    }

    calculateHash() {
        return SHA256(this.index + this.timeStamp + this.previousHash + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log('Blocked Mined ' + this.hash);
    }
}

// CHAIN CREATION
class BlockChain {
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 4;
    }

    createGenesisBlock() {
        return new Block(0, new Date().getTime, 'Genesis Block', '0');
    }

    getLatestBlock() {
        return this.chain[this.chain.length-1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        // Mining Time Calculation
        let t0 = Date.now();
        newBlock.mineBlock(this.difficulty);
        let t1 = Date.now();
        let delay = (t1-t0)/1000;
        this.chain.push(newBlock);
        console.log(delay + ' ms');
        return delay;
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

export { Block, BlockChain };

// =======================================================
// Hacking the data
// bernieCoin.chain[1].data = {amount: 10};
// Hack the hash
// bernieCoin.chain[1].hash = bernieCoin.calculateHash();
// console.log(JSON.stringify(bernieCoin, null, 2));
// console.log('is bernieCoin valid? => ' + isChainValid());
// =======================================================


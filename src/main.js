import { Block, BlockChain } from './blockchain1';

// WORKING TEST
let bernieCoin = new BlockChain();
bernieCoin.addBlock(new Block(1, '03/03/2018', { amount: 4 }));
bernieCoin.addBlock(new Block(2, '04/03/2018', { amount: 9 }));

// Hacking the dataxs
// bernieCoin.chain[1].data = {amount: 10};
// Hack the hash
// bernieCoin.chain[1].hash = bernieCoin.calculateHash();

// console.log(JSON.stringify(bernieCoin, null, 2));
// console.log('is bernieCoin valid? => ' + isChainValid());


// SELECTIONS
let blockchainData = JSON.stringify(bernieCoin, null, 2);
let button1 = document.getElementById('buttonA');
let data =  document.getElementById('data');


// ACTIONS
button1.addEventListener('click', function() {
    data.innerHTML = JSON.stringify(bernieCoin, null, 2);
    console.log(JSON.stringify(bernieCoin, null, 2));
});





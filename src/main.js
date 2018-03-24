import { Block, BlockChain } from './blockchain1';

// BLOCKCHAIN CREATION
let bernieCoin = new BlockChain();
bernieCoin.addBlock(new Block(1, '03/03/2018', { amount: 3 }));
bernieCoin.addBlock(new Block(2, '04/03/2018', { amount: 6 }));
bernieCoin.addBlock(new Block(3, '04/03/2018', { amount: 9 }));


// DIV GRAPHIC BLOCK CREATION
function createDivBlock() {
    // create new div element
    let block = document.createElement('div');
    let dot = document.createElement('div');
    // add an id 
    block.setAttribute('id', 'blocks-design');
    block.setAttribute('class', 'flex-container');
    dot.setAttribute('id', 'dot-design');
    dot.setAttribute('class', 'flex-container');

    // text block content
    let blockContent = document.createTextNode('GENESIS');
    // add text to the div
    block.appendChild(blockContent);
    // add the new Element to the DOM
    let currentDiv = document.getElementById('blocks');
    currentDiv.appendChild(block);
    currentDiv.appendChild(dot);
    // send a message
    console.log('new block has been added');
}

// SELECTIONS
let blockchainData = JSON.stringify(bernieCoin, null, 2);
let button1 = document.getElementById('buttonA');
let data =  document.getElementById('data');


// ACTIONS
button1.addEventListener('click', function() {
    // data.innerHTML = JSON.stringify(bernieCoin, null, 2);
    // console.log('The Button has been clicked!');
    createDivBlock();

});





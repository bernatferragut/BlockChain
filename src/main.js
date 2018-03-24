import { Block, BlockChain } from './blockchain1';

// BLOCKCHAIN CREATION
// let bernieCoin = new BlockChain();
// bernieCoin.addBlock(new Block(1, '03/03/2018', { amount: 3 }));
// bernieCoin.addBlock(new Block(2, '04/03/2018', { amount: 6 }));
// bernieCoin.addBlock(new Block(3, '04/03/2018', { amount: 9 }));


// DIV GRAPHIC BLOCK CREATION
function createDivBlock(text, clicks) {
    let buttonText = text||'GENESIS';
    let blockNumber = clicks-1||'';
    // create new div element
    let block = document.createElement('div');
    let dot = document.createElement('div');
    // add an id 
    block.setAttribute('id', 'blocks-design');
    block.setAttribute('class', 'flex-container');
    dot.setAttribute('id', 'dot-design');
    dot.setAttribute('class', 'flex-container');

    // text block content
    let blockContent = document.createTextNode(buttonText + blockNumber);
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
var button1 = document.getElementById('buttonA');
var data =  document.getElementById('data');

// ACTIONS
var clicks = 0;
button1.addEventListener('click', function() {
    if (clicks === 0) {
        // create visual Block
        createDivBlock(); 
        // add clicks
        clicks ++;
        console.log(clicks);
        // crete a new Blockchain with Genesis Block
        var bernieCoin = new BlockChain();
        // Visualize data
        var blockchainData = JSON.stringify(bernieCoin, null, 2);
        data.innerHTML = blockchainData;
    } 

    else if(clicks > 0 && clicks < 8) {
        // change the Button text
        button1.innerHTML = 'ADD BLOCK';
        console.log(button1.value);
        // add clicks
        clicks ++;
        console.log(clicks);
        // create a new visual BLOCK
        createDivBlock('BLOCK', clicks);
        // crete a new BLOCK
        bernieCoin.addBlock(new Block(clicks, new Date().getDate(), { amount: clicks }));
        console.log(JSON.stringify(bernieCoin, null, 2));
        // Visualize Data
        let blockchainData = JSON.stringify(bernieCoin, null, 2);
        data.innerHTML = blockchainData;
    } 

});





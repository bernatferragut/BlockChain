import { Block, BlockChain } from './blockchain1';
// const timer = require('timer.js');

// DIV GRAPHIC BLOCK CREATION
function createDivBlock(text, clicks) {
    let buttonText = text||'GENESIS';
    let blockNumber = clicks-1||'';
    // create new div element
    let block = document.createElement('div');
    let dot = document.createElement('div');
    
    // add an id 
    block.setAttribute('id', 'blocks-design');
    block.setAttribute('class', 'flex-container fadeIn');
    dot.setAttribute('id', 'dot-design');
    dot.setAttribute('class', 'flex-container fadeIn');

    // text block content
    let blockContent = document.createTextNode(buttonText + ' ' + blockNumber);

    // add text to the div
    block.appendChild(blockContent);

    // add the new Element to the DOM
    let currentDiv = document.getElementById('blocks');
    currentDiv.appendChild(block);
    currentDiv.appendChild(dot);

    // send a message
    console.log('new block');
}

// SELECTIONS
var button1 = document.getElementById('buttonA');
var data =  document.getElementById('data');
let audio = document.getElementsByTagName('audio')[0];

// ACTIONS
let clicks=0;
let xCoin;
let miningTime;
button1.addEventListener('click', function(){
    // Audio file
    audio.play();
    if (clicks < 1) {
        // create visual Block
        createDivBlock();
        // add clicks
        clicks ++;
        console.log(clicks);
        // crete a new Blockchain with Genesis Block
        let bernieCoin = new BlockChain();
        // Visualize data
        let blockchainData = JSON.stringify(bernieCoin, null, 2);
        data.innerHTML = blockchainData;
        // X
        xCoin = bernieCoin;
        if ( clicks === 1) {
            // change the Button text
            button1.innerHTML = 'ADD BLOCK';
        }
    } 
    
    else if ( clicks >= 1) {
        // change the Button text
        button1.innerHTML = 'ADD BLOCK';
        // add clicks
        clicks ++;
        console.log(clicks);
        // create a new visual BLOCK
        createDivBlock('BLOCK', clicks);
        // crete a new BLOCK
        let miningTime = xCoin.addBlock(new Block(clicks, new Date().getTime, { amount: clicks }));
        console.log('The mining time is: ' + miningTime);
        // Count Time and create a timer div with it
        let currentDiv = document.getElementById('blocks');
        let time = document.createElement('div');
        time.setAttribute('id', 'time-design');
        time.setAttribute('class', 'flex-contianer fadeIn');
        let timeContent = document.createTextNode(miningTime+' ms');
        time.appendChild(timeContent);
        currentDiv.appendChild(time);
        // Check Validity
        console.log('Valid Chain: ' + xCoin.isChainValid());
        // Visualize Data
        let blockchainData = JSON.stringify(xCoin, null, 2);
        data.innerHTML = blockchainData;
        // console.log(blockchainData);
    } 
});




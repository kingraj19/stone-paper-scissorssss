var player1choice = '';
var player2choice = '';

var hand1 = document.getElementById('stone');
var hand2 = document.getElementById('paper');
var hand3 = document.getElementById('scissor');



var result = document.getElementById('result'); 
var opp = document.getElementById('opp');
var firecracker = document.getElementById('firecracker');
hand1.addEventListener('click', () => {
    player1choice = 'stone👊';
    player2choice = bot();
    check();

})

hand2.addEventListener('click', () => {
    player1choice = 'paper✋';
    player2choice = bot();
    check();
    
})
hand3.addEventListener('click', () => {
    player1choice = 'scissor✌';
    player2choice = bot();
    check();
})

function bot() {
    var choices = ['stone👊','paper✋','scissor✌'];
    var random = Math.floor(Math.random() * 3);
    return choices[random];
}

function check() {
    opp.textContent = 'your opponent choose: '+ player2choice;
    if (player1choice === player2choice) {
        
        result.textContent = 'Draw';
       result.style.color='green'
       
    }
    else if ( (player1choice === 'stone👊' && player2choice === 'scissor✌') || (player1choice === 'paper✋' && player2choice === 'stone👊') || (player1choice === 'scissor✌' && player2choice === 'paper✋') ) {
        
        result.textContent = 'you won';
        result.style.color='green'
        
        
    }
    else {
            
        result.textContent = 'you lose';
        result.style.color='red'
        
    }
    player1choice = '';
    player2choice = '';



}
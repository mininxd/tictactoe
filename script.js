    const game = document.querySelector('.game');
        let player = 'X';
        let gameOver = false;

        function checkGameOver() {
 let rowWin = false;
 let colWin = false;
 let diagonalWin = false;

 // Check rows and columns for a win
 for (let i = 0; i < 3; i++) {
     rowWin = game.children[i * 3].textContent === player &&
         game.children[i * 3 + 1].textContent === player &&
         game.children[i * 3 + 2].textContent === player;

     colWin = game.children[i].textContent === player &&
         game.children[i + 3].textContent === player &&
         game.children[i + 6].textContent === player;


     if (rowWin || colWin) {
         gameOver = true;
         break;
     }
 }

 // Check diagonals for a win
 diagonalWin = game.children[0].textContent === player &&
     game.children[4].textContent === player &&
     game.children[8].textContent === player;

 diagonalWin = diagonalWin || (
     game.children[2].textContent === player &&
     game.children[4].textContent === player &&
     game.children[6].textContent === player
 );

 if (diagonalWin) {
     gameOver = true;
 }
        }

        function newGame() {
 player = 'X';
 gameOver = false;
 for (let i = 0; i < 9; i++) {
     game.children[i].textContent = '';
 }
        }

        for (let i = 0; i < 9; i++) {
 const box = document.createElement('div');
 box.classList.add('box');
 box.addEventListener('click', function () {
     if (!this.textContent && !gameOver) {
         this.textContent = player;
         player = player === 'X' ? 'O' : 'X';
         checkGameOver();
   
   
  
 
 
         if (gameOver) {
  if (player === 'X') {
   player = localStorage.getItem('ttcPlayer1');
   alert(`${player} wins!`);
   
  var iX;
  iX = localStorage.getItem('scoreX');
   iX = Number(localStorage.getItem('scoreX'));
   var plusX = iX+1;
   localStorage.setItem('scoreX', plusX.toString());
   scoreX.innerHTML = localStorage.getItem('scoreX');
  } 
  
   else if (player === 'O') {
   player = localStorage.getItem('ttcPlayer2');
   alert(`${player} wins!`);
   
   var iO;
  iO = localStorage.getItem('scoreO');
   iO = Number(localStorage.getItem('scoreO'));
   var plusO = iO+1;
   localStorage.setItem('scoreO', plusO.toString());
   scoreO.innerHTML = localStorage.getItem('scoreO');
   
  }
  newGame();
         } 
     }
 });
 game.appendChild(box);
        }
    
    
  
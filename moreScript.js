document.getElementById('setPlayerName').addEventListener("click", () => {
  
  
  scoreX.innerHTML = localStorage.getItem('scoreX');
  scoreO.innerHTML = localStorage.getItem('scoreO');
 scoreNameX.innerHTML = playerName1.value;
 scoreNameO.innerHTML = playerName2.value;
 
  
  if (playerName1.value === "") {
   scoreNameX.innerHTML = 'X';
    localStorage.setItem('ttcPlayer1', "X");
  } else {
  localStorage.setItem('ttcPlayer1', playerName1.value);
  }
  
  if (playerName2.value === "") {
   scoreNameO.innerHTML = 'O';
    localStorage.setItem('ttcPlayer2', "O");
  } else {
  localStorage.setItem('ttcPlayer2', playerName2.value);
  }
  
  
  
  setPlayerContainer.style.opacity = "0";
  setTimeout(function() {
  setPlayerContainer.style.display = "none";
  }, 300);
  
  content.style.display = "block";
})



reloadPage.addEventListener('click', function() {
  location.reload();
  })
  
reset.addEventListener('click', function() {
  localStorage.setItem('scoreX', '0');
  localStorage.setItem('scoreO', '0');
  scoreX.innerHTML = '0';
  scoreO.innerHTML = '0';
  })
  
  
 
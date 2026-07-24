
function computerMove(){
  let computerMove = Math.random();
  if(computerMove<=1/3&&computerMove>=0)
    computerMove = 'Rock';
  else if(computerMove>1/3&&computerMove<=2/3)
    computerMove='Paper';
  else if(computerMove>2/3&&computerMove<=1)
    computerMove='Scissors';


  return computerMove;
};



function playGame(parameter) {
  let computerMoves = computerMove();
  let result = '';

  if (parameter === 'Rock') {
    if (computerMoves === 'Rock') {
      result = 'Tie';
      Score.tie++;
    } else if (computerMoves === 'Paper') {
      result = 'Lose';
      Score.lose++;
    } else if (computerMoves === 'Scissors') {
      result = 'Win';
      Score.wins++;
    }
  }

  else if (parameter === 'Paper') {
    if (computerMoves === 'Rock') {
      result = 'Win';
      Score.wins++;
    } else if (computerMoves === 'Paper') {
      result = 'Tie';
      Score.tie++;
    } else if (computerMoves === 'Scissors') {
      result = 'Lose';
      Score.lose++;
    }
  }

  else if (parameter === 'Scissors') {
    if (computerMoves === 'Rock') {
      result = 'Lose';
      Score.lose++;
    } else if (computerMoves === 'Paper') {
      result = 'Win';
      Score.wins++;
    } else if (computerMoves === 'Scissors') {
      result = 'Tie';
      Score.tie++;
    }
  }

  localStorage.setItem('Score', JSON.stringify(Score));
document.querySelector(".score").innerHTML=`Wins:${Score.wins},Ties:${Score.tie},Losses:${Score.lose}`
  
divs(result,parameter,computerMoves);



  return result;
}



let Score = JSON.parse(localStorage.getItem('Score'))||{
  wins : 0,
  tie : 0,
  lose : 0,
};

let Store=JSON.stringify(Score);
localStorage.setItem('Score',Store);

function resetScore(){
  Score.wins = 0;
  Score.tie = 0;
  Score.lose = 0;
document.querySelector(".score").innerHTML=`Wins:${Score.wins},Ties:${Score.tie},Losses:${Score.lose}`
  localStorage.setItem('Score', JSON.stringify(Score));
}


document.querySelector(".score").innerHTML=`Wins:${Score.wins},Ties:${Score.tie},Losses:${Score.lose}`;


function divs(result, parameter, computerMoves) {
  document.querySelector('.jsp').innerHTML = `
    <div class="line1">You ${result}</div>
    <div class="line2">
      You <img src="${parameter}-emoji.png" class="imgjs">
      <img src="${computerMoves}-emoji.png" class="imgjs">
      Computer
    </div>
  `;
}






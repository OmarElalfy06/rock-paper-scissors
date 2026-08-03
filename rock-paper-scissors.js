
function computerMove() {

    const random = Math.random();

    if (random < 1 / 3) {
        return 'Rock';
    } else if (random < 2 / 3) {
        return 'Paper';
    } else {
        return 'Scissors';
    }

}

let Score = JSON.parse(localStorage.getItem('Score')) || {
    wins: 0,
    tie: 0,
    lose: 0
};

updateScore();

function playGame(playerMove) {

    const computerMoves = computerMove();

    let result = '';

    if (playerMove === 'Rock') {

        if (computerMoves === 'Rock') {
            result = 'Tie';
            Score.tie++;
        } else if (computerMoves === 'Paper') {
            result = 'Lose';
            Score.lose++;
        } else {
            result = 'Win';
            Score.wins++;
        }

    } else if (playerMove === 'Paper') {

        if (computerMoves === 'Rock') {
            result = 'Win';
            Score.wins++;
        } else if (computerMoves === 'Paper') {
            result = 'Tie';
            Score.tie++;
        } else {
            result = 'Lose';
            Score.lose++;
        }

    } else {

        if (computerMoves === 'Rock') {
            result = 'Lose';
            Score.lose++;
        } else if (computerMoves === 'Paper') {
            result = 'Win';
            Score.wins++;
        } else {
            result = 'Tie';
            Score.tie++;
        }

    }

    localStorage.setItem('Score', JSON.stringify(Score));

    updateScore();

    document.querySelector('.jsp').innerHTML = `
        <div class="line1">You ${result}</div>

        <div class="line2">
            <span>You</span>

            <img src="${playerMove}-emoji.png" class="imgjs">

            <img src="${computerMoves}-emoji.png" class="imgjs">

            <span>Computer</span>
        </div>
    `;
}

function updateScore() {

    document.querySelector('.score').innerHTML =
        `Wins:${Score.wins}, Ties:${Score.tie}, Losses:${Score.lose}`;

}

function resetScore() {

    Score = {
        wins: 0,
        tie: 0,
        lose: 0
    };

    localStorage.setItem('Score', JSON.stringify(Score));

    updateScore();

    document.querySelector('.jsp').innerHTML = '';

}

let isAutoPlaying = false;
let intervalId;

function autoPlay() {

  if (!isAutoPlaying) {

    intervalId = setInterval(function () {
      const playerMove = computerMove();
      playGame(playerMove);
    }, 1000);

    isAutoPlaying = true;
    document.querySelector('.autojs').innerHTML = 'Stop';

  } else {

    clearInterval(intervalId);

    isAutoPlaying = false;
    document.querySelector('.autojs').innerHTML = 'Auto Play';

  }

}



document.querySelector('.rejs').addEventListener('click', () => {
  document.querySelector('.confirmationjs').innerHTML = `
  
    <p>Are you sure?</p>
    <button class="yesjs recss">Yes</button>
    <button class="nojs recss">No</button>
  `;

  document.querySelector('.yesjs').addEventListener('click', () => {
    resetScore();
     document.querySelector('.confirmationjs').innerHTML = '';
     setTimeout(()=>{
        document.querySelector('.msg').innerHTML=`<P class="reseted">Score Reseted Successfully!</P>`;
     },100);
     setTimeout(()=>{
        document.querySelector('.msg').innerHTML=``;
     },1850)
  });

  document.querySelector('.nojs').addEventListener('click', () => {
    document.querySelector('.confirmationjs').innerHTML = '';
  });
});




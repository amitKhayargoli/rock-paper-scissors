let p2 = document.getElementById("showdown");
let text = document.getElementById("p1");
const stats = {
    wins:0,
    loss:0,
    ties:0
};


function resetScore(){
    stats.wins = 0;
    stats.loss = 0;
    stats.ties = 0;
    score.innerHTML = `Wins:${stats.wins} Loss:${stats.loss} Ties:${stats.ties}`;
    text.textContent = "";
    p2.textContent = "";
}


let computer = "";
    function pickComputerMove() {
      const randomNumber = Math.random();
      console.log(randomNumber);

      if (randomNumber > 0 && randomNumber < 1 / 3) {
        computer = "rock";
      } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
        computer = "paper";
      } else if (randomNumber > 2 / 3 && randomNumber < 1) {
        computer = "scissors";
      }
      console.log(computer);
    }

    let result = "";
    function playGame(user) {

      if(user === "rock")  {


      if (computer === user) {
        result = "its a tie.";
      } else if (computer === "paper") {
        result = "Computer wins";
      } else if (computer === "scissors") {
        result = "You win.";
      }
    }
    else if(user === "paper"){

        if (computer === user) {
            result = "its a tie.";
          } else if (computer === "scissors") {
            result = "Computer wins";
          } else if (computer === "rock") {
            result = "You win.";
          }

    }

    else if(user === "scissors"){

        if (computer === user) {
            result = "its a tie.";
          } else if (computer === "rock") {
            result = "Computer wins";
          } else if (computer === "paper") {
            result = "You win.";
          }
    }

      if(result === "You win."){
        stats.wins+=1;
      }
      else if(result === "Computer wins" ){
        stats.loss+=1;
      }
      else if(result === "its a tie." ){
        stats.ties+=1;
      }

      img = computer;
      text.textContent = result;

      let score = document.getElementById("score");
      score.innerHTML = `Wins:${stats.wins} Loss:${stats.loss} Ties:${stats.ties}`;


      p2.innerHTML = `You chose: <img src='img/${user}.png'>Computer Chose:<img src=img/${img}.png>`;
      console.log(stats);
    }




const getUserChoice=userInput=>{
    userInput=userInput.toLowerCase();
    if(userInput==="rock" || userInput==="paper" || userInput==="scissors") {
      return userInput;
    }
    else{
      console.log("Error");
    }
  }
  
  function getComputerChoice() {
    const randomNumber=Math.floor(Math.random()*3);
  
    switch(randomNumber) {
    case 0:
    return "rock"
    break;
  
    case 1:
    return "paper"
    break;
  
    case 2:
    return "scissors"
    break;
  }
  }
  
  function determineWinner(UserChoice,ComputerChoice) 
  {
    if(UserChoice===ComputerChoice) 
    {
      return "Game was a tie.";
    }
      if(UserChoice==='rock'){
         if(ComputerChoice==='paper'){
             return "Computer wins";
         }else {
          return "you won";
         }
      }
  
      if(UserChoice==='paper'){
         if(ComputerChoice==='scissors'){
             return "Computer wins";
         }else {
          return "you won";
         }
      }
  
      if(UserChoice==='scissors'){
         if(ComputerChoice==='rock'){
             return "Computer wins";
         }else {
          return "you won";
         }
      }
  }
  
  function playGame() {
    const UserChoice=getUserChoice('rock');
    const ComputerChoice=getComputerChoice();
    console.log('You threw: ' + UserChoice);
    console.log('The computer threw:' + ComputerChoice);
  
    console.log(determineWinner(UserChoice, ComputerChoice));
  }
  playGame();
  
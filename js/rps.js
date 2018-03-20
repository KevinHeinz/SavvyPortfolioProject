var playerChoice = prompt( "Select rock, paper or scissors to play!" );
var computerChoice = Math.random();
var matchUp = function( playerChoice ){
    if( computerChoice < 0.34 ){
        computerChoice = "rock";
        console.log( "Computer chose rock" );
    }
    else if( computerChoice <= 0.67 ){
        computerChoice = "paper";
        console.log( "Computer chose paper" );
    }
    else{
        computerChoice = "scissors";
        console.log( "Computer chose scissors" );
    }
    if( playerChoice === computerChoice ){
        console.log( "The result is a tie!" );
    }
    if( playerChoice === "rock" ){
        if( computerChoice === "scissors" ){
            console.log( "Computer chose scissors so you win" );
        }
        if( computerChoice === "paper" ){
            console.log( "Computer chose paper and paper wins" );
        }
    }
    if( playerChoice === "paper" ){
        if( computerChoice === "rock" ){
            console.log( "paper wins" );
        }
        if( computerChoice === "scissors" ){
            console.log( "scissors wins" );
        }

        if( playerChoice === "scissors" ){
            if( computerChoice === "rock" ){
                console.log( "rock wins" );
            }
            if( computerChoice === "paper" ){
                console.log( "scissors wins" );
            }
        }
    }
};

matchUp( playerChoice, computerChoice );

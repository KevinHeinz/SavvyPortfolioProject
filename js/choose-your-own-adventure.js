var story = {

    "start": "You wake up. Would you like to go to the bathroom or would you like to check the mirror?",
    "mirror": "You look into the mirror and see tattoos. Would you like to follow the tattoos comments or go to the living room?",
    "bathroom": "You can't help but notice comments in your handwriting on a sheet of paper. Would you like to follow the instructions or take a shower?",
    "livingRoom": "You see a white board with all sorts of detailed notes that say you found the culprit who killed your wife. Would you like to go get the culprit now or drink coffee?",
    "followPaper": "Your handwritten paper says to kill Teddy because he killed your wife. Would you like to go abduct and torture Teddy or further plan his punishment?"
};

var choice = prompt( story.start );
var choiceTwo;
var choiceThree;

console.log( choice );

if( choice === "mirror" || choice === "bathroom" ){
    console.log( choice );
}
else{
    console.log( "You didn't choose a real option." );
}

choiceTwo = prompt( Enter your next choice. );

if( choiceTwo === "livingRoom" || choiceTwo === "followPaper"){
    console.log( choiceTwo );
}
else{
    console.log( "You didn't choose a real option." );
choiceThree = prompt( Enter your next choice. );
if( choiceThree === () ){
    console.log( You got it. )
}

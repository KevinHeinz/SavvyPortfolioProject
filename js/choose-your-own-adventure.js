var story = {

    "start": "You wake up. Would you like to go to the bathroom or would you like to check the mirror?",
    "mirror": "You look into the mirror and see tattoos. Would you like to follow the tattoos comments or go to the living room?",
    "bathroom": "You can't help but notice comments in your handwriting on a sheet of paper. Would you like to follow the instructions or take a shower?",
    "livingRoom": "You see a white board with all sorts of detailed notes that say you found the culprit who killed your wife. Would you like to go get the culprit now or drink coffee?",
    "followPaper": "Your handwritten paper says to kill Teddy because he killed your wife. Would you like to go abduct and torture Teddy or further plan his punishment?"
};

var choice = prompt( story.start );

console.log( story[choice] );

if( choice === "mirror" || choice === "bathroom" ){
    console.log( story[choice] );
}
else{
    console.log( "You didn't choose a real option." );
}

choice = prompt( story[choice] );

if( choice === "livingRoom" || choice === "followPaper" ){
    console.log( choice );
}
else{
    console.log( "You didn't choose a real option." );
}

choice = prompt( story[choice] );

alert( "You got it." );

var someSelector = prompt( "Give me a selector" );
var greetUser = function greetUser(){
    var firstName = prompt( "What's your name?" );

    if( !firstName ){
        greetUser();
    }
    else{
        document.querySelector( someSelector ).src = "https://i.imgur.com/voBEvDE.jpg";
    }
};

greetUser();


/* var getInfo = function getInfo(){
    var enterNumber = prompt( "Enter a number from 1 to 99" );

    if( enterNumber > 99 || enterNumber < 1 ){
        getInfo();
    }
    else{
        alert( enterNumber + " works well." );
    }

    var enterName = prompt( "Enter your name" );

    if( !enterName ){
        getInfo();
    }
    else{
        alert( "Hello, " + enterName );
    }

    var enterBoolean = prompt( "Enter true or false" );

    if( enterBoolean != "true" && enterBoolean != "false" ){
        alert( "Enter only true or false" );
    }
    else{
        alert( "You got the Boolean" );
    }
};

getInfo();*/

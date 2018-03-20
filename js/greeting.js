var $h1 = $( "h1" );
var $user = $( "#user" );
var title = $h1.text();


function greetUser(){
    var firstName = $user.val();

    if( firstName ){
        $h1.text( title + ", " + firstName );
    }
}

function inputCallBack( event ){
    if( event.which === 13 ){
        greetUser();
    }
}

$user.on( "keypress", inputCallBack );
$( "#greet" ).on( "click", greetUser );


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

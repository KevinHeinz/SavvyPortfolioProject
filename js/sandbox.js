/* globals $ */
var css = {
    "background-color": "LightSlateGray",
    "position": "fixed",
    "top": 0
};

var animations = {
    "font-size": "500%",
    "top": "20vh"
};

var $h2 = $( "<h2>" )
    .text( "This came from j query too!" )
    .css( "position", "fixed" );

var animateH2 = function animateH2(){
    $h2.animate( {
        "left": "100vw"
    } );
};

var animationOptions = {
    "duration": 3000,
    "complete": animateH2
};


var $h1 = $( "<h1>" )
    .text( "Hey you big World" )
    .css( css )
    .animate( animations, animationOptions );


$( "#output" ).append( $h1, $h2 );

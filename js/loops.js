var output = $( "#output" )
    .text( "This is an example of output" )
    .css( "position", "fixed" );

var list = "<ol>";
var i = 1;

while( i <= 10 ){
    list = list + "<li>" + i + "</li>";
    i++;
}

$( output )
    .append( "End of list" );


/* or
while( i <= 10 ){
    list += "<li>" + i + "</li>";
    i++;
}*/

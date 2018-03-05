var output = document.querySelector( "#output" );
var list = "<ol>";
var i = 1;

while( i <= 10 ){
    list = list + "<li>" + i + "</li>";
    i++;
}
/* or
while( i <= 10 ){
    list += "<li>" + i + "</li>";
    i++;
}

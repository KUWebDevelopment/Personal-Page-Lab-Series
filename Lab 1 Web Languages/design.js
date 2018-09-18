
//Basic JavaScript Function
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello JavaScript!"
    document.getElementById("jQuery").style.display = "block"
    alert("Goodbye Content!")
}


//jQuery
$(document).ready(function() {
    document.getElementById("jQuery").style.display = "none"
});


//Two things to showcase: Selecting, manipulating.
//Manipulating: text, css, click, hover, keypress.

//Selecting an element:
let header = $("h1");
console.log(header);


//Selecting an element by id:
let firstElement = $("first");
console.log(firstElement);


//Selecting an element by class:
let pinkClass = $(".pink");
console.log(pinkClass);


//Change text
$(document).ready(function() {
    let header = $("h1");
    header.text("Hello!"); //This changes the h1 text to hello
});


$(document).ready(function() {
    let pink = $(".pink");
    pink.text("I'll turn pink!");
});


//Change color:

//Changes color of h1
$(document).ready(function() {
    let header = $("h1");
    header.css("color", "blue");
});

//Changes color of pink and background to yellow:
$(document).ready(function() {
    let pinkClass = $(".pink");
    pinkClass.css("color", "pink");
    pinkClass.css("background-color", "yellow");
});


//Click funciton

$(document).ready(function() {
    let header = $("h1");
    header.click(function(){
        header.css("color", "rgba(155, 72, 114, 1)");
    });
});



//Interactive h1:
$(document).ready(function() {
    let header = $("h1");
    header.click(function(){
        if( header.css("color") == "rgb(200, 15, 190)"){
            header.css("color", "black");
        }
        else{
            header.css("color", "rgb(200, 15, 190)");
        }
    });
});


//Hover function

$(document).ready(function() {
    let header4 = $("h4");
    header4.hover(function(){
        header4.css("color", "pink");
    });
});




//Hover function with unhover:
$(document).ready(function() {
    let header4 = $("h4");
    header4.hover(function(){
        header4.css("color", "pink");
    }, function(){
        header4.css("color", "black");
    })
});


//Which is the same as:
$(document).ready(function() {
    let header4 = $("h4");
    header4.hover(hoverFunc, unhoverFunc);

    function hoverFunc(){
        header4.css("color", "pink");
    }

    function unhoverFunc(){
        header4.css("color", "black");
    }
});


//Do something on keypress:

$(document).ready(function() {
    let body = $("body");
    body.keypress(function(e){
        if(e.keyCode == 112){ //112 obtained from console log
            body.css("background-color", "yellow");
            //alert("key pressed");
        }
        else if(e.keyCode == 32){
            body.css("color", "red");
        }
        else{
            console.log(e.keyCode);
        }
    });  
});
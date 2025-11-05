target = document.getElementById("content");
var counter = 0;

setInterval(function(){
    target.classList.remove("f" + counter);
    counter = counter + 1;
    if (counter == 12){
        counter = 0;
    }
    target.classList.add("f" + counter);
}, 100);
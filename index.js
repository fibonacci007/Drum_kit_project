var numOfObject = document.querySelectorAll('.drum').length;

//used the for loop to go through the drums 
for ( var i =0; i< numOfObject; i++) {

    //here i listened for the mouseclick

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var innerBtn = this.innerHTML;
        makesound(innerBtn);
        animateButton(innerBtn);
    
    });
}

// here i listened for the keyboard press

document.addEventListener('keypress', function (event){
    var newKey = event.key
    makesound(newKey);
    animateButton(newKey)
})

//ceated a makesound object for both the click and keyboared cases

function makesound(key){
    switch (key){
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;


        default: console.log(innerBtn)
    }
}

function animateButton (currentKey){

    var active = document.querySelector('.' + currentKey);

    active.classList.add('pressed');

    setTimeout(function() {
        active.classList.remove('pressed')
    }, 300);
}
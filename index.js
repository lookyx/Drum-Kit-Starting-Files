
// Selects button, event listener to button, click, point to function handleClick
document.querySelectorAll('.drum').forEach(function(button) {
    button.addEventListener("click", function() {
        var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
    });
});


    


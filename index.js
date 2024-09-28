const buttons = document.querySelectorAll("button.drum");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const text = button.innerHTML;
        makeSound(text);
        button.style.color = "white"; 
        Animation(text);
        setTimeout(() => {
            button.style.color = ""; 
        }, 100);
    });
});

document.addEventListener("keypress", (evt) => {
    makeSound(evt.key); 
    Animation(evt.key);
});

function makeSound(key) {
    switch (key) {
        case 'w':
            var audio1 = new Audio("sounds/crash.mp3");
            audio1.play();
            break;
        case 'a':
            var audio2 = new Audio("sounds/kick-bass.mp3");
            audio2.play();
            break;
        case 's':
            var audio3 = new Audio("sounds/snare.mp3");
            audio3.play();
            break;
        case 'd':
            var audio4 = new Audio("sounds/tom-1.mp3");
            audio4.play();
            break;
        case 'j':
            var audio5 = new Audio("sounds/tom-4.mp3");
            audio5.play();
            break;
        case 'k':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        default:
            console.log(`No sound mapped for key: ${key}`); // Log for any unmapped key
    }
}
function Animation(cur){
    var active=document.querySelector("."+cur);
    active.classList.add("pressed");
    setTimeout(()=>{
        active.classList.remove("pressed");
    },100);
}
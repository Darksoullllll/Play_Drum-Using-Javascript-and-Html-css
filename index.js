var number_of_drums = document.querySelectorAll(".drum").length;

var myMap = new Map();
myMap.set("w","tom-1.mp3");
myMap.set("a","tom-2.mp3");
myMap.set("s","tom-3.mp3");
myMap.set("d","tom-4.mp3");
myMap.set("j","snare.mp3");
myMap.set("k","kick-bass.mp3");
myMap.set("l","crash.mp3");



for(var i = 0 ;i<number_of_drums;i++){
    let key = document.querySelectorAll(".drum")[i].innerHTML;
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){  
        var snd = myMap.get(key);  
        var music = new Audio("sounds/"+snd);  
        music.play()
        click_animation(key);

        });
}

document.addEventListener("keydown",function(event){  
    var key = event.key.toLowerCase();
    if(myMap.has(key)){
        var snd = myMap.get(key);  
        var music = new Audio("sounds/"+snd);  
        music.play()
        click_animation(key);   
    }
});

function click_animation(button_pressed){
    var btn = document.querySelector("."+button_pressed);

    btn.classList.add("pressed");

    setTimeout(function(){
        btn.classList.remove("pressed");
    },100);
}



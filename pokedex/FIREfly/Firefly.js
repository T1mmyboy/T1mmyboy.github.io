var firefly = document.getElementById("character")
var image = document.getElementById("image")
var snelheid = 3000//how fast the fire moves
document.addEventListener("click",moveImage)
var alles = document.getElementById("alles")
var coins = document.createElement("img")
var highscore = 0//keeping track of the seconds that you live
var opacity = 1//how much energy you still have

var MoveFire = function() {//to make the fire move faster each time it moves
    if (snelheid *0.9 > 800){
    snelheid *= 0.9;}
    spawnFire()
    setTimeout(MoveFire, snelheid);
}
var drainEnergy = function(){//to slowly make the light you produce dimmer
    image.style.background = "radial-gradient(rgba(255, 208, 0, "+opacity+"),rgba(255, 255, 0, 0.041), rgba(0, 0, 0, 0))"
    if(opacity*0.94 < 0.1){
        return losing()
    }
    else{
        Math.ceil(opacity *= 0.94)
        console.log(opacity)
    }
    setTimeout(drainEnergy, 500)
}

var hungerMeter= setTimeout(drainEnergy,50)//to repeat drainEnergy()
var SpawningCoins  = setTimeout(MoveFire, snelheid);//to repeat MoveFire()

function moveImage(e){//to get the current mouse position and move Firefly there
    mouseY = e.clientY
    mouseX = e.clientX
    firefly.style.top = mouseY-100+"px"
    firefly.style.left = mouseX-100+"px"
    if (removeCoins() == true){
        alles.removeChild(coins)
        opacity = 1
    }
}


function spawnFire(){//to spawn the fire somewhere on the screen
    var coordY = Math.ceil(Math.random() * window.innerHeight-100);
    if(coordY < 100){coordY = 10}
    var coordX = Math.ceil(Math.random() * window.innerWidth-100);
    if(coordX < 100){coordX = 10}
    coins.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/345cffd3-10e8-4d79-a514-734a9f77ce8d/d9y5gdr-97ee3d62-9ada-4935-b6f8-df92878502df.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM0NWNmZmQzLTEwZTgtNGQ3OS1hNTE0LTczNGE5Zjc3Y2U4ZFwvZDl5NWdkci05N2VlM2Q2Mi05YWRhLTQ5MzUtYjZmOC1kZjkyODc4NTAyZGYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JwTKaUFSwYOxoj4_LQqPdbMLJnDzf70sREaBjbZzCm0"
    coins.style.width = "100px"
    alles.appendChild(coins)
    coins.style.position = "absolute"
    coins.style.top = coordY+"px"
    coins.style.left = coordX+"px"
    coins.style.zIndex = "-1"
}

function removeCoins(){//to check if firefly and fire overlap
    checkcharacter = firefly.getBoundingClientRect()
    checkcoin = coins.getBoundingClientRect()
    return !(
        checkcharacter.top > checkcoin.bottom ||
        checkcharacter.right < checkcoin.left ||
        checkcharacter.bottom < checkcoin.top ||
        checkcharacter.left > checkcoin.right
      );
}
var highscoreSetter = setInterval(function(){highscore+=1}, 1000)//counts the seconds and adds them to your highscore

function losing(){//to show that you lost and show your highscore
    clearInterval(highscoreSetter)
    clearInterval(hungerMeter)
    clearInterval(SpawningCoins)
    document.body.style.backgroundImage="none"
    document.body.innerHTML ="You died!"+"</br>"+"Highscore: "+highscore+"s"

}
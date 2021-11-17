let playButton = document.getElementById('pbutton')
let mySong = document.getElementById('mysong')


playButton.onclick = function(){
    if(mySong.paused){
    mySong.play();
    playButton.src = "../images/pausebtn.png";
    }else{
    mySong.pause();
    playButton.src = "../images/playbtn.png";
    }
}

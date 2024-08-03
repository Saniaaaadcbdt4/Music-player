let progress=document.getElementById("progress");
let song=document.getElementById("song");
let cntrlicon=document.getElementById("cntrlicon");



song.onloadedmetadata=function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
   
}
function playpause(){
    if(cntrlicon.classList.contains("fa-pause")){
        song.pause();
        cntrlicon.classList.remove("fa-pause");
        cntrlicon.classList.add("fa-play");
    }
    else{
        song.play();
        cntrlicon.classList.remove("fa-play");
        cntrlicon.classList.add("fa-pause");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime
    },500)
}
progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
    cntrlicon.classList.remove("fa-play");
    cntrlicon.classList.add("fa-pause");
}
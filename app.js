

let songIndex =0;
let audioElement = new Audio("songs/1.mp3");

let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressbar");
let masterSongName = document.getElementById("masterSongName");
let songItm =Array.from(document.getElementsByClassName("songItm")) ;
let gif = document.getElementById("gif")

let songs = [
    {songName : "HIGHEST IN THE ROOM", filePath:"songs/1.mp3", coverPath:"covers/1.jfif"},
    {songName : "MO CITY FLEXOLOGIST", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName : "Future - I'M DAT N***", filePath:"songs/3.mp3", coverPath:"covers/3.webp"},
    {songName : "Future - 56 Nights", filePath:"songs/4.mp3", coverPath:"covers/4.jfif"},
    {songName : "21 Savage (X) ft Future", filePath:"songs/5.mp3", coverPath:"covers/5.jfif"},
    {songName : "21 Savage - redrum", filePath:"songs/6.mp3", coverPath:"covers/6.jfif"},
    {songName : "Future - Cinderella", filePath:"songs/7.mp3", coverPath:"covers/7.jfif"},
    {songName : "Travis Scott - goosebumps", filePath:"songs/8.mp3", coverPath:"covers/8.jfif"},
    {songName : "The Weeknd - Call Out My Name", filePath:"songs/9.mp3", coverPath:"covers/9.webp"},
    {songName : "The Weeknd - After Hours", filePath:"songs/10.mp3", coverPath:"covers/10.jfif"},
]

songItm.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
})



masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

 

audioElement.addEventListener("timeupdate", ()=>{
    progress = ((audioElement.currentTime/audioElement.duration) *100)
    myProgressbar.value = progress
})

myProgressbar.addEventListener("click",()=>{
    audioElement.currentTime = myProgressbar.value*audioElement.duration/100
})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName("songItmPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause")
        element.classList.add("fa-circle-play")
    })
}

Array.from(document.getElementsByClassName('songItmPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex+=1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
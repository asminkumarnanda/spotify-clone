console.log("Welcome To Spotify");

// Initilize Variables
let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");

let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = document.querySelectorAll(".songItem");
songItems = Array.from(songItems);
let songs = [
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/10.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItems.forEach(function (songItem, i, value) {
  songItem.getElementsByTagName("img")[0].src = songs[i].coverPath;
  songItem.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    gif.style.opacity = 1;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  } else {
    gif.style.opacity = 0;
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
  }
});

// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );

  //seekbar update
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime = parseInt(
    (myProgressBar.value * audioElement.duration) / 100
  );
});
const makeAllPlays=()=>{
  Array.from(document.querySelectorAll(".songItemPlay")).forEach(function(element){
    element.classList.remove("fa-pause-circle");
    element.classList.add("fa-play-circle");
  });
}
Array.from(document.querySelectorAll(".songItemPlay")).forEach(function(e) {
  e.style.cursor = "pointer";
  e.addEventListener("click", (event) => {
     makeAllPlays();
     songIndex=parseInt(event.target.id);
     console.log(songIndex);
   event.target.classList.remove("fa-play-circle");
   event.target.classList.add("fa-pause-circle");
   audioElement.src=`songs/${songIndex+1}.mp3`;
   audioElement.play();
   audioElement.currentTime=0;
   masterPlay.classList.remove("fa-play-circle");
   masterPlay.classList.add("fa-pause-circle");
  });
});

 document.getElementById("next").addEventListener('click',()=>{
  if (songIndex>=9) {
    songIndex=0;
  }else{
    songIndex+=1;
  }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.play();
    audioElement.currentTime=0;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
 });
 document.getElementById("previous").addEventListener('click',()=>{
  if (songIndex<=0) {
    songIndex=0;
  }else{
    songIndex-=1;
  }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.play();
    audioElement.currentTime=0;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
 });

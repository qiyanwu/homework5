// Add js here.

var vid = document.getElementById("videoplayer"); 
var speed = [0.5, 1, 2]
var index = 1;

vid.src = "assets/marchingband.mov";
vid.autoplay = false;
vid.loop = false;
vid.defaultPlaybackRate = speed[index];
vid.load();
console.log("test",)


var playButton = document.getElementById("play"); 
// playButton.onclick = playVid;
playButton.onclick = function() { vid.play(); } 



var pauseButton = document.getElementById("pause"); 
pauseButton.onclick = pauseVid;

var slowDwonButton = document.getElementById("slower"); 
slowDwonButton.onclick = slowVid;

var speedUpButton = document.getElementById("faster"); 
speedUpButton.onclick = fasterVid;

var skipButton = document.getElementById("skip"); 
skipButton.onclick = skipVid;

var muteButton = document.getElementById("mute"); 
muteButton.onclick = muteVid;

var volume = document.getElementById("slider"); 
volume.addEventListener('change',setVolume);
volume.addEventListener('input',setVolume);


function playVid() { 
  vid.play(); 
} 

function pauseVid() { 
  vid.pause(); 
} 

function slowVid() { 

  if (index != 0) {
  	  index = index - 1;
  }

  vid.playbackRate = speed[index];
} 

function fasterVid() { 
  if (index != 2) {
  	  index = index + 1;
  }

  vid.playbackRate = speed[index];
} 

function skipVid() { 
  vid.currentTime = vid.currentTime + 15;

  if (vid.currentTime >= vid.duration){
  	vid.currentTime = 0;
  }
} 

function muteVid() { 
  vid.muted = true;
} 

var setVolume = function() { 
  vid.volume = this.value / 100;
} 
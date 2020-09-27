//<i class="fa fa-pause" aria-hidden="true"></i>

//select DOM
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress_bar = document.getElementById('progress');
const timestamp = document.getElementById('timestamp_id');



//update time 
function setVideoProgress(){
	video.currentTime = (+progress_bar.value * video.duration)/100;
	
}

//progress the range bar
function progressBar(){
	const time = (video.currentTime/video.duration)*100;
	progress_bar.value = time;

	let mins = Math.floor(video.currentTime / 60);
	if (mins < 10) {
		mins = '0' + mins;
	}

	let secs = Math.floor(video.currentTime % 60);
	if (secs < 10) {
		secs = '0' + secs;
}

		timestamp.innerHTML = `${mins}:${secs}`;	

}

//stop video
function stopVideo(){
	video.currentTime = 0;
	video.pause();
}


//change icon

function changePlayIcon(){
	if (video.paused) {
		play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'
	}else{
		play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'
	}
}

//play and pause video
function togglePlayStop(){
	if (video.paused) {
		video.play();
	}else{
		video.pause();
	}
}

//EVENT LISTENERS
video.addEventListener('click', togglePlayStop);

video.addEventListener('play', changePlayIcon);

video.addEventListener('pause', changePlayIcon);

play.addEventListener('click', togglePlayStop);

stop.addEventListener('click', stopVideo);

video.addEventListener('timeupdate', progressBar);

progress_bar.addEventListener('change', setVideoProgress);
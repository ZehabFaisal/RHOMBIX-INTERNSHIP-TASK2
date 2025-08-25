const heading = document.getElementById('heading');
const subHeading = document.getElementById('sub-heading');
const songImg = document.getElementById('song-img');
const audio = document.getElementById('audio');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const play = document.getElementById('play');
const progress = document.getElementById('progress');
const progress_bar = document.getElementById('progress_bar');
const current = document.getElementById('current');
const total = document.getElementById('total');
const mutebtn = document.getElementById('mutebtn');
const link = document.getElementById('link');
const tbox = document.getElementById("tbox");
const toogle = document.getElementById("toogle");
const list = document.getElementById("list");

window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const volumeSlider = document.getElementById('volume-slider');

    audio.volume = volumeSlider.value;

    volumeSlider.addEventListener('input', () => {
        audio.volume = volumeSlider.value;
        console.log('Volume set to:', audio.volume);
    });
});

tbox.onclick = ()=>{
    toogle.classList.toggle('active');
    list.classList.toggle('active');
}

document.onclick = function(e){
    if(e.target.id !== 'tbox' && e.target.id !== 'toogle' && e.target.id !== 'list'){
        toogle.classList.remove('active');
        list.classList.remove('active');
    }
}

mutebtn.onclick = function () {
    if (audio.muted == true) {
        audio.muted = false;
        mutebtn.innerHTML = "<i class='fas fa-volume-up'></i>";
    }
    else {
        audio.muted = true;
        mutebtn.innerHTML = "<i class='fas fa-volume-mute red'></i>";
    }
}

play.onclick = function () {
    if (audio.paused) {
        audio.play();
        play.src = "pause.png";
        songImg.classList.add('anime');
    }
    else {
        audio.pause();
        play.src = "play.png";
        songImg.classList.remove('anime');
    }
}

var img = new Array(
    "pic-1.jpg", "pic-2.jpg", "pic-3.jpg", "pic-4.jpg", "pic-5.png"
);

var music = new Array(
    "audio1.mp3", "audio2.mp3", "audio3.mp3", "audio4.mp3", "audio5.mp3"
);

var song = new Array(
    "Song 1", "Song 2", "Song 3", "Song 4", "Song 5"
);

var artist = new Array(
    "Singer 1", "Singer 2", "Singer 3", "Singer 4", "Singer 5"
);

let i = 0;

next.onclick = function () {
    if (i <= 4) {
        if (i == 4) {
            i = -1;
        }

        document.body.style.backgroundImage = 'linear-gradient(rgba(35, 43, 56, 0.9), rgba(35, 43, 56, 0.9)), url("' + img[i + 1] + '")';
        songImg.src = img[i + 1];
        audio.src = music[i + 1];
        audio.play();
        play.src = "pause.png";
        songImg.classList.add('anime');

        heading.innerHTML = song[i + 1];
        subHeading.innerHTML = artist[i + 1];

        link.href = music[i + 1];
        i++;
    }
}

prev.onclick = function () {
    if (i >= 0) {
        if (i == 0) {
            i = 5;
        }
        document.body.style.backgroundImage = 'linear-gradient(rgba(35, 43, 56, 0.9), rgba(35, 43, 56, 0.9)), url("' + img[i - 1] + '")';
        songImg.src = img[i - 1];

        audio.src = music[i - 1];
        audio.play();
        play.src = "pause.png";
        songImg.classList.add('anime');

        heading.innerHTML = song[i - 1];
        subHeading.innerHTML = artist[i - 1];

        link.href = music[i - 1];
        i--;
    }
}


total.innerHTML = Timer(audio.duration);

audio.ontimeupdate = function (e) {
    progress.style.width = Math.floor(100 * audio.currentTime / audio.duration) + "%";
    current.innerHTML = Timer(audio.currentTime);
    total.innerHTML = Timer(audio.duration);
}

progress_bar.onclick = function (e) {
    audio.currentTime = ((e.offsetX / progress_bar.offsetWidth) * audio.duration);
}

function Timer(num) {
    var minutes = parseInt(num / 60);
    var seconds = parseInt(num % 60);
    if (seconds < 10) {
        return "0" + minutes + ":0" + seconds;
    }

    else {
        return "0" + minutes + ":" + seconds;
    }
}

audio.onended = function () {
    if (i == 4) {
        i = -1;
    }

    document.body.style.backgroundImage = 'linear-gradient(rgba(35, 43, 56, 0.9), rgba(35, 43, 56, 0.9)), url("' + img[i + 1] + '")';

    songImg.src = img[i + 1];
    audio.src = music[i + 1];
    audio.play();
    play.src = "pause.png";
    songImg.classList.add('anime');

    heading.innerHTML = song[i + 1];
    subHeading.innerHTML = artist[i + 1];

    link.href = music[i + 1];
    i++;
};
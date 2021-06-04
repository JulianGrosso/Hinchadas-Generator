const audioHinchada01 = document.getElementById("audio-hinchada-01");
const botonHinchada01 = document.getElementById("boton-hinchada-01");
audioHinchada01.volume = 0.45;

botonHinchada01.onclick = function () {
	if (audioHinchada01.paused) {
		audioHinchada01.play();
	} else {
		audioHinchada01.pause();
	}
};

const audioHinchada02 = document.getElementById("audio-hinchada-02");
const botonHinchada02 = document.getElementById("boton-hinchada-02");
audioHinchada02.volume = 0.35;

botonHinchada02.onclick = function () {
	if (audioHinchada02.paused) {
		audioHinchada02.play();
	} else {
		audioHinchada02.pause();
	}
};

const botonCancha = document.getElementById("boton-cancha");
const audioBase01 = document.getElementById("audio-base01");
const audioBase02 = document.getElementById("audio-base02");
const audioBase03 = document.getElementById("audio-base03");

botonCancha.onclick = function () {
	if (audioBase01.paused && audioBase02.paused && audioBase03.paused) {
		audioBase01.play();
		audioBase02.play();
		audioBase03.play();
	} else {
		audioBase01.pause();
		audioBase02.pause();
		audioBase03.pause();
	}
};

const botonReaccion01 = document.getElementById("reaccion-1");
const audioReaccion01 = document.getElementById("audio-gol");

botonReaccion01.onclick = function () {
	if (audioReaccion01.paused) {
		audioReaccion01.play();
	} else {
		audioReaccion01.pause();
	}
};

const botonReaccion02 = document.getElementById("reaccion-2");
const audioReaccion02 = document.getElementById("audio-uh");
audioReaccion02.volume = 0.7;

botonReaccion02.onclick = function () {
	if (audioReaccion02.paused) {
		audioReaccion02.play();
	} else {
		audioReaccion02.pause();
	}
};

const botonReaccion03 = document.getElementById("reaccion-3");
const audioReaccion03 = document.getElementById("audio-eh");
audioReaccion03.volume = 0.7;

botonReaccion03.onclick = function () {
	if (audioReaccion03.paused) {
		audioReaccion03.play();
	} else {
		audioReaccion03.pause();
	}
};

const botonReaccion04 = document.getElementById("reaccion-4");
const audioReaccion04 = document.getElementById("audio-silbidos");
audioReaccion04.volume = 0.7;

botonReaccion04.onclick = function () {
	if (audioReaccion04.paused) {
		audioReaccion04.play();
	} else {
		audioReaccion04.pause();
	}
};

// progreso en % = (audioBase01.currentTime * 100)/audioBase01.duration

/*
const progress = document.querySelector(".progress");

function updateProgress(e) {
	const { duration, currentTime } = e.srcElement;
	const progressPercent = (currentTime / duration) * 100;
	progress.style.width = `${progressPercent}%`;
}

audioHinchada01.addEventListener("timeupdate", updateProgress);
*/

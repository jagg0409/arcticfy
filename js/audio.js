
const play = document.getElementById("play");

play.onclick = () => {
  // Here you will add path to local file you have
  const audio = new Audio(
    "../audio/bodypaint.mp3"
  );

  audio.play();
};

const pause = document.getElementById("pause");

pause.onclick = () => {
  // Here you will add path to local file you have
audio=null
;
  audio.pause();
};





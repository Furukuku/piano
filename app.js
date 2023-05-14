const whiteKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'];
const blackKeys = ['w', 'e', 't', 'y', 'u', 'o', 'p'];

const keys = document.querySelectorAll('.key');
const white = document.querySelectorAll('.key.white');
const black = document.querySelectorAll('.key.black');

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key));
});

document.addEventListener('keydown', e => {
  if(e.repeat) return;

  const key = e.key;
  const whiteKeyIndex = whiteKeys.indexOf(key);
  const blackKeyIndex = blackKeys.indexOf(key);

  if(whiteKeyIndex > -1) playNote(white[whiteKeyIndex]);
  if(blackKeyIndex > -1) playNote(black[blackKeyIndex]);
})

function playNote(key){
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  setTimeout(key.classList.add('active'), 1000);
  noteAudio.addEventListener('ended', () =>{
    key.classList.remove('active');
  })
}
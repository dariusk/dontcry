var songPlaying = false;
var songHangdle = null;

$(document).ready( function() {
  lowLag.init({
    'urlPrefix':'audio/'
  });
  lowLag.load(['baby.wav'],'baby');
  lowLag.load(['flourish.wav'],'flourish');
  lowLag.load(['snarechord1.wav'],'snarechord');
  lowLag.load(['ehvamp.wav'],'ehvamp');
  lowLag.load(['arms.wav'],'arms');
  lowLag.load(['kick.wav'],'kick');
});

function song() {
  if (songPlaying) {
    clearInterval(songHangle);
  }
  else {
    ac = 0;
    a = ['baby','baby','snarechord','','kick','kick','snarechord',''];
    songHangle = setInterval(function() { 
      if (a[ac % a.length] !== '') {
        lowLag.play(a[ac % a.length]);
      }
      ac++;
    }, 350);
  }
  // toggle
  songPlaying = songPlaying ? false : true;
}

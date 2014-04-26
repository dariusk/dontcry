var songPlaying = false;
var songHandle = null;
var oldSample = null;

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
    clearInterval(songHandle);
  }
  else {
    ac = 0;
    a = ['baby','baby','snarechord','','kick','kick','snarechord',''];
    songHangle = setInterval(function() { 
      if (a[ac % a.length] !== '') {
        lowLag.play(a[ac % a.length]);
        if (oldSample) document.getElementById(oldSample).style.background = 'gray';
        document.getElementById(a[ac % a.length]).style.background = 'yellow';
        oldSample = a[ac % a.length];
      }
      ac++;
    }, 350);
  }
  // toggle
  songPlaying = songPlaying ? false : true;
}

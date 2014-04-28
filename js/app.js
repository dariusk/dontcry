var songPlaying = false;
var songHandle = null;
var oldSample = null;
var ac, pattern, ones, twos, halves;
var kicksnare = true;

$(document).ready( function() {
  lowLag.init({
    'urlPrefix':'audio/'
  });
  lowLag.load(['baby1.wav'],'baby');
  lowLag.load(['flourish.wav'],'flourish');
  lowLag.load(['snarechord1.wav'],'snarechord');
  lowLag.load(['ehvamp1.wav'],'ehvamp');
  lowLag.load(['ehvamp2b.wav'],'ehvampb');
  lowLag.load(['arms1.wav'],'arms');
  lowLag.load(['arms2.wav'],'arms2');
  lowLag.load(['kick.wav'],'kick');
  lowLag.load(['kick2.wav'],'kick2');
  lowLag.load(['snare.wav'],'snare');
  lowLag.load(['stringbass.wav'],'stringbass');
  lowLag.load(['guithi1.wav'],'guithi');
  lowLag.load(['guitlo2.wav'],'guitlo');
});

function song() {
  if (songPlaying) {
    clearInterval(songHandle);
  }
  else {
    ac = 0;
    pattern = ['baby','baby','guithi','guitlo','ehvamp','ehvampb','arms','arms2'];
    songHandle = setInterval(function() { 
      var beat = ac % 4;
      if (kicksnare && beat === 0) { lowLag.play('kick2'); }
      if (kicksnare && beat === 2) { lowLag.play('snare'); }
      var ind = ac % pattern.length;
      if (pattern[ind] !== '') {
        lowLag.play(pattern[ind]);
        if (oldSample) {
          document.getElementById(oldSample).style.background = 'gray';
        }
        document.getElementById(pattern[ind]).style.background = 'yellow';
        oldSample = pattern[ind];
      }
      ac++;
    }, 350);
  }
  // toggle
  songPlaying = songPlaying ? false : true;
}

function songRand() {
  if (songPlaying) {
    clearInterval(songHandle);
  }
  else {
    ac = 0;
    pattern = ['baby','baby','guithi','guitlo','ehvamp','ehvampb','arms','arms2'];
    songHandle = setInterval(function() { 
      var beat = ac % 4;
      if (kicksnare && beat === 0) { lowLag.play('kick2'); }
      if (kicksnare && beat === 2) { lowLag.play('snare'); }
      var ind = Math.floor(Math.random()*pattern.length);
      if (pattern[ind] !== '') {
        lowLag.play(pattern[ind]);
        if (oldSample) {
          document.getElementById(oldSample).style.background = 'gray';
        }
        document.getElementById(pattern[ind]).style.background = 'yellow';
        oldSample = pattern[ind];
      }
      ac++;
    }, 350);
  }
  // toggle
  songPlaying = songPlaying ? false : true;
}

function songOneTwo() {
  if (songPlaying) {
    clearInterval(songHandle);
  }
  else {
    ac = 0;
    ones = ['baby', 'ehvamp'];
    twos = ['guithi', 'arms'];
    halves = ['baby','ehvampb', 'guitlo', 'arms2'];
    songHandle = setInterval(function() { 
      var beat = ac % 4;
      if (beat === 0) {
        var thisSample = ones[Math.floor(Math.random()*ones.length)];
        lowLag.play(thisSample);
        if (kicksnare) { lowLag.play('kick2'); }
        if (oldSample) {
          document.getElementById(oldSample).style.background = 'gray';
        }
        document.getElementById(thisSample).style.background = 'yellow';
        oldSample = thisSample;
      }
      else if (beat === 2) {
        if (kicksnare) { lowLag.play('snare'); }
        var thisSample = twos[Math.floor(Math.random()*twos.length)];
        lowLag.play(thisSample);
        if (oldSample) {
          document.getElementById(oldSample).style.background = 'gray';
        }
        document.getElementById(thisSample).style.background = 'yellow';
        oldSample = thisSample;
      }
      else {
        var thisSample = halves[Math.floor(Math.random()*halves.length)];
        lowLag.play(thisSample);
        if (oldSample) {
          document.getElementById(oldSample).style.background = 'gray';
        }
        document.getElementById(thisSample).style.background = 'yellow';
        oldSample = thisSample;
      }
      ac++;
    }, 350);
  }
  // toggle
  songPlaying = songPlaying ? false : true;
}

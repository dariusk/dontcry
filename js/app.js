var songPlaying = false;
var songHandle = null;
var oldSample = null;
var ac, pattern, ones, twos, halves;
var kicksnare = true;

$(document).ready( function() {
  lowLag.init({
    'urlPrefix':'audio/'
  });
  lowLag.load(['baby1.wav','baby1.mp3'],'baby');
  lowLag.load(['flourish.wav','flourish.mp3'],'flourish');
  lowLag.load(['snarechord1.wav','snarechord1.mp3'],'snarechord');
  lowLag.load(['ehvamp1.wav','ehvamp1.mp3'],'ehvamp');
  lowLag.load(['ehvamp2b.wav','ehvamp2b.mp3'],'ehvampb');
  lowLag.load(['arms1.wav','arms1.mp3'],'arms');
  lowLag.load(['arms2.wav','arms2.mp3'],'arms2');
  lowLag.load(['kick.wav','kick.mp3'],'kick');
  lowLag.load(['kick2.wav','kick2.mp3'],'kick2');
  lowLag.load(['snare.wav','snare.mp3'],'snare');
  lowLag.load(['stringbass.wav','stringbass.mp3'],'stringbass');
  lowLag.load(['guithi3.wav','guithi3.mp3'],'guithi');
  lowLag.load(['guitlo2.wav','guitlo2.mp3'],'guitlo');
  lowLag.load(['mykick2.wav'],'mykick');
  lowLag.load(['new1.wav'],'myhit');
  lowLag.load(['new2.wav'],'myhit2');
  lowLag.load(['guitvain.wav'],'myhit3');
  lowLag.load(['snarestand.wav'],'myhit4');
  lowLag.load(['breath.wav'],'breath');
  lowLag.load(['oohbass.wav'],'oohbass');
  lowLag.load(['flourish.wav'],'flourish');
  lowLag.load(['crybass.wav'],'crybass');
  lowLag.load(['tearsbass.wav'],'tearsbass');
  lowLag.load(['hornkick.wav'],'hornkick');
  lowLag.load(['stand.wav'],'stand');
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
    ones = ['baby', 'ehvamp', 'kick', 'tearsbass', 'hornkick', 'stand'];
    twos = ['guithi', 'arms', 'myhit', 'myhit4','myhit3', 'flourish'];
    halves = ['baby','ehvampb', 'guitlo', 'arms2', 'myhit2', 'breath', 'oohbass', 'flourish', 'crybass', 'stand', 'kick'];
    songHandle = setInterval(function() { 
      var beat = ac % 4;
      var thisSample;
      if (beat === 0) {
        thisSample = ones[Math.floor(Math.random()*ones.length)];
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
        thisSample = twos[Math.floor(Math.random()*twos.length)];
        lowLag.play(thisSample);
        if (oldSample) {
          document.getElementById(oldSample).style.background = 'gray';
        }
        document.getElementById(thisSample).style.background = 'yellow';
        oldSample = thisSample;
      }
      else {
        thisSample = halves[Math.floor(Math.random()*halves.length)];
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

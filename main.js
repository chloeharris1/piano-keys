// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
// Loop through keys array and push the keys elements to the notes array
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Named functions that change the color of the keys below
const keyPlay = function(event){
  event.target.style.backgroundColor = '#88B04B';
}

const keyReturn = function(event){
  event.target.style.backgroundColor = '';
}

// Named function with event handler properties
const assignEvent = function(note){
// Invoke keyPlay function on mousedown
note.onmousedown = function(){
  keyPlay(event);
}
// Invoke keyReturn function on mouseup
note.onmouseup = function(){
  keyReturn(event);
}
}

// Loop that runs the array elements through the function
notes.forEach(assignEvent);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// This is the event handler property and function for the first progress button
nextOne.onclick = function(){
  // Reveal the nextTwo button and hide the nextOne button
  nextTwo.hidden = false;
  nextOne.hidden = true; 

  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
}

// This is the event handler property and function for the second progress button
nextTwo.onclick = function(){
  // Reveal the nextThree button and hide the nextTwo button
  nextThree.hidden = false;
  nextTwo.hidden = true;
  // Update song lyrics
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI-';
  // Show last lyric
  lastLyric.style.display = 'inline-block';
  // Update musical notes
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('letter-note-six').innerHTML = 'B';
}

// This is the event handler property and function for the third progress button
nextThree.onclick = function(){
  startOver.hidden = false; 
  nextThree.hidden = true; 
  // Update song lyrics
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU!';

  // Update musical notes
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';

  // Change the display property of lastLyric back to 'none'
  lastLyric.style.display = 'none';
}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}
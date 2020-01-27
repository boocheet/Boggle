let start = document.getElementById('start');
start.addEventListener("click", boardFiller);

//fills the board with random letters
function boardFiller(){
  let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "qu", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  for(let letterBox = 1; letterBox <= 16; letterBox++){
    let boxClass = document.getElementsByClassName(letterBox);
    let randomLetter = letters[Math.floor(Math.random()*letters.length)];
    boxClass[0].innerHTML = randomLetter;
    console.log(boxClass);
  }

}
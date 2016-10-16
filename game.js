//words are selected then exported 
var wordsToGuess = ['MASTER', 'MICKEY', 'TRAVEL', 'DONNA', 'RIVER', 'RORY', 'DOCTOR', 'ROSE', 'TIME', 'DALEKS', 'SONG', 'KNINE', 'AMY', 'CYBERMEN', 'JACK', 'SONTARIAN', 'MARTHA', 'TARDIS', 'SMITH', "DOCTORWHO"];
var randomIndex = Math.floor(Math.random() * wordsToGuess.length);
var randomWord = wordsToGuess[randomIndex];
exports.randomWord = randomWord;
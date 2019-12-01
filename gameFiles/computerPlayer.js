const { words } = require("./words");

class ComputerPlayer {
    constructor(name = "Referee") {
        this.dictionary = words;
    }

    wordToBeGuessed() {
        let idx = Math.floor(Math.random() * this.dictionary.length)
        this.secretWord = this.dictionary[idx];
        return this.secretWord.length;
    }

    checkGuess(char) {
        let indicies = [];
        for (let i = 0; i < this.secretWord.length; i++) {
            if (this.secretWord[i] === char) {
                indicies.push(i);
            }
        }
        return indicies;
    }

    reveal() {
        return this.secretWord;
    }
}

module.exports = ComputerPlayer;

let robo = new ComputerPlayer();
console.log(robo.wordToBeGuessed())
console.log(robo)
console.log(robo.reveal())
console.log(robo.checkGuess('a'))
console.log(robo.checkGuess('e'))
console.log(robo.checkGuess('i'))
console.log(robo.checkGuess('o'))
console.log(robo.checkGuess('u'))
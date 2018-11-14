let wrongGuesses = 3
let word = ''
let wordBlank = []

const setupGame = () => {
  word = 'apple'
  wrongGuesses = 3;
  wordBlank = word.split('').map(() => '_');
}

const updateGame = (letter) => {
  let index = word.indexOf(letter)

  while (index !== -1) {
    wordBlank[index] = letter
    index = word.indexOf(letter, index + 1)
  }
  console.log(wordBlank.join(''))
}

const isEndOfGame = () => {
  if (word === wordBlank.join('')) {
    console.log('You WON!')
  } else if (wrongGuesses === 0) {
    console.log('You LOST!')
  }
  console.log('Keep Going!')
}

const chooseAndCheckLetter = (letter) => {
  if (word.includes(letter)) {
    updateGame(letter)
    console.log('Letter exists.')
  } else {
    wrongGuesses = wrongGuesses - 1
    console.log('Letter does not exist.')
  }
  isEndOfGame()
}

setupGame()
chooseAndCheckLetter('p')
chooseAndCheckLetter('l')
chooseAndCheckLetter('x')
chooseAndCheckLetter('a')
chooseAndCheckLetter('v')
chooseAndCheckLetter('e')
// chooseAndCheckLetter('y') // This is used for a test.



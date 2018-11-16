const words = ['eat', 'meat', 'heat', 'chris', 'too', 'lead', 'hot', 'bar', 'mead', 'head', 'read', 'peets bar']
let letters = {
  'a': [], 'e': []
}

// TODO: Make this part work!!!
// console.log(function wordsWith(letters, words) {
//   words.forEach(word => {
//     word.split('').forEach(letter => {
//       if (letters[letter]) {
//         letters[letter].push(word)
//       }
//     })
//   })

//   Object.keys(letters).map
// }(letters, words))

// console.log plus function that takes a string letters
// and an array of strings that takes an array of words 
console.log(function getWorldsWith(letters, words) {
  // TODO: come up with a way to build function 
  // without side effects
  letters.split('').forEach(letter => {
    words = words.filter(word => word.includes(letter))
  })

  return words
}('eat', words))




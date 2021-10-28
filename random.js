const RandomDitado = {
  // store ditados  already showed , only used when repetition is not allowed
  dontRepeat: [],
  // return random ditado
  getRandomDitado(allowRepeat, arrayData) {
    let number
    if (allowRepeat) { // allow repetition of ditados
      const newNumber = Math.floor(Math.random() * arrayData.length)
      number = newNumber
    } // dont allow repetition
    if (this.dontRepeat.length >= arrayData.length) {
      this.dontRepeat = []
    }
    if (this.dontRepeat.length < arrayData.length) {
      let newNumber
      do {
        newNumber = Math.floor(Math.random() * arrayData.length)
      } while (this.dontRepeat.indexOf(newNumber) >= 0)
      this.dontRepeat.push(newNumber)
      number = newNumber
    }
    return arrayData[number]
  },

}
module.exports = RandomDitado

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min

const generateDitado = ditados => {
  const p = getRandomInt(0, ditados.length)
  let s = getRandomInt(0, ditados.length)

  while (s === p) {
    s = getRandomInt(0, ditados.length)
  }

  const { prefix } = ditados[p]
  const { suffix } = ditados[s]

<<<<<<< HEAD
  return {
    content: `${prefix} ${suffix}`,
    prefix,
    suffix,
  }
=======
  return `${prefix} ${suffix}`
>>>>>>> 8ccceb8749aeef73c2a39e4e1d03afad5e8b1de4
}

module.exports = generateDitado

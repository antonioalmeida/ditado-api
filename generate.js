const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min

const generateDitado = ditados => {
  const p = getRandomInt(0, ditados.length)
  let s = getRandomInt(0, ditados.length)

  while (s === p) {
    s = getRandomInt(0, ditados.length)
  }

  const { prefix } = ditados[p]
  const { suffix } = ditados[s]

  return {
    content: `${prefix} ${suffix}`,
    prefix,
    suffix,
  }
}

module.exports = generateDitado

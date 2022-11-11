const fs = require('fs')
const halves = require('./halves.json')

const ditados = []

const nDitados = halves.prefixes.length
console.log('nDitados', nDitados)

// eslint-disable-next-line no-plusplus
for (let i = 0; i < nDitados; i++) {
  const prefix = halves.prefixes[i].text
  const suffix = halves.suffixes[i].texto

  const ditado = { prefix, suffix }

  ditados.push(ditado)
}

try {
  fs.writeFileSync('test.json', JSON.stringify(ditados))
  // file written successfully
} catch (err) {
  console.error(err)
}

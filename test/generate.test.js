const { expect, test } = require('@jest/globals')
const generateDitado = require('../generate')

test('generates ditado', () => {
  const ditados = [
    { prefix: 'prefix 1', suffix: 'suffix 1' },
    { prefix: 'prefix 2', suffix: 'suffix 2' },
  ]

  expect([
    { content: 'prefix 1 suffix 2' },
    { content: 'prefix 2 suffix 1' },
  ]).toContain(generateDitado(ditados))
})

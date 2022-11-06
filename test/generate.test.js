const { expect, test } = require('@jest/globals')
const generateDitado = require('../generate')

test('generates ditado', () => {
  const ditados = [
    { prefix: 'prefix 1', suffix: 'suffix 1' },
    { prefix: 'prefix 2', suffix: 'suffix 2' },
  ]

  expect([
    'prefix 1 suffix 2',
    'prefix 2 suffix 1',
  ]).toContain(generateDitado(ditados))
})

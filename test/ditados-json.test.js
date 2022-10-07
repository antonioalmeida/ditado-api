const { expect, test } = require('@jest/globals')
const Ajv2020 = require('ajv/dist/2020')
const ditadosSchemaJson = require('../ditados.schema.json')
const ditadosJson = require('../ditados.json')

test('validate the ditados json file', () => {
  const ajv = new Ajv2020()
  const validate = ajv.compile(ditadosSchemaJson)

  expect(validate(ditadosJson)).toBe(true)
})

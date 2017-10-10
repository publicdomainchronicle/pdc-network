var ajv = new (require('ajv'))()
var assert = require('assert')
var data = require('./')
var schema = require('./schema')

assert(
  ajv.validateSchema(schema),
  'invalid JSON Schema'
)

ajv.validate(schema, data)

assert.equal(ajv.errors, null)

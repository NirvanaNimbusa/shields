'use strict'

const { test, given } = require('sazerac')
const OreLicense = require('./ore-license.service')

describe('OreLicense', function () {
  test(OreLicense.prototype.transform, () => {
    given({
      data: {
        settings: { license: { name: 'MIT', url: 'http://sample.url' } },
      },
    }).expect({ license: 'MIT' })
  })

  test(OreLicense.prototype.transform, () => {
    given({
      data: {
        settings: { license: { name: null, url: 'http://sample.url' } },
      },
    }).expect({ license: 'custom' })
  })

  test(OreLicense.prototype.transform, () => {
    given({
      data: {
        settings: { license: { name: null, url: null } },
      },
    }).expect({ license: undefined })
  })
})

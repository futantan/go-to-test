import assert = require('assert')
import { isTestFile } from '../../isTestFile'

suite('isTestFile', () => {
  test('should return true when is .test file', () => {
    const result = isTestFile('/user/demo/sum.test.js')

    assert.equal(result, true)
  })

  test('should return true when is .spec file', () => {
    const result = isTestFile('/user/demo/sum.spec.js')

    assert.equal(result, true)
  })

  test('should return false when is other file', () => {
    const result = isTestFile('/user/demo/sum.js')

    assert.equal(result, false)
  })
})

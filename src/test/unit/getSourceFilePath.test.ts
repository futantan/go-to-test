import assert = require('assert')
import { getSourceFilePath } from '../../getSourceFilePath'

suite('getSourceFilePath', () => {
  test('should work with .test suffix', () => {
    const result = getSourceFilePath('/user/demo/__tests__/sum.test.js')
    const expected = {
      possiblePaths: ['/user/demo/sum.js'],
      fileName: 'sum.js'
    }

    assert.deepEqual(result, expected)
  })

  test('should work with .spec suffix', () => {
    const result = getSourceFilePath('/user/demo/__tests__/sum.spec.js')
    const expected = {
      possiblePaths: ['/user/demo/sum.js'],
      fileName: 'sum.js'
    }

    assert.deepEqual(result, expected)
  })
})

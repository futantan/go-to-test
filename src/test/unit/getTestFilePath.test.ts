import assert = require('assert')
import { getTestFilePath } from '../../getTestFilePath'

suite('getTestFilePath', () => {
  test('should return possible paths of source file', () => {
    const result = getTestFilePath('/user/demo/sum.js')
    const expected = {
      possiblePaths: [
        '/user/demo/__tests__/sum.test.js',
        '/user/demo/__tests__/sum.spec.js'
      ],
      fileName: 'sum.js'
    }

    assert.deepEqual(result, expected)
  })
})

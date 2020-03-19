import * as path from 'path'
import { TEST_FILE_SUFFIXES } from './constant'
import { OpenOption } from './type'

function removeTestSuffix(fileName: string) {
  TEST_FILE_SUFFIXES.forEach(suffix => {
    fileName = fileName.replace(`.${suffix}.`, '.')
  })
  return fileName
}

// input -> /user/demo/__tests__/sum.test.js
export function getSourceFilePath(testFilePath: string): OpenOption {
  const fileFullName = path.basename(testFilePath) // sum.test.js
  const sourceFolder = path.dirname(path.dirname(testFilePath)) // /user/demo

  const fileName = removeTestSuffix(fileFullName) // sum.js
  const sourceFilePath = path.join(sourceFolder, fileName) // /user/demo/sum.js
  return { possiblePaths: [sourceFilePath], fileName }
}

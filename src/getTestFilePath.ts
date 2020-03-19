import * as path from 'path'
import {
  TEST_FOLDER_NAME,
  TEST_FILE_SUFFIX,
  TEST_FILE_SUFFIXES
} from './constant'
import { OpenOption } from './type'

// input -> /user/demo/sum.js
export function getTestFilePath(filePath: string): OpenOption {
  const fileFullName = path.basename(filePath) // sum.js
  const [fileName, ...extensions] = fileFullName.split('.')
  const currentFolder = path.dirname(filePath)

  const testFolder = path.join(currentFolder, TEST_FOLDER_NAME)
  return {
    possiblePaths: TEST_FILE_SUFFIXES.map(suffix =>
      path.join(testFolder, [fileName, suffix, ...extensions].join('.'))
    ),
    fileName: fileFullName
  }
}

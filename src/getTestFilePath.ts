import * as path from 'path'
import * as R from 'ramda'
import { TEST_FOLDER_NAME, TEST_FILE_SUFFIX } from './constant'

export function getTestFilePath(filePath: string) {
  const fileFullname = path.basename(filePath)
  const [fileName, ...extensions] = fileFullname.split('.')
  const currentFolder = path.dirname(filePath)

  const testFolder = path.join(currentFolder, TEST_FOLDER_NAME)
  const testFilePath = path.join(
    testFolder,
    [fileName, TEST_FILE_SUFFIX, ...extensions].join('.')
  )
  return testFilePath
}

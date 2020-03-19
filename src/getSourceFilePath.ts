import * as path from 'path'
import { TEST_FILE_SUFFIX } from './constant'

export function getSourceFilePath(testFilePath: string) {
  const fileFullName = path.basename(testFilePath)
  const sourceFolder = path.dirname(path.dirname(testFilePath))

  const sourceFilePath = path.join(
    sourceFolder,
    fileFullName.replace(`.${TEST_FILE_SUFFIX}`, '')
  )
  return sourceFilePath
}

import * as path from 'path'
import { TEST_FILE_SUFFIX } from './constant'

export function isTestFile(filePath: string) {
  const fileName = path.basename(filePath)
  return [TEST_FILE_SUFFIX].some(suffix => fileName.includes(`.${suffix}`))
}

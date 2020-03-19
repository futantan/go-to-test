import * as vscode from 'vscode'
import * as fs from 'fs'
import { OpenOption } from './type'

export function openFile({ possiblePaths, fileName }: OpenOption) {
  const chosen = possiblePaths.find(fs.existsSync)

  if (chosen) {
    return vscode.workspace
      .openTextDocument(chosen)
      .then(vscode.window.showTextDocument)
  } else {
    return Promise.reject(fileName)
  }
}

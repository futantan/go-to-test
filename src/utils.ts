import * as vscode from 'vscode'

export function openFile(filePath: string) {
  return vscode.workspace
    .openTextDocument(filePath)
    .then(vscode.window.showTextDocument)
}

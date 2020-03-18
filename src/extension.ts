// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import * as path from 'path'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    'extension.goToTest',
    () => {
      const activeFile = vscode.window.activeTextEditor
      if (activeFile === undefined) return

      const [fileName, ...extensions] = path.basename(activeFile.document.uri.fsPath).split('.')
      const currentFolder = path.dirname(activeFile.document.uri.fsPath)
      const testFolder = path.join(currentFolder, '__tests__')
      const testFilePath = path.join(testFolder, [fileName, 'test', ...extensions].join('.'))


      vscode.workspace.openTextDocument(testFilePath)
        .then(vscode.window.showTextDocument)
    }
  )

  context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
export function deactivate() { }

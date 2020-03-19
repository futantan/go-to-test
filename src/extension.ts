import * as vscode from 'vscode'
import * as R from 'ramda'
import { getSourceFilePath } from './getSourceFilePath'
import { getTestFilePath } from './getTestFilePath'
import { isTestFile } from './isTestFile'
import { openFile } from './utils'

const openSourceOf = R.compose(openFile, getSourceFilePath)
const openTestOf = R.compose(openFile, getTestFilePath)
const jumpBetweenSourceAndTest = R.ifElse(isTestFile, openSourceOf, openTestOf)

export function activate(context: vscode.ExtensionContext) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('extension.goToTest', () => {
    const activeFile = vscode.window.activeTextEditor
    if (activeFile === undefined) return

    jumpBetweenSourceAndTest(activeFile.document.uri.fsPath)
  })

  context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
export function deactivate() {}

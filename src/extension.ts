'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

//
import {SampleHelpers} from './sampleHelpers';
import {SampleFunctions} from './sampleFunctions';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext)
{

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "sample-extension" is now active!');


	// The commands has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let commands = [
		vscode.commands.registerCommand('sample.sayHello', SampleFunctions.sayHello),
		vscode.commands.registerCommand('sample.showInformationMessage', SampleFunctions.showInformationMessage),
		vscode.commands.registerCommand('sample.showErrorMessage', SampleFunctions.showErrorMessage),
		vscode.commands.registerCommand('sample.showWarningMessage', SampleFunctions.showWarningMessage),
		vscode.commands.registerCommand('sample.setStatusBarMessage', SampleFunctions.setStatusBarMessage),
		vscode.commands.registerCommand('sample.createStatusBarItem', SampleFunctions.createStatusBarItem),
		vscode.commands.registerCommand('sample.createStatusBarItemClick', SampleFunctions.createStatusBarItemClick),
		vscode.commands.registerCommand('sample.showOutputChannel', SampleFunctions.showOutputChannel),
		vscode.commands.registerCommand('sample.showInputBox', SampleFunctions.showInputBox),
		vscode.commands.registerCommand('sample.showPasswordBox', SampleFunctions.showPasswordBox),
		vscode.commands.registerCommand('sample.showQuickPick', SampleFunctions.showQuickPick),
		vscode.commands.registerCommand('sample.getExtension', SampleFunctions.getExtension)
	]

	context.subscriptions.concat(commands);
}

// this method is called when your extension is deactivated
export function deactivate()
{
}
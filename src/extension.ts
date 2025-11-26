import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "vscode-phpsab-workflow-test" is now active!');

	const disposable = vscode.commands.registerCommand('vscode-phpsab-workflow-test.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from VS Code Extension Workflow Test!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}

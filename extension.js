// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const path = require('path');

const SneezierFile = require('./SneezierFile');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "sneezier" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.sneezier', function () {
		const associatedFilename = vscode.window.activeTextEditor.document.fileName;
		//console.info("fn>", vscode.window.activeTextEditor.document.fileName, vscode.window.activeTextEditor.document.languageId)
		let mainDoc = null;
		vscode.workspace.onDidChangeTextDocument(changeEvent => {
			console.log(`Did change: ${changeEvent.document.uri}`);
			//if (mainDoc) console.info(mainDoc.getText());
			// for (const change of changeEvent.contentChanges) {
			// 	 console.log(change.range); // range of text being replaced
			// 	 console.log(change.text); // text replacement
			// }
	   });

	   
	   // The code you place here will be executed every time your command is executed
	   const panel = vscode.window.createWebviewPanel(
		   'sneezier',
		   'Sneezier',
		   vscode.ViewColumn.Two,
		   {enableScripts: true}
		   );

		const linkedTextEditor = vscode.window.activeTextEditor;
		// Handle messages from the webview
		panel.webview.onDidReceiveMessage(
			message => {
				switch (message.command) {
					case 'lineChanged':
						//vscode.window.showErrorMessage(message.text);
						linkedTextEditor.edit((editBuilder) => {
							console.info(linkedTextEditor.document.lineAt(message.line).range);
							editBuilder.replace(linkedTextEditor.document.lineAt(message.line).range, message.content);
						});
						return;
				}
			},
			undefined,
			context.subscriptions
		);
		   
		vscode.window.onDidChangeTextEditorSelection(selectionChangeEvent => {
			if (selectionChangeEvent.textEditor.document.fileName === associatedFilename) {
				panel.webview.postMessage({ command: 'selectLine', lineIndex: selectionChangeEvent.selections[0].start.line });
			}
		})

		vscode.workspace.openTextDocument(vscode.window.activeTextEditor.document.fileName).then((document) => {
			let text = document.getText();
			mainDoc = document;
			const sneezierFile = new SneezierFile(text)
			panel.webview.html = getWebviewContent(sneezierFile.getPaths(), { background: sneezierFile.getBackground() }, context, vscode.window.activeTextEditor.selection.start.line);
			//vscode.window.activeTextEditor.document.conten
		  }).catch((ex) => console.error(ex));

		// After 5sec, pragmatically close the webview panel
		//const timeout = setTimeout(() => panel.dispose(), 5000);

		panel.onDidDispose(
			() => {
				// Handle user closing panel before the 5sec have passed
				//clearTimeout(timeout);
			},
			null,
			context.subscriptions
		);
		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

function getNonce() {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function getWebviewContent(paths, metadata, context, startLine) {
	const scripts = ['svg-beziers', 'bezier', 'draw', 'interaction', 'mithril', 'lodash.custom.min', 'main']
	const scriptUris = scripts.reduce((acc, scriptName) => {
		const scriptPathOnDisk = vscode.Uri.file(path.join(context.extensionPath, 'webview', 'js', `${scriptName}.js`));
		const scriptUri = scriptPathOnDisk.with({ scheme: 'vscode-resource' });
		return Object.assign(acc, { [scriptName]: scriptUri });
	}, {})

	const cssPathOnDisk = vscode.Uri.file(path.join(context.extensionPath, 'webview', 'css', 'main.css'));
	const cssUri = cssPathOnDisk.with({ scheme: 'vscode-resource' })
	const nonce = getNonce();

	return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Sneezier</title>
	<!--
	Use a content security policy to only allow loading images from https or from our extension directory,
	and only allow scripts that have a specific nonce.
	-->
	<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src vscode-resource: https:; script-src 'nonce-${nonce}';style-src vscode-resource: 'unsafe-inline' http: https: data:;">
	<link rel="stylesheet" type="text/css" href="${cssUri}" />
	<script nonce="${nonce}">
		var initialPaths = ${JSON.stringify(paths)};
		var initialMetadata = ${JSON.stringify(metadata)};
		var startLine = ${startLine};
	</script>
	${Object.keys(scriptUris).map((scriptName) => `<script nonce="${nonce}" src="${scriptUris[scriptName]}"></script>`).join('\n')}
</head>
<body>
	<noscript>You need to enable JavaScript to run this app.</noscript>
	<div id="app"></div>
</body>
</html>`;
}

module.exports = {
	activate,
	deactivate
}

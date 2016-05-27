'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {SampleHelpers} from './sampleHelpers';

export module SampleFunctions
{
    export function sayHello()
    {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');
        SampleHelpers.printInformation(sayHello, "window.showInformationMessage", "Extension say hello world :)")
    }

    export function showInformationMessage()
    {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        let button1: SampleHelpers.MessageItem
        button1 = {
            id: 0,
            title: "Button1",
            isCloseAffordance: true
        }
        let button2: SampleHelpers.MessageItem
        button2 = {
            id: 1,
            title: "Button2",
            isCloseAffordance: true
        }
        vscode.window.showInformationMessage<SampleHelpers.MessageItem>('Sample Info!', button2, button1).then((pressed: SampleHelpers.MessageItem) =>
        {
            let title = pressed.title;
            let id = pressed.id;
            SampleHelpers.printInformation(showInformationMessage, `${title} with id ${id} was pressed.`, pressed);
        });
    }

    export function showErrorMessage()
    {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.window.showErrorMessage('Sample Error!');
        SampleHelpers.printInformation(showErrorMessage, "Same Syntax as sample.showInformationMessage.");
    }

    export function showWarningMessage()
    {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.window.showWarningMessage('Sample Warning!');
        SampleHelpers.printInformation(showWarningMessage, "Same Syntax as sample.showInformationMessage.");
    }

    export function setStatusBarMessage()
    {
        // The code you place here will be executed every time your command is executed

        vscode.window.setStatusBarMessage('Sample Status!');
        SampleHelpers.printInformation(setStatusBarMessage, "Displays 'Sample Status!' on StatusBar.");
    }

    export function createStatusBarItem()
    {
        // The code you place here will be executed every time your command is executed

        let item = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 0);
        item.text = "Sample";
        item.color = "red";
        item.tooltip = "Sample Tooltip";
        item.command = "sample.createStatusBarItemClick";
        item.show();

        SampleHelpers.printInformation(createStatusBarItem, "StatusBarItem created.");
    }

    export function createStatusBarItemClick()
    {
        // The code you place here will be executed every time your command is executed

        SampleHelpers.printInformation(createStatusBarItemClick, "Sample StatusBarItem clicked.");
    }

    export function showOutputChannel()
    {
        // The code you place here will be executed every time your command is executed

        SampleHelpers.printInformation(showOutputChannel, "OutputChannel created.");
        let channel = vscode.window.createOutputChannel('Sample Output Channel');
        channel.appendLine("Sample Text.");
        channel.appendLine("You can select the channel with the dropdown in the right corner.");
        channel.show();
    }

    export function showInputBox()
    {
        // The code you place here will be executed every time your command is executed
        let options: vscode.InputBoxOptions = {
            password: false,
            placeHolder: "This is the placeHolder",
            prompt: "This is the promt",
            validateInput: (text: string) =>
            {
                if (text.endsWith("."))
                {
                    return null;
                }
                else
                {
                    return "Input must end with a dot!";
                }
            }
        }
        vscode.window.showInputBox(options).then((input: string) => 
        {
            SampleHelpers.printInformation(showInputBox, `Input "${input}" send.`, input);
        })
    }

    export function showPasswordBox()
    {
        // The code you place here will be executed every time your command is executed
        let options: vscode.InputBoxOptions = {
            password: true,
            placeHolder: "This is the placeHolder",
            prompt: "This is the promt",
            validateInput: (text: string) =>
            {
                var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
                if (re.test(text))
                {
                    return null;
                }
                else
                {
                    return "Password must contain at least 6 characters, including UPPER/lowercase and numbers!";
                }
            }
        }
        vscode.window.showInputBox(options).then((input: string) => 
        {
            SampleHelpers.printInformation(showPasswordBox, `Secret and save password "${input}" send.`, input);
        })
    }

    export function showQuickPick()
    {
        // The code you place here will be executed every time your command is executed
        let items: Array<SampleHelpers.QuickPickItem> = [
            {
                id: 0,
                description: "description1",
                detail: "detail1",
                label: "label1"
            },
            {
                id: 1,
                description: "description2",
                detail: "detail2",
                label: "label2"
            },
            {
                id: 2,
                description: "description3",
                detail: "detail3",
                label: "label3"
            }
        ]
        let options: vscode.QuickPickOptions = {
            onDidSelectItem: (item: SampleHelpers.QuickPickItem) =>
            {
                vscode.window.setStatusBarMessage(item.label);
            },
            matchOnDescription: false,
            matchOnDetail: false,
            placeHolder: "la"
        }
        vscode.window.showQuickPick<SampleHelpers.QuickPickItem>(items, options).then((item: SampleHelpers.QuickPickItem) => 
        {
            let id = item.id;
            let label = item.label;
            SampleHelpers.printInformation(showQuickPick, `${label} with id ${id} was selected.`, item);
        })
    }

    export function getExtension()
    {
        // The code you place here will be executed every time your command is executed
        var ext = vscode.extensions.getExtension("RolandGreim.sample-ext")
        SampleHelpers.printInformation(getExtension, `Some informations about this extension.\n\t\text.id: ${ext.id}\n\t\text.packageJSON: following data`, ext.packageJSON);
    }
}
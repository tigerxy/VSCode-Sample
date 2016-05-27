'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export module SampleHelpers
{
    let output = vscode.window.createOutputChannel('Sample Extension');

    export interface MessageItem extends vscode.MessageItem
    {
        id: number;
        title: string;
        isCloseAffordance?: boolean;
    }
    export interface QuickPickItem extends vscode.QuickPickItem
    {
        id: number;
        description: string;
        detail?: string;
        label: string;
    }
    function generateURL(id: string): string
    {
        return `https://code.visualstudio.com/docs/extensionAPI/vscode-api#${id}`;
    }
    function formatCode(func: Function)
    {
        return func
            .toString()
            .split("\n")
            .filter((value, index, array) =>
            {
                return !(index == 0
                    || index == array.length - 1
                    || value.trim().toLowerCase().startsWith("samplehelpers"));
            })
            .join("\n");
    }
    function getReferences(func: Function): Array<string>
    {
        var re = /vscode.((?:\w|[.])*)(?=\W)/gmi;
        var m;
        var matches: Array<string> = [];

        while ((m = re.exec(func.toString())) !== null)
        {
            if (m.index === re.lastIndex)
            {
                re.lastIndex++;
            }
            matches.push(m[1]);
        }
        return matches;
    }
    function minifyJSON(key, value)
    {
        if (value instanceof Array && value.length > 3) {
            value = ["..."];
        }
        return value;
    }
    export function printInformation(commandFuncion: Function, description: string, data?: Object | String)
    {
        output.clear();

        output.appendLine(`command:\tsample.${commandFuncion.name}`);
        getReferences(commandFuncion).forEach(reference =>
        {
            output.appendLine(`api:\t${reference}`);
            output.appendLine(`doc:\t${generateURL(reference)}`);
        });
        output.appendLine(`desc:\t${description}`);
        if (typeof data === 'object')
        {
            output.appendLine(`data:\t${JSON.stringify(data, minifyJSON)}`);
        }
        if (typeof data === 'string')
        {
            output.appendLine(`data:\t${data}`);
        }
        output.appendLine('code:');
        output.appendLine(formatCode(commandFuncion));
        output.appendLine("");

        output.show();
    }
}
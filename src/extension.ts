// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
    // Configuration steps: Access VS Code workspace configuration
    const configuration = vscode.workspace.getConfiguration();
    const explorerConfig = vscode.workspace.getConfiguration("explorer");

    // Define file nesting patterns for the explorer configuration
    const patterns = {
        "package.json": ".eslint*, prettier*, tsconfig*, vite*, pnpm-*, bun.lockb, nest*, package-lock*",
        "tailwind.config.*": "tailwind.config*, postcss.config*",
        ".env.local": ".env*",
        ".env": ".env*"
    };

    // Update the file nesting patterns in global settings
    explorerConfig.update("fileNesting.patterns", patterns, vscode.ConfigurationTarget.Global);

    // Apply editor and terminal configurations globally
    configuration.update("editor.fontFamily", "JetBrains Mono", vscode.ConfigurationTarget.Global);
    configuration.update("editor.fontSize", 14, vscode.ConfigurationTarget.Global);
    configuration.update("editor.lineHeight", 1.65, vscode.ConfigurationTarget.Global);
    configuration.update("editor.renderLineHighlight", "gutter", vscode.ConfigurationTarget.Global);
    configuration.update("editor.fontLigatures", true, vscode.ConfigurationTarget.Global);
    configuration.update("explorer.compactFolders", false, vscode.ConfigurationTarget.Global);
    configuration.update("breadcrumbs.enabled", false, vscode.ConfigurationTarget.Global);
    configuration.update("explorer.fileNesting.enabled", true, vscode.ConfigurationTarget.Global);
    configuration.update("terminal.integrated.fontSize", 14, vscode.ConfigurationTarget.Global);
    configuration.update("terminal.integrated.fontFamily", "JetBrainsMono Nerd Font", vscode.ConfigurationTarget.Global);

    // Show an information message when the extension is configured
    vscode.window.showInformationMessage('The Curvello Theme extension is now activated!');
}

// This method is called when your extension is deactivated
export function deactivate() {
    // Revert the configurations to their default values
    const configuration = vscode.workspace.getConfiguration();
    const explorerConfig = vscode.workspace.getConfiguration("explorer");

    // Revert the file nesting patterns
    explorerConfig.update("fileNesting.patterns", undefined, vscode.ConfigurationTarget.Global);

    // Revert editor and terminal configurations
    configuration.update("editor.fontFamily", undefined, vscode.ConfigurationTarget.Global);
    configuration.update("editor.fontSize", undefined, vscode.ConfigurationTarget.Global);
    configuration.update("editor.lineHeight", undefined, vscode.ConfigurationTarget.Global);
    configuration.update("editor.renderLineHighlight", undefined, vscode.ConfigurationTarget.Global);
    configuration.update("editor.fontLigatures", undefined, vscode.ConfigurationTarget.Global);
    configuration.update("explorer.compactFolders", undefined, vscode.ConfigurationTarget.Global);
    configuration.update("breadcrumbs.enabled", undefined, vscode.ConfigurationTarget.Global);
    configuration.update("explorer.fileNesting.enabled", undefined, vscode.ConfigurationTarget.Global);
    configuration.update("terminal.integrated.fontSize", undefined, vscode.ConfigurationTarget.Global);
    configuration.update("terminal.integrated.fontFamily", undefined, vscode.ConfigurationTarget.Global);

    // Show an information message when the extension is deactivated
    vscode.window.showInformationMessage('The Curvello Theme extension has been deactivated, and settings have been reverted to default.');
}

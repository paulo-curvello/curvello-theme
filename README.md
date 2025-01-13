# Curvello Theme Extension

The **Curvello Theme Extension** customizes your Visual Studio Code environment to enhance productivity and aesthetics. With a single activation, this extension applies specific settings for the editor, terminal, and file explorer.

---

## Features

This extension automatically applies the following settings:

### **Editor Customizations**
- Font Family: **JetBrains Mono**
- Font Size: **14**
- Line Height: **1.65**
- Font Ligatures: **Enabled**
- Line Highlight: **Gutter only**

### **File Explorer Enhancements**
- **Compact Folders Disabled**: Allows a full folder view without collapsing nested structures.
- **File Nesting Enabled**: Organizes related files under parent files using the following patterns:
  ```json
  {
    "package.json": ".eslint*, prettier*, tsconfig*, vite*, pnpm-*, bun.lockb, nest*, package-lock*",
    "tailwind.config.*": "tailwind.config*, postcss.config*",
    ".env.local": ".env*",
    ".env": ".env*"
  }

### **Terminal Customizations**
The terminal settings are adjusted for better readability and consistency with the editor. The following configurations are applied:

- **Font Family**: `JetBrainsMono Nerd Font`
- **Font Size**: `14`

---

## Configuration Changes

Below is a summary of all the changes made by this extension:

| Setting                             | Value                        |
|-------------------------------------|------------------------------|
| `editor.fontFamily`                 | `"JetBrains Mono"`           |
| `editor.fontSize`                   | `14`                         |
| `editor.lineHeight`                 | `1.65`                       |
| `editor.renderLineHighlight`        | `"gutter"`                   |
| `editor.fontLigatures`              | `true`                       |
| `explorer.compactFolders`           | `false`                      |
| `breadcrumbs.enabled`               | `false`                      |
| `explorer.fileNesting.enabled`      | `true`                       |
| `explorer.fileNesting.patterns`     | Custom patterns (see below)  |
| `terminal.integrated.fontSize`      | `14`                         |
| `terminal.integrated.fontFamily`    | `"JetBrainsMono Nerd Font"`  |

### **File Nesting Patterns**
The following custom file nesting patterns are applied to enhance organization in the Explorer:

```json
{
  "package.json": ".eslint*, prettier*, tsconfig*, vite*, pnpm-*, bun.lockb, nest*, package-lock*",
  "tailwind.config.*": "tailwind.config*, postcss.config*",
  ".env.local": ".env*",
  ".env": ".env*"
}

---

## Requirements

To fully utilize this extension, ensure the following:

1. **JetBrains Mono Font**:
   - Download and install it from [JetBrains Mono Website](https://www.jetbrains.com/lp/mono/).

2. **Nerd Fonts**:
   - Download and install a Nerd Font for compatibility with terminal enhancements:
     - [Nerd Fonts Website](https://www.nerdfonts.com/).

---

## Known Issues

- Overwrites some global settings, which might conflict with existing user preferences.
- Requires the `JetBrains Mono` and `Nerd Fonts` to be installed locally for optimal experience.

---

## Release Notes

### 1.0.0
- Initial release with:
  - Editor customizations (font, size, line height, ligatures, and highlight settings).
  - Terminal customizations (font family and size).
  - File explorer nesting patterns and layout changes.
  - Automatic reversion of settings upon deactivation.

---

## Development Notes

To test or customize this extension:

1. Clone the repository locally.
2. Open the project in Visual Studio Code.
3. Press `F5` to run the extension in the **Extension Development Host**.

For more information, see the [Visual Studio Code API Documentation](https://code.visualstudio.com/api).

---

## For More Information

- [JetBrains Mono Font](https://www.jetbrains.com/lp/mono/)
- [Nerd Fonts](https://www.nerdfonts.com/)
- [Visual Studio Code API](https://code.visualstudio.com/api)

**Enjoy the enhanced development experience with the Curvello Theme Extension!** 🚀

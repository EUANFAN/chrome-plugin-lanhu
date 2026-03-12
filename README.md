# @dandelion/chrome-plugin-lanhu

Chrome Extension for Dynamic Theme Variable Conversion in Lanhu Design Platform

## Features

- Automatically converts hardcoded CSS values to CSS theme variables when copying code from Lanhu
- Supports multiple theme types: colors, fonts, font sizes, border radii, shadows, etc.
- Provides "Convert" and "Reset" buttons for easy switching

## Project Structure

```
chrome-plugin-lanhu/
├── images/
│   └── 128.png           # Extension icon
├── pages/
│   ├── popup.html        # Extension popup page
│   └── index.css         # Popup styles
├── scripts/
│   ├── main.js           # Main business logic (content script)
│   └── background.js    # Background service worker
├── manifest.json         # Extension configuration
└── README.md
```

## Installation

1. Open Chrome browser and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked"
4. Select the project folder to install

## Usage

1. After installing the extension, visit Lanhu (lanhuapp.com)
2. Open any design and click "Copy Code"
3. A "Convert" button will appear in the code area
4. Click "Convert" to transform hardcoded values to CSS variables
5. Click "Reset" to restore the original code

## Theme Variables Examples

| Type | Variable Name | Example Value |
|------|---------------|---------------|
| Primary Color | `--dandelion-color-primary` | #ff3627 |
| Title Font Size | `--dandelion-font-size-title-1` | 17px |
| Border Radius | `--dandelion-border-radius-1` | 16px |
| Box Shadow | `--dandelion-box-shadow-1` | 0px 2px 10px 0px rgba(0,0,0,0.08) |

## Contact

`@fanyuanhe`

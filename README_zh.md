# @dandelion/chrome-plugin-lanhu

蓝湖【复制代码区域】动态转换主题变量插件

## 功能说明

- 自动将蓝湖平台复制的 CSS 代码中的硬编码值转换为 CSS 主题变量
- 支持颜色、字体、字号、圆角、阴影等多种主题类型
- 提供"转换"和"还原"按钮，方便随时切换

## 目录结构

```
chrome-plugin-lanhu/
├── images/
│   └── 128.png           # 插件图标
├── pages/
│   ├── popup.html        # 插件弹窗页面
│   └── index.css         # 弹窗样式
├── scripts/
│   ├── main.js           # 主要业务逻辑（content script）
│   └── background.js    # 后台服务 worker
├── manifest.json         # 插件配置
└── README.md
```

## 安装说明

1. 打开 Chrome 浏览器，访问 `chrome://extensions/`
2. 开启右上角的「开发者模式」
3. 点击「加载已解压的扩展程序」
4. 选择本项目文件夹即可安装

## 使用说明

1. 安装插件后，访问蓝湖网站（lanhuapp.com）
2. 打开任意设计稿，点击「复制代码」
3. 代码区域会出现「转换」按钮
4. 点击「转换」即可将硬编码值转换为 CSS 变量
5. 点击「还原」可恢复原始代码

## 主题变量示例

| 类型 | 变量名 | 示例值 |
|------|--------|--------|
| 主色 | `--dandelion-color-primary` | #ff3627 |
| 标题字号 | `--dandelion-font-size-title-1` | 17px |
| 圆角 | `--dandelion-border-radius-1` | 16px |
| 阴影 | `--dandelion-box-shadow-1` | 0px 2px 10px 0px rgba(0,0,0,0.08) |

## 联系人

`@fanyuanhe`

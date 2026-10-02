# 叶乐萱 · YE Lexuan Elise — 个人介绍网站

个人求职介绍网站：中英双语、响应式、纯静态（HTML + CSS + 原生 JS），托管于 GitHub Pages。

在线地址：`https://yelexuan1108-bit.github.io/elise-portfolio/`

## 本地预览

直接双击打开 `index.html` 即可，或：

```bash
python3 -m http.server 8000
# 浏览器访问 http://localhost:8000
```

## 修改内容

网站所有文案都在 **`js/i18n.js`** 里，中英文各一份字典：

- 改文字：编辑 `js/i18n.js` 对应字段
- 改照片：替换 `assets/photo.jpg`
- 改简历附件：替换 `assets/叶乐萱简历.pdf` 和 `assets/YE_Lexuan_CV.pdf`
- 改样式（颜色、字体、间距）：编辑 `css/styles.css`，主题色在文件顶部的 `:root` 变量里

## 发布更新

改完内容后，重新发布：

```bash
cd ~/elise-portfolio
git add -A
git commit -m "更新内容"
git push
```

推送后约 1 分钟，GitHub Pages 自动更新线上站点。

## 结构

```
index.html          页面骨架（分区结构，文案通过 data-i18n 从 i18n.js 注入）
css/styles.css      样式（主题色在 :root）
js/i18n.js          全站中英双语文案字典 —— 改内容只动这里
js/main.js          语言切换 / 列表渲染 / 滚动动画
assets/             照片、中英文简历 PDF、favicon
```

## 隐私提醒

- 网站上只公开了邮箱，未放手机号（如需展示可改 `js/i18n.js` 或 `index.html`）
- 请勿把身份证、签证等证件文件放进本仓库（仓库是公开的）

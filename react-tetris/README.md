### 俄罗斯方块

### 项目笔记

#### 使用 SASS

使用 `npx create-react-app` 创建项目之后，默认是支持 `sass` 的，但是需要自己安装一下对应的插件 `node-sass` 和 `sass-loader`，然后将项目中的 css 文件名称更换成 `.module.scss`，重启项目即可。

> 这里为什么要将文件名规定为 `.module.scss`，这是因为在 CRA 中，需要给样式文件名加上 `.module` 来标识这里是可以使用 CSS Module 的，否则的话我们需要使用其他手段来实现 CSS Module

#### 使用 craco

因为不想将项目配置弹出，所以这里使用 `craco` 来覆盖项目配置（这样做的原因是使用 `npm run eject` 是一个不可逆的操作，在不改动 CRA 中黑盒配置的情况下，使用 `craco` 来叠加一些自定义配置无疑是一个比较友好的选择）。

##### 安装

```bash
npm i -D @craco/craco
```

##### 创建配置文件

在项目根目录中创建配置文件 `craco.config.js`

##### 修改 package.json

将 `scripts` 中的命令修改为 `craco`：

```text
"scripts": {
-  "start": "react-scripts start"
+  "start": "craco start"
-  "build": "react-scripts build"
+  "build": "craco build"
-  "test": "react-scripts test"
+  "test": "craco test"
}
```
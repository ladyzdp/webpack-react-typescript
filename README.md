# 快速开始

项目集成 `webpack 4.0 + Typescript + React` 的基本配置


#### 安装依赖

``` bash
npm install 
```
####启动webpack调试项目

``` bash
npm run dev
```

##第三方工具集成

使用`React Styleguidist`作为项目使用文档生成工具，能快速生成支持React 演示示例，快速编辑Demo的功能
####启动文档生成工具

``` bash
npm run styleguide
```


`docsify`作为文档工具的备选方案，可根据需求使用，此工具对Vue框架相对友好，和React结合使用不太方便，按需使用吧
####启动docsify工具服务

``` bash
npm run docsify
```


`typedoc` 作为Typescript 项目API生成工具是很好用的，配置集成在``tsconfig.json``文件中

####启动typedoc命令生成Typescript项目API文档目录

``` bash
npm run docs
```


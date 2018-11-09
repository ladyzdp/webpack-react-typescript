// loader导出
module.exports = function (source) {
  this.cacheable && this.cacheable();
  // 获取到头部元数据信息
  const { body, attributes: { name, imports: importMap } } = frontMatter(source);
   
  // 默认import react
  let defaultImports = "import React from 'react';\n";
  // 拼接其他import依赖
  if (importMap) {
      defaultImports += `${importMap}\n`;
  }
  // 获取代码片段，并替换为占位符
  const codes = {};
  let html = body.replace(/````([^]+?)````/g, (match, $1, offset) => {
      const id = name + offset;
      codes[id] = $1;
      return `mark-placeholder-${id}`;
  });
  // 将markdown转成html，md对象后面会提到
  html = md.render(html);
  // 将demo再包装一下
  Object.keys(codes).forEach((key) => {
      let code = codes[key];
      html = html.replace(new RegExp(`(<p>)?mark-placeholder-${key}(<\\/p>)?`, 'g'), () => {
          // wrapperDemo、matchComponentName后面会提到
          return wrapperDemo(matchComponentName(code), code, key);
      });
  });
  // 替换未闭合的标签和class
  html = html.replace(/<hr>/g, '<hr />')
      .replace(/<br>/g, '<br />')
      .replace(/class=/g, 'className=');
  // 最终将md文档包装成react组件形式的字符串，wrapModule后面会提到
  return wrapperModule(defaultImports, Object.values(codes).join('\n'), html);
};

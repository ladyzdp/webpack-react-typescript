const path = require('path');
// 菜单配置项
const navBar = [{
    name: 'components',
    content: './src/components/readme.md'
  },
  {
    name: '按钮',
    components: () => ([
      path.resolve(__dirname, './src/components/button', 'index.js'),
      path.resolve(__dirname, './src/components/button-group', 'index.js'),

    ])
  },
  {
    name: '组件 Components',
    components: () => ([
      path.resolve(__dirname, './src/components/flippy', 'index.js'),

    ])
  },
  {
    name: '表单 Forms',
    components: () => ([
      path.resolve(__dirname, './src/components/filter', 'index.js'),
      path.resolve(__dirname, './src/components/form', 'index.js'),
    ])
  },
  {
    name: '布局 Layout',
    sectionDepth: 1,
    sections: [{
        name: "内容",
        components: path.resolve(__dirname, './src/components/container', 'index.js'),
        description: '内容的描述文件'
      },
      {
        name: "栅格",
        components: path.resolve(__dirname, './src/components/grid', 'index.js'),
        description: '内容的描述文件'
      }
    ]
  }
];

module.exports = {
  navBar:navBar
}

// import Atm,{Index} from './apps/index/index';

// let person = new Atm('Mary',17);
// person.getname();
// new Index();
import * as ReactDOM from 'react-dom';
import * as React from 'react';
// import {Regist} from "./apps/login/login";
// import CodeView from 'react-code-view';
// const ReactMarkdown = require('react-markdown');
// import Markdown from 'markdown-to-jsx';
// const mark = require('./apps/index/demo/index.md');
import './apps/index/style/markdown.css';
import { App } from './apps/button/button';
// import MarkNav from 'markdown-navbar';
import './apps/index/style/markdown-navbar.css';

import { Column } from "./components/Column";
import { ConstExportRow } from "./components/ConstExport";
import { Grid } from "./components/Grid";
import { HocComponent } from "./components/HocComponent";
import { PureRow } from "./components/PureRow";
import { Row } from "./components/Row";

export {
    Column,
    ConstExportRow,
    Grid,
    HocComponent,
    PureRow,
    Row,
}
// import ButtonDemo from './apps/index/demo/demo.md';
// class Demo extends React.Component {
//     render() {
//         return <ButtonDemo />
//     }
// }
// console.log(mark)

// class Button extends React.Component {
//   render() {
//     return (
//       // <MarkNav
//       //   // className="article-menu"
//       //   source={mark}
//       //   headingTopOffset={80}
//       // />
//       <CodeView 
//         dependencies={{App}}
//         babelTransformOptions={{ presets: ["react", "es2015", ["env", { "loose": true, "modules": false }], "stage-0"] }}
//         showCode
//         theme="light">
//         {mark}
//       </CodeView>
//     )
//   }
// }

export {App}
// ReactDOM.render(<Button />, document.getElementById('content'));

// ReactDOM.render(
//   <CodeView children={mark}
    
//     // forceBlock={true}
//   />
//   ,
//   document.getElementById('content')
// )
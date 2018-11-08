// console.log($)
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import CodeView from 'react-code-view';

class App extends React.Component {
    render() {
      return (
        <button type="button">
          <span>点击我</span>
        </button>
      );
    }
  }
  
 export default class Btn extends React.component{
   
    render(){
        return(
            <CodeView dependencies={{ App }}
            babelTransformOptions={{ presets: ['stage-0', 'react', 'es2015'] }}
            showCode
            theme="dark">
            {require('../index/demo/index.md')}
          </CodeView>
          )
    }
    // constructor(x,props) {
    //     let ss = 'kk';
    //     // super()
    //     this.props = props;
    //     this.x = ss;
    // }
    // test(){
    //     console.log(this.x)
    // }
}
// export default class Login extends Regist {

//     constructor(el) {
//         super()
//         this.el = el;
//         this.props = []
//         this.x  = '123'

//     }

//     init() {
//         console.log(super.test())
//         // this.el.html('111111111111111111111111111111');
//     }

// }

// let test = new Login($("#content"));
// test.init();
// console.log(test)
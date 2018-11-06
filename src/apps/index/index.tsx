
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './style/index.scss';
// require('./index1'); //使用require引入会自动生成css,import 不会生成
 /**
  * 测试接口
  *
  * @class Index
  */
 class Index {
  constructor() {
    const App = () => {
      return (
        <div>
          <h3>Our Application Is Alive</h3>
          <p>This isn’t reality. This — is fantasy.</p>
          <p>Yes I am quoting Star Trek I cant help it.</p>
        </div>
      );
    }
    ReactDOM.render(<App />, document.getElementById('content'));
  }
}

/**
 *导出模块测试
 *
 * @export
 * @class Atm
 */
export default class Atm {
  name: string;
  age: number;
  /**
   *Creates an instance of Atm. 
   [[include:app-bar.md]]
   * @param {string} name 名称
   * @param {number} age 年龄
   * @memberof Atm
   */
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  /**
   *打印名称
   *
   * @memberof Atm
   */
  getname(){
    console.log(this.age);
  }
}

export {Index};
// console.log(react);
// console.log(React);

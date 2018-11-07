
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './style/index.scss';
// import CodeView from 'react-code-view';
import { Button } from '../button/button';


// Button();
/**
 * 测试接口
 * @author huangzz
 */
// console.log(CodeView)
class Index {
  constructor() {
    const App = () => {
      return (
        <button type="button">
          <span>点击我</span>
        </button>
      );
    }
    ReactDOM.render(<App />, document.getElementById('content'));
  }
}

/**
 *导出模块测试
 *
 */
export default class Atm {

  /**
   *姓名
   *
   */
  name: string;

  /**
   *年龄
   */
  age: number;
  /**
   * ## 嵌入markdown 文档测试 
   [[include:README.md]]
   * @param  name 名称
   * @param  age 年龄
   * @see Atm
   */
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  /**
   *打印名称
   *
   * @serialData Atm
   */
  getname() {
    console.log(this.age);
  }
}

export { Index };
// console.log(react);
// console.log(React);

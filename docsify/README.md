# typeScript 备注规范


| 名称        | 作用       | 备注                                                                |
| ----------- | ---------- | ------------------------------------------------------------------- |
| @param      | 参数描述   | 仅供类、接口、方法注释时使用。同一个注释块可同时出现多个param描述。 |
| @return      | 返回描述   | 仅供方法注释时使用。除void方法外其它所有方法必须有一个return描述。  |
| @throw      | 异常描述   | 零到多个。                                                          |
| @exception  | 异常描述   | 零到多个。                                                          |
| @author     | 作者       | 类和接口注释中必须有。可有零到多个。                                |
| @version    | 版本描述   | 类和接口注释中必须有。零或一个。                                    |
| @see        | 参考描述   | 可有零到多个。                                                      |
| @since      | 起始版本   | 只有一个。                                                          |
| @serial     | 序列化描述 | 或@serialField或@serialData，可有多个                               |
| @deprecated | 废除标志   | 最多一个。                                                          |



## 示例代码

[filename](./react.js ':include :type=code')


```jsx
/*react*/
import App from '../src/apps/button/button.tsx';
<script>

  export default class Application extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        color: 'blue'
      }
      this.globalVariable = globalVariable
    }
    render() {
      return (
        <div>
          <div className='wrapper' ref={el => this.el = el}>
            <div>
            <p className='author'>author: {this.globalVariable}</p>
            <button style={{color: this.state.color}} className='test' onClick={e => {alert('author: ' + this.globalVariable); this.setState({color: 'red'})}}>test</button>
            </div>
          </div>
        </div>
      )
    }
  }
</script>
```


```jsx
// /*react*/
// import CodeView from 'react-code-view';
// import 'react-code-view/lib/less/index.less';

// import { Button } from 'rsuite';


// <CodeView dependencies={{ Button }} >
//   {require('./example.md')}
// </CodeView>
// <script src="../src/index.tsx">

```


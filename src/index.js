// import _ from 'lodash';
// require('./index.css');
// import './index.css';
// import './index.scss';
// import './index.scss';
require('./index.scss');//使用require引入会自动生成css,import 不会生成
// import Miao from './img/miao.jpg';//引入图片
// import Datas from './data/data.xml';//引入数据
import printMe from './print';
import { cube} from './math.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}
function complate() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    // element.innerHTML = _.join(['hello', 'webpack'], "<span class='icon-home'></span>", `${cube(5)}`);
    element.innerHTML = join(['hello', 'webpack'], "<span class='icon-home'></span>", `${cube(5)}`);
    btn.innerHTML = '点我呀';
    btn.onclick = printMe;
    element.appendChild(btn);
    console.log($.trim(' n你好webpack '))
    // console.log(Miao)
    // console.log(Datas)
    return element;
}
let compile = complate();
document.body.appendChild(compile);

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the 更新。。。')
        // printMe()
        document.body.removeChild(compile);
        compile = component(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(compile);
    })
}
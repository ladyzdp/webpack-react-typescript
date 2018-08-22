var laydate = require("./laydate/laydate.js");
require('./index.scss'); //使用require引入会自动生成css,import 不会生成
// import Miao from './img/miao.jpg';//引入图片
// import Datas from './data/data.xml';//引入数据
import printMe from './print';
import {
    cube
} from './math.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function complate() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = join(['hello', 'webpack'], "<input name='mydate' id='mydate'>", `${cube(5)}`);
    btn.innerHTML = '点我呀';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}
let compile = complate();
document.body.appendChild(compile);
laydate.render({
    elem: '#mydate'
});
console.log(laydate)

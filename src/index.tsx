// import React from 'react';
// import ReactDOM from 'react-dom';
import Atm,{Index} from './apps/index/index';
require('./index1'); //使用require引入会自动生成css,import 不会生成
let person = new Atm('Mary',17);
person.getname();
new Index();

// ReactDOM.render( < Comment  name="mary"  / > , document.getElementById('content'));
// var laydate = require("./assets/lib/laydate/laydate");


// // import Miao from './img/miao.jpg';//引入图片
// // import Datas from './data/data.xml';//引入数据
// import printMe from './print';
// import Login from './apps/login/login';
// import {
//     cube
// } from './math.js';

// if (process.env.NODE_ENV !== 'production') {
//     console.log('Looks like we are in development mode!');
// }

// function complate() {
//     var element = document.createElement('div');
//     var btn = document.createElement('button');
//     element.innerHTML = join(['hello', 'webpack'], "<input name='mydate' id='mydate'>", `${cube(5)}`);
//     btn.innerHTML = '点我呀';
//     btn.onclick = printMe;
//     element.appendChild(btn);
//     return element;
// }
// let compile = complate();

// function getJson() {
//     $.ajax({
//         type: "GET",
//         url: "mock/5b7fbc808d7a895f7f3ac462/ss",
//         success: function (response) {
//             console.log(response)
//         }
//     });
// }
// getJson();

// document.body.appendChild(compile);

// laydate.render({
//     elem: '#mydate'
// });

// let login  =  new Login();
// console.log(login)
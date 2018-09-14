// console.log($)

class Regist {
   
    constructor(x,props) {
        let ss = 'kk';
        // super()
        this.props = props;
        this.x = ss;
    }
    test(){
        console.log(this.x)
    }
}
export default class Login extends Regist {

    constructor(el) {
        super()
        this.el = el;
        this.props = []
        this.x  = '123'

    }

    init() {
        console.log(super.test())
        // this.el.html('111111111111111111111111111111');
    }

}

let test = new Login($("#content"));
test.init();
console.log(test)
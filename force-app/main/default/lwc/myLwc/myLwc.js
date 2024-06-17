import { LightningElement } from 'lwc';

export default class MyLwc extends LightningElement {

    constructor() {
        super()

        this.myMethod()
        this.myMethod('lwc')
        this.myMethod('lwc', 'java','dotnet')
        this.myMethod('lwc', 'java')

    }

    myMethod(param1, param2='default value' ) {


        console.log('param1 ', param1)
        console.log('param2 ', param2)
    }
}
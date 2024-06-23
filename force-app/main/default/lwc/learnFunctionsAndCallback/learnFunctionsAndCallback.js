import { LightningElement } from 'lwc'

export default class LearnFunctionsAndCallback extends LightningElement {

    myClassProp = 'this is class variable'

    myObject = {
        myObjProp: 'this is an object value'
    }


    connectedCallback() {

        this.myMethod(result => {
            console.log('result ', result)
        })
    }


    myMethod(myClassbackfunction) {

        myClassbackfunction('This is the result')
    }
}

function myMethod(param1, param2) {

}

const myArrowMethod = (param1, param2) => {

}
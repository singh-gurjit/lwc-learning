import { LightningElement } from 'lwc'
import methodName from '@salesforce/apex/className.methodName'

export default class LearnArrowMethodsAndPromise extends LightningElement {

    myClassProp = 'This is a class property'

    connectedCallback() {
        this.myMethod()
    }

    consumePromiseUsingThenCatch() {
        methodName()
            .then(result => {

            })
            .catch(error => {

            })
    }

    async consumePromiseUsingAsyncAwait() {
        const result  = await methodName()
    }

    myMethod() {

        this.myAnotherMethod((result) => {
            console.log('this', result)
        })
    }

    myAnotherMethod(myParamFunction) {
        myParamFunction('This method is completed')
    }

    /* 
    Promise can be consumed in 2 ways
    1. then catch block
    2. async await
    */

}

function myFunction() {

}

const myArrowMethod = result => {

}





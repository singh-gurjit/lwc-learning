import { LightningElement } from 'lwc'

let myLetvariable = 'This is global let'
var myVarVariable = 'This is global var'
const myConst = 'This is global constant'
//myConst = 'some different value' // incorrect syntax const can not be modified.

export default class HelloWorld extends LightningElement {

    /*  let myCLasslet = 'This is class let'
     var myCLassVar = 'This is class var' */
    //Above is not a valid way to declare variables
    myClassVariable = 'This is the class variable'

    connectedCallback() {

        //myMethod() //this is incorrect syntax to call method of a class
        // console.log('myClassVariable', myClassVariable) // cannot read class level variables without this keyword 

        console.log('myClassVariable', this.myClassVariable)
        this.myMethod()
        console.log('myAnotherClassLevelVariable ', this.myAnotherClassLevelVariable)
    }

    myMethod() {

        console.log('myMethodVar ', myMethodVar)

        let myMethodLet = 'My Method let'
        var myMethodVar = 'My Method var'
        const myMethodConst = 'My method const'

        console.log('myMethodLet ', myMethodLet)
        console.log('myMethodConst ', myMethodConst)

        this.myAnotherClassLevelVariable = 'I am delared within the method'
    }

}
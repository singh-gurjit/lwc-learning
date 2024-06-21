import { LightningElement, api } from 'lwc';

export default class LearnLifeCycleHooks extends LightningElement {

    counter = 0
    showChildComponent

    //Before the DOM content loads
    constructor() {
        super()
        console.log('I am constructor')
    }

    //After the DOM content loaded 
    connectedCallback() {
        console.log('I am connected callback')
    }

    //On every state change or re render
    //Anything changes on the page
    renderedCallback() {
        console.log('I am rendered callback')
    }

    //Page remove from the DOM
    disconnectedCallback() {
        console.log('I am disconnected callback')
    }

    //To handle the error coming from the child components
    // errorCallback(error, stack) {
    //     console.log('error', error)
    //     console.log('stack', stack)
    //     console.log('I am error callback')
    // }

    handleButtonClick() {
        this.showChildComponent = !this.showChildComponent
    }
}
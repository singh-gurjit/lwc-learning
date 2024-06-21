import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {

    /*
    1. constructor (DOM is not loaded)
    2. Assiging values to pubic props 
    3. DOM content loaded connectedcallbak
    4. rendered callback (Called on every state changes)
    5. Once the DOM content is removed from the DOM disconnectedCallback will be called
    
     */

    @api prop1
    @api prop2

    constructor() {
        super()
        console.log('I am child constructor')
    }

    connectedCallback() {
        throw new Error('Woopsie!')

        console.log('I am child connected callback')
    }

    renderedCallback() {
        console.log('I am child rendered callback')
    }

    disconnectedCallback() {
        console.log('I am child disconnected callback')
    }
}
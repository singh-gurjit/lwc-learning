import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {

    @api prop1
    @api prop2

    constructor() {
        super()
        console.log('I am child constructor')
    }

    connectedCallback() {

        console.log('I am child connected callback')
        throw new Error('Woopsie!')

    }

    renderedCallback() {
        console.log('I am child rendered callback')
    }

    disconnectedCallback() {
        console.log('I am child disconnected callback')
    }
}
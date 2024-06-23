import { LightningElement } from 'lwc'
import getAccountsArray from '@salesforce/apex/LearnImperativeApexCallingController.getAccountsArray'

export default class LearnImperativeApexCalling extends LightningElement {


    connectedCallback() {
        //this.promiseUsingThenCatch()
        this.promiseUsingAsyncAwait()
    }

    /* There are 2 ways to consume promise
    1. then catch block
    2. async await    
    */

    promiseUsingThenCatch() {
        console.log('This is the start line')
        getAccountsArray()
            .then(result => {
                console.log('result ', result)
            })
            .catch(error => {
                console.log('error', error)
                console.error('error', error)
            })

        console.log('This is the end line')
    }

    async promiseUsingAsyncAwait() {

        console.log('This is the start line')

        try {
            const result = await getAccountsArray()
            console.log('result ', result)

        } catch (error) {
            console.log('error', error)
            console.error('error', error)
        }
        console.log('This is the end line')
    }





}
import { LightningElement, wire } from 'lwc'
import getAccountsArray from '@salesforce/apex/LearnWireMethodController.getAccountsArray'
import getAccountsArrayFromName from '@salesforce/apex/LearnWireMethodController.getAccountsArrayFromName'

export default class LearnWireMethod extends LightningElement {

    // 1.Wire caches the data
    /* 
    2. method paramters of wire are reactive
    if the value of the variable will change it will reexecute the whole wire method
    3. refreshApex
     */


    @wire(getAccountsArray)
    getAccountsArrayHanlder(result) {

        const { data, error } = result
        // const data = result.data

        if (data) {
            // console.log('data', data)
        } else if (error) {
            console.log('error', error)
        }
    }

    @wire(getAccountsArrayFromName, { name: 'Uni' })
    getAccountsArrayFromNamehandler(result) {
        const { data, error } = result
        // const data = result.data

        if (data) {
            console.log('data', data)
        } else if (error) {
            console.log('error', error)
        }
    }
}
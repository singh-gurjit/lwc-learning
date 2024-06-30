import { LightningElement, wire, track } from 'lwc'
import getAccountsArray from '@salesforce/apex/AccountsAppController.getAccountsArray'

export default class AccountsApp extends LightningElement {

    @track accountsArray = []

    @wire(getAccountsArray)
    getAccountsArrayHandler(result) {
        const { data, error } = result
        if (data) {
           this.accountsArray = data
        } else if (error) {
            console.log('There is an error', JSON.stringify(error))
            console.error('There is an error', error)
        }
    }
}
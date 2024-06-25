import { LightningElement, wire } from 'lwc'
import { getRecords } from 'lightning/uiRecordApi'
import NAME_NAME from '@salesforce/schema/Contact.Name'
import EMAIL_NAME from '@salesforce/schema/Contact.Email'

export default class UiRecordApiGetRecords extends LightningElement {

    @wire(getRecords, { records: [{ recordIds: ['003GC00003yxORfYAM', '003GC00003yxOReYAM'], fields: [NAME_NAME, EMAIL_NAME] }] })
    getContactRecords(result) {
        const { data, error } = result
        if (data) {
            console.log('data ', JSON.stringify(data))
            console.log('Name ', data.results[0].result.fields.Email.value)
        } else if (error) {
            console.log('There is an error', JSON.stringify(error))
            console.error('There is an error', error)
        }
    }
}
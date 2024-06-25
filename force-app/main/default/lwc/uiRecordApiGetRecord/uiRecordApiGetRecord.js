import { LightningElement, wire } from 'lwc'
import { getRecord } from 'lightning/uiRecordApi'
import NAME_FIELD from '@salesforce/schema/Contact.Name'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'

export default class UiRecordApiGetRecord extends LightningElement {

    @wire(getRecord, { recordId: '003GC00003yxOReYAM', fields: [NAME_FIELD, EMAIL_FIELD] })
    getContactRecord(result) {

        const { data, error } = result

        if (data) {
            console.log('data ', JSON.stringify(data))
            console.log('email ', data.fields.Email.value)
            console.log('name ', data.fields.Name.value)
        } else if (error) {
            console.log('data ', error)
        }
    }
}
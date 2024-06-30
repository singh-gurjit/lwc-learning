import { LightningElement } from 'lwc'
import { updateRecord, deleteRecord } from 'lightning/uiRecordApi'
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName'

export default class UiRecordApiUpdateAndDelete extends LightningElement {

    connectedCallback() {

        this.deleteContact()

    }

    async updateContactRecord() {
        const fields = {
            Id: '003GC000040dNnQYAU',
            [LASTNAME_FIELD.fieldApiName]: 'Learn update record ui api'
        }

        try {
            const contact = await updateRecord({ fields })
            console.log('contact ', contact)
        } catch (error) {
            console.error('There is an error', error)
        }
    }

    async deleteContact() {

        try {
            await deleteRecord('003GC000040dNnQYAU')
            console.log('record is deleted')
        } catch (error) {
            console.error('There is an error', error)
        }

    }
}
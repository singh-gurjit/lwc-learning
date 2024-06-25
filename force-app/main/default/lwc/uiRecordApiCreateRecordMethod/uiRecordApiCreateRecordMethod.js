import { LightningElement } from 'lwc'
import { createRecord } from 'lightning/uiRecordApi'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName'

export default class UiRecordApiCreateRecordMethod extends LightningElement {


    async connectedCallback() {

        const fields = {
            [LASTNAME_FIELD.fieldApiName]: 'Learn create record ui api'
        }

        const recordInput = { apiName: CONTACT_OBJECT.objectApiName, fields }

        try {
            const contact = await createRecord(recordInput)
            console.log('contact ', contact)
        } catch (error) {
            console.error('There is an error', error)
        }
    }
}
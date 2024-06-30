public with sharing class AccountsAppController {
    
    @AuraEnabled(cacheable = true)
    public static Account[] getAccountsArray() {
        return [SELECT id, Name, Phone FROM Account LIMIT 50];
    }
}
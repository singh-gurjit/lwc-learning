public with sharing class LearnImperativeApexCallingController {
    
    @AuraEnabled
    public static Account[] getAccountsArray() {
        return [SELECT id, Name FROM Account];
    }
}
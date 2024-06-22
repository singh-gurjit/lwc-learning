/**
 * @description Learn wire method in LWC
 * @author Gurjit Singh
 * @date Friday-June-21-2024
 **/

public with sharing class LearnWireMethodController {

    @AuraEnabled(cacheable = true)
    public static Account[] getAccountsArray() {
        return [SELECT id, Name FROM Account];
    }

    @AuraEnabled(cacheable = true)
    public static Account[] getAccountsArrayFromName(String name) {
        return [SELECT id, Name FROM Account WHERE Name like: '%'+name+'%'];
    }
}
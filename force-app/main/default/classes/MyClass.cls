public with sharing class MyClass {

    // public MyClass() {

    //     //This is an incorrect syntax
    //     // mymethod(); 
    //     //mymethod('Learning'); 
    //     mymethod('Learning', 'LWC'); 

    //     //This is an incorrect syntax
    //     //mymethod('Learning', 'LWC', 'javascript'); 
    // }

    public void mymethod(String param1, string param2) {

        System.debug('param1 '+ param1);
        System.debug('param2 '+ param2);
    }    
}
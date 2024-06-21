import { LightningElement } from 'lwc';

export default class LearnDataTypesInJs extends LightningElement {

    //Primitve data types

    //String
    myString = 'This is string'
    myString2 = "This is another string"

    //Number
    myNumebr = 123.456

    //Boolean

    myBoolean = true // or it could have false

    // undefined
    // null
    // NaN

    //Symbol
    mySymbol = Symbol('this is my symbol')

    //Non-primitive data types

    //Array or list 
    myArray  = []
    myArray2  = new Array()

    //Set
    mySet = new Set()
    myWeakSet = new WeatkSet()

    //Map
    myMap = new Map()
    myWeakMap = new WeakMap()

    //Object 
    myObject = {}
    myObject2 = new Object()

}
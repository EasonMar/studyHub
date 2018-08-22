/**
 * Our First Interface
 */ 
// The easiest way to see how interfaces work is to start with a simple example:
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "lable value1" };
printLabel(myObj);

// The type-checker checks the call to printLabel. 
// The printLabel function has a single parameter that requires that the object passed in has a property called label of type string. 
// Notice that our object actually has more properties than this, 
// but the compiler only checks that at least the ones required are present and match the types required. 
// There are some cases where TypeScript isn’t as lenient, which we’ll cover in a bit.

// We can write the same example again, 
// this time using an interface to describe the requirement of having the label property that is a string:

interface LabelledValue {
    label: string;
}

function printLabelWithInterface(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObjWithInterface = {size: 10, label: "lable value2"};
printLabelWithInterface(myObjWithInterface);
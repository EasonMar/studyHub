// The easiest way to see how interfaces work is to start with a simple example:
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// We can write the same example again, this time using an interface to describe the requirement of having the label property that is a string:

interface LabelledValue {
    label: string;
}

function printLabelWithInterface(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObjWithInterface = {size: 10, label: "Size 10 Object"};
printLabelWithInterface(myObjWithInterface);
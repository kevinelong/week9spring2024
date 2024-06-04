let binary_data = [
    { name: "kevin", age: 56 }, 
    { name: "kay", age: 59 }
];
console.log(typeof binary_data);
console.log(binary_data.length);

freeze_dried = JSON.stringify(binary_data,undefined, 4);
//freeze_dried = JSON.stringify(binary_data);
console.log(typeof freeze_dried);
console.log(freeze_dried.length);
console.log(freeze_dried);

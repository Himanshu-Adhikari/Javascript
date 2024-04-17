//Strings 
var name = "Himanshu";
console.log(name.endsWith("s")); // Checks if the string ends with "s"
console.log(name.includes("ans")); // Checks if the string contains "ans"
console.log(name.toUpperCase()); // Converts the string to uppercase

//Maps
var mp = new Map();
mp[2] = 0; // Setting a property in the map with key 2 and value 0
mp[2] = 1; // Overwriting the previous value with 1
mp[2]++; // Incrementing the valu//Strings 
var name = "Himanshu";
console.log(name.endsWith("s")); // Checks if the string ends with "s"
console.log(name.includes("ans")); // Checks if the string contains "ans"
console.log(name.toUpperCase()); // Converts the string to uppercase

//Maps
var mp = new Map();
mp.set(2, 0); // Set the value associated with key 2 to 0
mp.set(2, 1); // Update the value associated with key 2 to 1
mp.set(2, mp.get(2) + 1); // Increment the value associated with key 2
mp.set(1, 123); // Set the value associated with key 1 to 123

console.log(mp.get(2)); // Logs the value associated with key 2

// Iterating over the values of the map
for (let value of mp.values()) {
    console.log(`Value is ${value}`);
}
mp[1] = 123; // Setting a property in the map with key 1 and value 123
console.log(mp[2]); // Logs the value associated with key 2
// console.log(mp); // Logs the entire map
for (let k of mp.values()) { // Iterates over the values of the map
    console.log(`key is ${k}`); // Logs each value
}

for (let [a,b] of mp){
    console.log(a+"  "+b);
}

//Forof loops gives key and then value
//ForEach loops value and key
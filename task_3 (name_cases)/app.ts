/* Task # 3 : Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase*/;

const personName = "Hafi sHaikh"

console.log(`Name in Upppercase : ${personName.toUpperCase()}`);
console.log(`Name in Lowercase ; ${personName.toLowerCase()}`);

// for title case :
let step1 = personName.split(` `);

let step2 = step1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());

let  step3 = step2.join(` `);

console.log(`Name in title case : ${step3}`);

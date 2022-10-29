console.log("Hello World");

let poorCountry = ['Bangladesh', 'Sri Lanka'];
console.log(poorCountry);

let richCountry = ['USA', 'Canada', 'Germany'];
console.log(richCountry);

let richCountry_1 = [...poorCountry, ...richCountry];
console.log(richCountry_1);

richCountry.push(poorCountry);
console.log(richCountry);
const accountID = 123444
let userName = 'Atul'
var password = '123454'
city = "Roorkee"
let x;
// accountID = 123  Const can't be modified

// console.log(accountID);

userName = 'Atul Kumar'
password = '543321'
city = 'Pune'

/*
avoid using var to define a variable because of its issue with the block scope and functional scope
*/

console.table([accountID, userName, password, city, x])

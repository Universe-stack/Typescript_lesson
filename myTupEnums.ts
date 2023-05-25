//const user3: (string|number)[]= [1,"hc"]

//In tuples, the order of the array matters 
let user3: [string,number,boolean]
user3 = ["hc", 131, true]

let rgb: [number, number, number] = [1,23,12]


type Tuser=[number,string];
const newUser: Tuser=[112,"n@n"] //const newUser of type Tuser
newUser[0]=12

//even though tuples have restrictions based on the number of elements that they are configured-
//to allow, other elements can be added to them in TS using array methods such as push()

 newUser.push(true)
import { type } from "os";

const User ={
    name: "Justice",
    email: "hsjn@gmail.com",
    isActive :true
}

function createUser({name: string, isPaid:boolean}){}

createUser({name: "Justicce", isPaid: false})

//function name, parameter, type and definition
function createCourse():{name: string, price:number}{
    return {name:"react js", price:485}
}



//TYPE ALIASES
type User1 ={
    name: string;
    email: string;
    isActive:boolean; 
}

function createUser1(user:User1):User1{
    return{name: "fani", email:"jbajd@gmail", isActive:true}
}

createUser1({name: "fani", email:"jbajd@gmail", isActive:true})


type MyUser = {
    readonly _id: string;
    name: string; 
    email:string;
    isActive:boolean;
    creditcardDetails?:number
}

// creditcarddetails is optional, reason for the ?

let myUser1: MyUser={
    _id: "1234556",
    name: "h",
    email: "h@h.com",
    isActive: false
}

//you can modify each user
myUser1.email ="Jsu@togo"
//myUser1._id="45923";


type cardNumber ={
    cardnumer : string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}




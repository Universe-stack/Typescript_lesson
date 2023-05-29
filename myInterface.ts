
interface Customer {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?:string,
    startTrial: ()=>string,
    beginTrial():number,
    getCoupon(couponname:string,value:number):number
}

// you can actually create a duplicate interface to add more elements mising in the initial one.
//this is called the- Reopening of the interface

interface Customer {
    githubToken?: string
}

//INHERITANCE IN TYPESCRIPT ---extends

interface Administrator extends Customer {
    role: "admin" | "ta"|"learner",
}
//const hitesh: Customer={dbId: 22,email:"h@h",userId:2342, startTrial(){return ""}, beginTrial(){ return 3}, getCoupon:(name:"Justicew", value:12)=>{return 10}, githubToken: "github"}
const hitesh: Administrator={dbId: 22,email:"h@h",userId:2342, startTrial(){return ""}, beginTrial(){ return 3}, getCoupon:(name:"Justicew", value:12)=>{return 10}, githubToken: "github", role:"admin"}

interface IceCream {
    flavor?:string;
    scoops:number;
    instructions?:string
}

interface Sundae extends IceCream{
    sauce:'chocolate'|'caramel'| 'cranberry';
    nuts?:boolean;
    instructions?:string;
}

let myIceCream:Sundae = {
    flavor:"vanilla",
    scoops:12,
    sauce:'cranberry',
    nuts:true
}

console.log(myIceCream.flavor);

let tooManyScops=(dessert:Sundae)=>{
    if(dessert.scoops>56) {
        return dessert.scoops + 'is too many scoops'
    }else {
        return 'Your order would be ready soon';
    }
}

console.log(tooManyScops({flavor:'Vanilla',scoops:23,sauce:'chocolate'}))


//indexable types

interface IceCreamArray {
    [index:number]:string
}

let myIceCreamArray:IceCreamArray;
myIceCreamArray= ['choco','vanilla','cranberry'];
let myStr:string=myIceCreamArray[0]
console.log(myStr)
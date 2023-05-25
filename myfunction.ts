function addTwo(num:number,name:string){
    return num+2 + name
}

addTwo(5,"Fiale");

let loginUser = (name:string, email:string,age:number=30)=>{

}


//the number ensures that the function returns a number type result.
function subtractTwo(num:number):number{
    return "hello";
}

const getHello=(word:string):string=>{
    return ""
}

function getValue(myVal:number):boolean|string{
    if(myVal>5){
        return true;
    }
    return "200 OK";
}

const cars=["Nissan", "Toyota","Mercedes","Lamorgini",22,true]
cars.map(car => {
    return `car is ${car}`
})

//when your function is not returning any value, set the data type to void
function consoleError(errmsg:string):void{
    console.log(errmsg)
}

//handling errors: never type represents values which are never observed. In a return type,
//this means the fn throws an exception or terminates execution of the program
function handleError(errmsg:string):never{
    throw new Error(errmsg)
}


loginUser("h","h@h.com")



//combination of two or more data types that you can combine into a string or array

let score:number| string | []  = 33

type Userdata = {
    name: string;
    id: number;
}

type Admin ={
    username: string;
    id: number
}

let Justice: Userdata|Admin ={name:"justice", id: 344}
Justice ={username:"langford", id:765}

const data: number[] = [1,2,3]
const data2:string[] = ["1","2","3"]
const data3:(string|number)[]= ["1","2",3]

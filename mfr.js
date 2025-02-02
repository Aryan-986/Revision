let array = [1, 13, 5, 7, 11];
// let newarray = [];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     newarray.push(element**2);
// }

// console.log(newarray);

//short method this is why we use map
let newarray = array.map((e)=>{
    return e **2
})

console.log(newarray)


//filter functions
const greaterThanSeven = (e)=> {
    if(e>7){
        return true
    }
    return false
}
console.log(newarray.filter(greaterThanSeven))

let array2 = [1,2,3,4,5,6]

const yellow = (a,b)=>{
    return a+b
}

console.log(array2.reduce(yellow))

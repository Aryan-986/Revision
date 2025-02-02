//trying to create buisness name generator by combining list of adjectives and shop name 
//and another world

// Adjectives:
// Crazy
// Amazing
// Fire

// Shop name: 
// Engine 
// foods 
// Garmets 

// Another Word: 
// Bros 
// Limited 
// Hub 

let random = Math.random()
let first, second, third;
//0, 0.33, 0.66, 1
if(random<0.33){
    first= "crazy"
}
else if (random<0.66 && random>=-0.33){
    first="Amazing"
}
else{
    first="fire"
}

//generating the second word
 random = Math.random()
if(random<0.33){
    second = "engine"
}
else if (random<0.66 && random>=-0.33){
    second ="foods"
}
else{
    second ="garmets"
}

//generating the third word
random = Math.random()
if(random<0.33){
    third = "bros"
}
else if (random<0.66 && random>=-0.33){
    third="limited"
}
else{
    third="hub"
}

console.log(`${first} ${second} ${third}`)
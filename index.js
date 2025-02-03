console.log("AryanJungKarki")

//  let boxes = document.getElementsByClassName("box")
//  console.log(boxes)

//  boxes[3].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red";

console.log(document.querySelectorAll(".box"))

function getRandomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let index = 0; index < 6; index++) {
        // const element = array[index];
        color += letters[Math.floor(Math.random() * 16)];
        
    }
    return color;
}

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = getRandomColor(); //Asign a random background color
    e.style.color = getRandomColor();
});

//given 5 boxes, assign a random color and a random background to each box using DOM concepts
console.log("AryanJungKarki")

//  let boxes = document.getElementsByClassName("box")
//  console.log(boxes)

//  boxes[3].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red";

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "green"
})
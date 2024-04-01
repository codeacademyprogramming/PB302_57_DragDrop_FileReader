let boxes = document.querySelectorAll(".box")

let mainBox = document.querySelector(".main-box")

boxes.forEach((elem,index)=>{elem.addEventListener("dragstart",function(e){
    console.log("box is dragged")
    e.dataTransfer.setData("data-id",elem.getAttribute("data-id"))
})})

mainBox.addEventListener("dragover",function(e){
    e.preventDefault();
})

mainBox.addEventListener("drop",function(e){   
    console.log(e.dataTransfer.files)
    e.preventDefault(); 
    let dataId = e.dataTransfer.getData("data-id");
    let draggedBox = document.querySelector(`[data-id='${dataId}']`)
    mainBox.appendChild(draggedBox)
    console.log(e.dataTransfer.getData("index"))
})
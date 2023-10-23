// $('.example .custom.button')
//   .popup({
//     popup : $('.custom.popup'),
//     on    : 'click'
//   })
// ;

function layout(){
    var box=document.getElementById('box');
    box.innerHTML+='<div id="box" style=" border: 1px solid gray; width: 555px; height: 500px; float: left;"></div><div id="box" style=" border: 1px solid gray; width: 555px; height: 500px;"></div>';
  }
  
  function label(){
    var lform=document.getElementById('lform');
    lform.innerHTML="<form onsubmit='lform(); return false' style='margin: auto; float:left; border: 1px solid black; width: 300px; height: auto'>  <label for='name'>Name</label>  <input id='name' type='text'><br>  <label for='type'>Type</label><input type='text' name='type' id='type'> <br><input type='submit'>  </form>"
  }
  
  function lform(){
    var name=document.getElementById('name').value;
    var type=document.getElementById('type').value;
    var box=document.getElementById('box');
    var lform=document.getElementById('lform');
    box.innerHTML+='<br><div class="element" id="element"><'+type+'>'+name+'<'+type+'>'+'</div>';
    // box1.innerHTML='<div id="mydiv" style=" position: absolute;    z-index: 9;    background-color: #f1f1f1;    text-align: center;    border: 1px solid #d3d3d3;">    <div id="mydivheader" style="padding: 10px;    cursor: move;    z-index: 10;    background-color: #2196F3;    color: #fff; ">Click here to move</div>    <p>Move</p>    <p>this</p>    <p>DIV</p>  </div>'
    lform.innerHTML="";
  }
  
  function clear(){
    var box=document.getElementById('box');
    box.innerHTML="";
    location.reload();
    
  }
  
  function preview(){
    const temp=document.getElementById('box');
    const preview=document.getElementById('preview');
    preview.innerhtml=temp;
  }
  // -------------------------------------
  
  // var isDragging = false;
  //   var offsetX, offsetY;
  
  //   var dragElement = document.getElementById("dragElement");
  
  //   dragElement.addEventListener("dragstart", function(event) {
  //     event.dataTransfer.setData("text/plain", "Drag started");
  //     offsetX = event.clientX - dragElement.getBoundingClientRect().left;
  //     offsetY = event.clientY - dragElement.getBoundingClientRect().top;
  //   });
  
  //   dragElement.addEventListener("drag", function(event) {
  //     isDragging = true;
  //     event.preventDefault();
  //   });
  
  //   document.addEventListener("dragover", function(event) {
  //     if (isDragging) {
  //       event.preventDefault();
  //       dragElement.style.left = (event.clientX - offsetX) + "px";
  //       dragElement.style.top = (event.clientY - offsetY) + "px";
  //     }
  //   });
  
  //   document.addEventListener("dragend", function(event) {
  //     isDragging = false;
  //   });
  
  
    // draging--------------
  
    const createButton = document.getElementById("createButton");
  const elementContainer = document.getElementById("elementContainer");

  createButton.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text/plain", "Create Element");
  });

  elementContainer.addEventListener("dragover", function(event) {
    event.preventDefault();
  });

  elementContainer.addEventListener("drop", function(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    if (data === "Create Element") {
      const newElement = document.createElement("div");
      newElement.className = "draggable";
      newElement.textContent = "New Element";
      newElement.draggable = true;
      elementContainer.appendChild(newElement);
    }
  });
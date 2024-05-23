// console.log("hello");

// var images =document.getElementsByTagName("img");
// console.log(images);
// var an =document.getElementsByTagName("a");
// console.log(an);

// var heading =document.getElementById("heading1");
// console.log(heading);
// console.log(heading.innerHTML);
// console.log(heading.nodeType);

// var main_content = document.getElementById("main_content");
// main_content.setAttribute('align','right');

// var heading =document.getElementById('heading1');
// heading.innerHTML= "I'm a Legend";

// var main_content = document.getElementById("main_content");
// var new_h=document.createElement('h2');
// var new_p=document.createElement('p');

// new_h.innerHTML= "Welcome to NYS";
// new_p.innerHTML= "This is a sample Example";

// main_content.appendChild(new_h);
// main_content.appendChild(new_p);

// var btn= document.getElementById('myBtn');
// btn.onclick= function()
// {
//     alert('Hello');
//     alert('bye');
// };

// function runme()
// {
//     alert('simple message');
// }
// setTimeout(runme,3000);

// function runme(){
//     console.log('hi');
// }
// setInterval(runme,1000);

// var u_name=document.myform.uname;
// var u_msg=document.myform.uemail;

// var username= "sathik";
// var password= "123";
// function runme(){
//     if(u_name.value== username && u_msg.value == password)
//     {
//         console.log('success');
//     }
//     else
//     {
//         console.log('failure');
//     }
// }

var u_name=document.myform.uname;
var msg=document.getElementById('msg');

function runme(){
    if(u_name.value.length < 6){
        msg.innerHTML="need more character";
        msg.style.color='red';
    }
    else if(u_name.value.length ==6)
    {
        msg.innerHTML="ok";
        msg.style.color='green';
    }
    else if(u_name.value.length >6)
    {
        msg.innerHTML="limit had reached";
        msg.style.color='red';
    }
}
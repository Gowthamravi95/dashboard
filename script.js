

let li=document.querySelectorAll("nav")[0].classList;
 let lii=document.querySelectorAll("nav")[0];
let li4=document.getElementsByClassName("language")[0];

function bgLight(){
   for(ind=0;ind<li.length;ind++){
    if(li[ind]=="bg-dark"||li[ind]=="bg-success" || li[ind]=="bg-Warning"|| li[ind]=="bg-info"|| li[ind]=="bg-danger"){
        lii.classList.remove("bg-dark","bg-success","bg-warning","bg-info","bg-danger");
        lii.classList.add("bg-white");
    }
   }
    for(ind=1;ind<=2;ind++) {
        
        let li2=document.querySelectorAll("i")[ind];
        li2.classList.remove("text-white");
        li2.classList.add("text-dark");
    }
    li4.classList.remove("text-white");
    li4.classList.add("text-dark");
}
function bgSuccess(){
    for(ind=0;ind<li.length;ind++){
     if(li[ind]=="bg-dark"||li[ind]=="bg-white" || li[ind]=="bg-Warning"|| li[ind]=="bg-info"|| li[ind]=="bg-danger"){
         lii.classList.remove("bg-dark","bg-white","bg-warning","bg-info","bg-danger");
        lii.classList.add("bg-success");
        }
    }
     for(ind=1;ind<=2;ind++) {
         
         let li2=document.querySelectorAll("i")[ind];
         li2.classList.remove("text-dark");
         li2.classList.add("text-white");
     }
     li4.classList.remove("text-dark");
     li4.classList.add("text-white");
 }
 function bgdark(){
    for(ind=0;ind<li.length;ind++){
     if(li[ind]=="bg-success"||li[ind]=="bg-white" || li[ind]=="bg-Warning"|| li[ind]=="bg-info"|| li[ind]=="bg-danger"){
         lii.classList.remove("bg-success","bg-white","bg-warning","bg-info","bg-danger");
         lii.classList.add("bg-dark");
     }
    }
     for(ind=1;ind<=2;ind++) {
         
         let li2=document.querySelectorAll("i")[ind];
         li2.classList.remove("text-dark");
         li2.classList.add("text-white");
     }
     li4.classList.remove("text-dark");
     li4.classList.add("text-white");
 }
 function bgWarning(){
    for(ind=0;ind<li.length;ind++){
     if(li[ind]=="bg-success"||li[ind]=="bg-white" || li[ind]=="bg-dark"|| li[ind]=="bg-info"|| li[ind]=="bg-danger"){
         lii.classList.remove("bg-success","bg-white","bg-dark","bg-info","bg-danger");
         lii.classList.add("bg-warning");
     }
    }
     for(ind=1;ind<=2;ind++) {
         
         let li2=document.querySelectorAll("i")[ind];
         li2.classList.remove("text-dark");
         li2.classList.add("text-white");
     }
     li4.classList.remove("text-dark");
     li4.classList.add("text-white");
 }
  function bginfo(){
    for(ind=0;ind<li.length;ind++){
     if(li[ind]=="bg-success"||li[ind]=="bg-white" || li[ind]=="bg-dark"|| li[ind]=="bg-warning"|| li[ind]=="bg-danger"){
         lii.classList.remove("bg-success","bg-white","bg-dark","bg-warning","bg-danger");
         lii.classList.add("bg-info");
     }
    }
     for(ind=1;ind<=2;ind++) {
         
         let li2=document.querySelectorAll("i")[ind];
         li2.classList.remove("text-dark");
         li2.classList.add("text-white");
     }
     li4.classList.remove("text-dark");
     li4.classList.add("text-white");
 }
 function bgDanger(){
    for(ind=0;ind<li.length;ind++){
     if(li[ind]=="bg-success"||li[ind]=="bg-white" || li[ind]=="bg-dark"|| li[ind]=="bg-warning"|| li[ind]=="bg-info"){
         lii.classList.remove("bg-success","bg-white","bg-dark","bg-warning","bg-info");
         lii.classList.add("bg-danger");
     }
    }
     for(ind=1;ind<=2;ind++) {
         
         let li2=document.querySelectorAll("i")[ind];
         li2.classList.remove("text-dark");
         li2.classList.add("text-white");
     }
     li4.classList.remove("text-dark");
     li4.classList.add("text-white");
 }

let a=document.querySelectorAll(".sidebar")[0];
let b=document.querySelectorAll(".sidebar")[0].classList;
let c=document.querySelectorAll(".nav-link");
function sideDark(){
    for(ind=0;ind<b.length;ind++){
        if(b[ind]=="bg-white" ){
            a.classList.remove("bg-white");
            a.classList.add("bg-dark");
        }
        }
        for(ind=0;ind<c.length;ind++){
            let c=document.querySelectorAll(".nav-link")[ind];
            c.classList.remove("text-dark");
            c.classList.add("text-white");
        }
}
function sideLight(){
    for(ind=0;ind<b.length;ind++){
        if(b[ind]=="bg-dark" ){
            a.classList.remove("bg-dark");
            a.classList.add("bg-white");
        }
    }
        for(ind=0;ind<c.length;ind++){
            let c=document.querySelectorAll(".nav-link")[ind];
            c.classList.add("text-dark");
        }
}

 













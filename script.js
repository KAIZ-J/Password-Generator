let counter = 0;
      let historyArray =[];
      function gen() {
        const seth = document.getElementById("strength");
        const upcase = document.getElementById("upcase");
        const lowcase = document.getElementById("lowcase");
        const nums = document.getElementById("nums");
         const shar = document.getElementById("schar");
        const vSh = document.getElementById("value");
        const pass = document.getElementById("pass");
        pass.innerHTML = "";
        const input = Number(document.getElementById("n").value);
        if(input===0){
            pass.innerHTML="input can't be 0 dumbass";
            pass.style.border="";
            seth.innerHTML="";
return;
        }
        else if(!nums.checked && !shar.checked && !upcase.checked && !lowcase.checked ){
            pass.innerHTML="select atleast one of the options";
            seth.innerHTML="";
            pass.style.border="";
return;
        }
        vSh.innerHTML = input;
        let valuesholder = ["ABCDEFGHIJLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz","0123456789","@$_!&*"];
        let keyholder = [upcase,lowcase,nums,shar];
        let ll = ``;
     for(let x=0;x<keyholder.length;x++){
        if(keyholder[x].checked===true){
            ll += `${valuesholder[x]}`;
        }
     };
        let array = ll.split("");
        for (let i = 0; i < input; i++) {
          let randomi = Math.floor(Math.random() * array.length);
          pass.innerHTML += `${array[randomi]}`;
        }
document.getElementById("copy").addEventListener("click",
function()
{navigator.clipboard.writeText(pass.innerHTML)}
          );
          
          let strength = 0;
          if(/[a-z]/.test(pass.innerHTML)===true) strength++ ;
          if(/[A-Z]/.test(pass.innerHTML)===true) strength++ ;
          if(/[0-9]/.test(pass.innerHTML)===true) strength++ ;
          if(/[^a-zA-Z0-9]/.test(pass.innerHTML)===true) strength++ ;
          if(input>8) strength++;
          if(strength===1){
            seth.innerHTML="Very weak";
            pass.style.border="2px solid red";
          }
          else if(strength===2){
            seth.innerHTML="Weak";
            pass.style.border="2px solid orange";
          }
          else if(strength===3){
            seth.innerHTML="Medium";
            pass.style.border="2px solid yellow";
          }
          else if(strength===4){
            seth.innerHTML="Strong";
            pass.style.border="2px solid blue";
          }
          else if(strength===5){
            seth.innerHTML="Very strong";
            pass.style.border="2px solid green";
          }
          historyArray.push(pass.innerHTML);
 const histdiv = document.getElementById("histories");
    let newhis = document.createElement("div");
newhis.innerHTML=`<button class="box">${historyArray[counter]}</button>`;
  histdiv.prepend(newhis);
  
  document.querySelector(".box").addEventListener("click",
function()
{navigator.clipboard.writeText(newhis.innerText)}
          );
      }
      let array = ["schar","lowcase","upcase","nums"];
      array.forEach(id => {document.getElementById(id).addEventListener("change",cilcking)});
      document.getElementById("n").addEventListener("input",cilcking);
 document.addEventListener("DOMContentLoaded", function(){
    gen();
    counter++;})
function cilcking(){
 gen();
counter++;
}
function modecolor(){
  const copy = document.getElementById("copy");
  const body =document.body;
  const pass = document.getElementById("pass");
  const col = document.getElementById("iconcolor");
 const his = document.getElementById("iconhis");
  if(getComputedStyle(body).backgroundColor==="rgb(242, 246, 248)"){
    body.style.backgroundColor="#070b0d";
    body.style.color="#edf1f2";
    pass.style.backgroundColor="#286276";
   col.style.color="white";
   his.style.color="white";
   copy.style.color="white";
  }
  else{
    body.style.backgroundColor="";
    body.style.color="";
    pass.style.backgroundColor="";
    col.style.color="";
   his.style.color="";
   copy.style.color="";
  }
}

function appear(){
  const histdiv = document.getElementById("histories");
  if(histdiv.style.display==="none"){
    histdiv.style.display="flex";
  }
  else{
    histdiv.style.display="none";
  };
}

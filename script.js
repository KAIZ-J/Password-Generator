const seth = document.getElementById("strength");
        const upcase = document.getElementById("upcase");
        const lowcase = document.getElementById("lowcase");
        const nums = document.getElementById("nums");
         const shar = document.getElementById("schar");
        const vSh = document.getElementById("value");
        const pass = document.getElementById("pass");
        const histdiv = document.getElementById("histories");
// this is giving each option their characters
const up = "ABCDEFGHIJLMNOPQRSTUVWXYZ".split("");
  const low = "abcdefghijklmnopqrstuvwxyz".split("");
  const num = "0123456789".split("");
  const sym = "@$_!&*%^|\/~?<>}{][)(".split("");
  // then a better way than writing like more than 26 lines of code to generate advanced setttings
document.addEventListener("DOMContentLoaded",function(){
  const advup = document.getElementById("advupcase");
  const advlow = document.getElementById("advlowcase");
  const advnum = document.getElementById("advnums");
  const advchar = document.getElementById("advcharsets");

  for(let i=0;i<up.length;i++){
    let newup = document.createElement("div");
    newup.innerHTML=`<input type="checkbox" class="elemup" checked><span>${up[i]}</span>`;
    advup.append(newup);
  }
  for(let j=0;j<low.length;j++){
    let newlow = document.createElement("div");
    newlow.innerHTML=`<input type="checkbox" class="elemlow" checked><span>${low[j]}</span>`;
    advlow.append(newlow);
  }
  for(let k=0;k<num.length;k++){
    let term = num[k];
    let newelement = document.createElement("div");
    newelement.innerHTML=`<input type="checkbox" class="elemnum" checked><span>${term}</span>`;
    advnum.append(newelement);
  }
  for(let l=0;l<sym.length;l++){
    let term = sym[l];
    let newelement = document.createElement("div");
    newelement.innerHTML=`<input type="checkbox" class="elemsym" checked><span>${term}</span>`;
    advchar.append(newelement);
  }
  
})
      function container(array){
        histdiv.innerHTML=""
        array.forEach(el=>{
          histdiv.innerHTML+=`<div><button type="button" onclick="copy(this)" class="box">${el}</button></div>`
        })
      }
      let historyArray =JSON.parse(localStorage.getItem("passwords")) || [];
      
      container(historyArray);
      function copy(elem){
        navigator.clipboard.writeText(elem.innerText)
      }
      // the main function where we can say literally evrthing happens in 
      function gen() {
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
// this is to get which checboxes are checked then use them in generating passwords for advaced customization by deafult they are all checked 
        vSh.innerHTML = input;
        let upper = ``;
        let lower = ``;
        let number = ``;
        let symbols = ``;

const stringups = document.querySelectorAll(".elemup");
for(let g=0;g<up.length;g++){
        if(stringups[g].checked===true){
            upper += `${up[g]}`;
        } }
const stringlows = document.querySelectorAll(".elemlow");
for(let g=0;g<low.length;g++){
        if(stringlows[g].checked===true){
          lower += `${low[g]}`;
        } }
        const stringnums = document.querySelectorAll(".elemnum");
for(let g=0;g<num.length;g++){
        if(stringnums[g].checked===true){
            number += `${num[g]}`;
        } }
        const stringsym = document.querySelectorAll(".elemsym");
for(let g=0;g<sym.length;g++){
        if(stringsym[g].checked===true){
            symbols += `${sym[g]}`;
        } }
        let valuesholder = [upper,lower,number,symbols];
        let keyholder = [upcase,lowcase,nums,shar];
        let ll = ``;
        // this is where the checkboxes that are checked their content will be added
     for(let x=0;x<keyholder.length;x++){
        if(keyholder[x].checked===true){
            ll += `${valuesholder[x]}`;
        }
     };
    //  this is where a random password will be generated after all that passes
        let array = ll.split("");
        for (let i = 0; i < input; i++) {
          let randomi = Math.floor(Math.random() * array.length);
          pass.innerHTML += `${array[randomi]}`;
        }
        // for copying the current pswrd when the copy is clicked
document.getElementById("copy").addEventListener("click",
function()
{navigator.clipboard.writeText(pass.innerHTML)}
          );
        //  this is the pasword strength section 
          let strength = 0;
          // if the pasword generated passes one of these statements 1 strength will be added to it ,max is 5 very strong
        // using the regex method here
          if(/[a-z]/.test(pass.innerHTML)===true) strength++ ;
          if(/[A-Z]/.test(pass.innerHTML)===true) strength++ ;
          if(/[0-9]/.test(pass.innerHTML)===true) strength++ ;
          if(/[^a-zA-Z0-9]/.test(pass.innerHTML)===true) strength++ ;
          if(input>8) strength++;
          // here is where it will checked based on the it's strength value
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
          // every time pswrd is generated it will be pushed/unshift to the historyArray
          historyArray.unshift(pass.innerHTML);
          localStorage.setItem("passwords",JSON.stringify(historyArray))
          container(historyArray);
      }
      // this is for making gen function happen when the changes or inpput or domcontet is loaded
      let array = ["schar","lowcase","upcase","nums"];
      array.forEach(id => {document.getElementById(id).addEventListener("change",cilcking)});
      document.getElementById("n").addEventListener("input",cilcking);
 document.addEventListener("DOMContentLoaded", function(){
    gen();})
function cilcking(){
 gen();
}
// obviosly for toggling between light and dark mode
function modecolor(){
  const copy = document.getElementById("copy");
  const body =document.body;
  const pass = document.getElementById("pass");
  const col = document.getElementById("iconcolor");
 const his = document.getElementById("iconhis");
 const retry = document.getElementById("retry");
 const adv = document.getElementById("adv");
  if(getComputedStyle(body).backgroundColor==="rgb(242, 246, 248)"){
    body.style.backgroundColor="#070b0d";
    body.style.color="#edf1f2";
    pass.style.backgroundColor="#286276";
   col.style.color="white";
   his.style.color="white";
   copy.style.color="white";
   retry.style.color="white";
   adv.style.color="white";
  }
  else{
    body.style.backgroundColor="";
    body.style.color="";
    pass.style.backgroundColor="";
    col.style.color="";
   his.style.color="";
   copy.style.color="";
   adv.style.color="";
  }
}
// for display toggling the contents under them when clicked
function appear(){
  const histdiv = document.getElementById("histories");
  if(histdiv.style.display==="none"){
    histdiv.style.display="flex";
  }
  else{
    histdiv.style.display="none";
  };
}
function advAppear(){
  const adiv = document.getElementById("advcustom");
  if(adiv.style.display==="none"){
    adiv.style.display="block";
  }
  else{
    adiv.style.display="none";
  };
}
document.getElementById("retry").addEventListener("click",cilcking)
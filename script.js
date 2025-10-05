const seth = document.getElementById("strength");
        const upcase = document.getElementById("upcase");
        const lowcase = document.getElementById("lowcase");
        const nums = document.getElementById("nums");
         const shar = document.getElementById("schar");
        const vSh = document.getElementById("value");
        const pass = document.getElementById("pass");
        const histdiv = document.getElementById("histories");
        const copyBtn = document.getElementById("copy");
         const retryIcon = document.getElementById("retry-icon");
// this is giving each option their characters
let up = "ABCDEFGHIJLMNOPQRSTUVWXYZ";
  let low = "abcdefghijklmnopqrstuvwxyz";
  let num = "0123456789";
  let sym = "@$_!&*%^|\/~?<>}{][)(";
  function addElem(container,cls,content){
  for(let i=0;i<content.length;i++){
    let newElem = document.createElement("div");
    newElem.innerHTML=`<input type="checkbox" class="${cls}" checked><span>${content[i]}</span>`;
    container.append(newElem);
  }
  }
  function advChecked(cls,array){
    let text = ``;
    const checkbox = document.querySelectorAll(`.${cls}`);
for(let g=0;g<array.length;g++){
        if(checkbox[g].checked===true){
            text += `${array[g]}`;
        } }
        return text;
  }
  // then a better way than writing like more than 26 lines of code to generate advanced setttings
  addElem(document.getElementById("advupcase"),"elemup",up)
  addElem(document.getElementById("advlowcase"),"elemlow",low)
  addElem(document.getElementById("advnums"),"elemnum",num)
  addElem(document.getElementById("advcharsets"),"elemsym",sym)
      function container(array){
        histdiv.innerHTML=""
        array.forEach(el=>{
          histdiv.innerHTML+=`<div><button type="button" onclick="copy(this)" class="box">${el}</button></div>`
        })
      }
      function containerAdd(str){
         histdiv.innerHTML+= `<div><button type="button" onclick="copy(this)" class="box">${str}</button></div>`;
       
      }
      let historyArray =JSON.parse(localStorage.getItem("gen-passwords")) || [];
      
      container(historyArray);
      function copy(elem){
        navigator.clipboard.writeText(elem.innerText)
      }
      // the main function where we can say literally evrthing happens in 
      function gen() {
        pass.innerHTML = "";
        const input = Number(document.getElementById("n").value);
         if(!nums.checked && !shar.checked && !upcase.checked && !lowcase.checked ){
            pass.innerHTML="select atleast one of the options";
            seth.innerHTML="";
            pass.style.boxShadow="";
return;
        }
// this is to get which checboxes are checked then use them in generating passwords for advaced customization by deafult they are all checked 
        vSh.innerHTML = input;
        let valuesholder = [up,low,num,sym];
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
      
        // //  this is the pasword strength section 
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
            pass.style.boxShadow="0px 0px 30px red";
          }
          else if(strength===2){
            seth.innerHTML="Weak";
           pass.style.boxShadow="0px 0px 30px orange";
          }
          else if(strength===3){
            seth.innerHTML="Medium";
           pass.style.boxShadow="0px 0px 30px yellow";
          }
          else if(strength===4){
            seth.innerHTML="Strong";
            pass.style.boxShadow="0px 0px 30px blue";
          }
          else if(strength===5){
            seth.innerHTML="Very strong";
            pass.style.boxShadow="0px 0px 30px green";
          }
        //   // every time pswrd is generated it will be pushed/unshift to the historyArray
     historyArray.unshift(pass.innerHTML);
          localStorage.setItem("gen-passwords",JSON.stringify(historyArray))
         containerAdd(pass.textContent) 
      }
      copyBtn.addEventListener("click",
function()
{navigator.clipboard.writeText(pass.innerHTML);
  copyBtn.innerHTML="Copied!"
  setTimeout(() => {
    copyBtn.innerHTML='<i class="fa-solid fa-copy"></i><span>COPY TO CLIPBOARD</span>'
  }, 1200);
}
          );
      // this is for making gen function happen when the changes or inpput or domcontet is loaded
      let array = ["schar","lowcase","upcase","nums"];
      array.forEach(id => {document.getElementById(id).addEventListener("change",gen)});
      document.getElementById("n").addEventListener("input",gen);
 document.addEventListener("DOMContentLoaded", function(){
    gen();})
// obviosly for toggling between light and dark mode
function modecolor(){
 document.body.classList.toggle("dark")
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
 adiv.showModal()
}
function retryAgain(elem){
  gen();
  retryIcon.style.animation="rotateIcon .3s ease";
}
function closeDialog(elem){
  elem.parentElement.close()
}
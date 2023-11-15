const inputEL=document.querySelector("#input")
const btnEl=document.querySelector("#todobtn")
const list=document.querySelector("#list")
let date=[]
btnEl.addEventListener("click",function(){
    let inputWalue=inputEL.value
    let listEl=`<li class="list-group-item">${inputWalue}</li>`
    if(inputWalue!==""){
        date.unshift(listEl)
        list.innerHTML=date
    }  
    inputEL.value = ""
})

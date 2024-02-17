const inp1 =document.querySelector(".inp1")
const inp2 =document.querySelector(".inp2")
const inp3 =document.querySelector(".inp3")
const btn = document.querySelector(".btn")
const btn1 = document.querySelector(".btn1")

const left = document.querySelector(".left")
const reiht = document.querySelector(".reiht")
const x = document.querySelector(".x")
const reihtex = document.querySelector(".reihtex")

function locol() {
    reihtex.innerHTML=""
    let task = JSON.parse(localStorage.getItem("task")) || []
    task.map((el)=>{
        reihtex.innerHTML +=`<div class="text">
        
        <div class="teximg">
        <img class="url" src="${el.url} " alt="">
        </div>
        <div class="texname">
        <h1 class="name"> ${el.name}</h1>
        <h1 class="email">${el.email} </h1>
        </div>
        <button class="btndel"> delete</button>
        </div>`
    })
    deletebtn()
}
locol()

btn.addEventListener("click",()=>{
    if(inp1.value==="" ||inp2.value==="" ||inp1.value===""){
        alert("err")
    }else{
        let task = JSON.parse(localStorage.getItem("task")) || []
    let newTask= {
        url:inp1.value,
        name:inp2.value,
        email:inp3.value,
    }
    let res=[...task,newTask]
    localStorage.setItem("task",JSON.stringify(res))
   
    }
    locol()
    inp1.value= ""
    inp2.value= ""
    inp3.value = ""
})

function deletebtn() {
    let task = JSON.parse(localStorage.getItem("task")) || []
    const btndel = document.querySelectorAll(".btndel")
    btndel.forEach((ntn,index)=>{
        ntn.addEventListener("click",()=>{
            task= task.filter((el,ind)=>{
                return ind !== index
            })
            localStorage.setItem("task",JSON.stringify(task))
            locol()
        })
    })

}
deletebtn()


btn1.addEventListener("click",()=>{
    reiht.style.display ="block"
})

x.addEventListener("click",()=>{
    reiht.style.display ="none"
})

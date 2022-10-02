import navbar from "./NAVBAR.js"
document.getElementById("navbar").innerHTML=navbar()

import {sidebar} from "./sidebar.js"
let sidebar_div = document.getElementById("sidebar");
sidebar_div.innerHTML = sidebar();

import {top_bar} from "./top_bar.js"
let top_barDiv=document.getElementById("dpdown")
top_barDiv.innerHTML=top_bar()

import { footer } from "./footer_product_page.js";
document.getElementById("footer").innerHTML=footer();

let container=document.getElementById("box")
const mens_data= async()=>{
    try{
        let res=await fetch("https://script.google.com/macros/s/AKfycbwcxQ0Aw-882QLDwu4zOO1uA-p_ZKuPNNEv3E1K5xqRiuAj2BJispaOyxiEzDfWZAGS/exec?gender=Mens")
        let data= await res.json()
     let actual_data= data.data
        console.log(data.data)
        let actual_data1=[]
    for(let i=10;i<60;i++){
      actual_data1.push(actual_data[i])
    }
    console.log(actual_data1)
        appendData(actual_data1)

}
catch(error){
console.log(error)
}
}
mens_data()


const appendData=(data)=>{

    data.forEach(function(el){
     console.log(el)
        let div=document.createElement("div")
// let id=document.createElement("p")
// id.innerHTML=el.id
let result=document.getElementById("result_base")
        let img=document.createElement("img")
        img.src=el.image
         console.log(img)
        img.addEventListener("click",()=>{details(el.id)})
       
        let title1=document.createElement("p")
        title1.innerHTML=el.brand
        title1.style.fontSize="14px"
        title1.style.fontWeight="800px"
         let title=document.createElement("p")
         title.setAttribute("class","brand_name")
         title.innerHTML=el.name+"..."
         let cost=document.createElement("p")
         cost.innerHTML='Rs. '+el.price
         cost.style.fontWeight="bold"

         div.append(img,title1,title,cost)
         result.append(div)
         container.append(result)
    })

}
const details=(id)=>{
   localStorage.setItem("products",JSON.stringify(id))
   window.location.href="./particular.html"
}
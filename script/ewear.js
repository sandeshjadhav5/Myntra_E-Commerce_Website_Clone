let container=document.getElementById("box")
const mens_data= async()=>{
    try{
        let res=await fetch("https://script.google.com/macros/s/AKfycbwcxQ0Aw-882QLDwu4zOO1uA-p_ZKuPNNEv3E1K5xqRiuAj2BJispaOyxiEzDfWZAGS/exec?gender=Mens")
        let data= await res.json()
     let actual_data= data.data
        console.log(data.data)
        let actual_data1=[]
    for(let i=0;i<100;i++){
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
        let img=document.createElement("img")
        img.src=el.image
        img.addEventListener("click",()=>{details(el.id)})
        console.log(img)
        let title1=document.createElement("h3")
        title1.innerHTML=el.brand
         let title=document.createElement("p")
         title.innerHTML=el.name

         let cost=document.createElement("p")
         cost.innerHTML=el.price

         div.append(img,title1,title,cost)
         container.append(div)
    })

}
const details=(id)=>{
   localStorage.setItem("products",JSON.stringify(id))
   window.location.href
}
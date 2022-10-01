

let container=document.getElementById("box")
const mens_data= async()=>{
    try{
        let res=await fetch("https://script.google.com/macros/s/AKfycbzmSJIe5U3y3ND6nqpmcRH2mGKd5lg6CPUvlezvCQ1JR9sydRHmbsRm8Xty3042DwLGVQ/exec")
        let data= await res.json()
        // let actual_data=await data
        console.log(data.data)
        appendData(data.data)

}
catch(error){
console.log(error)
}
}
mens_data()


const appendData=(data)=>{

    data.forEach(function(el){
    //  console.log(el)
        let div=document.createElement("div")

        let img=document.createElement("img")
        img.src=el.image
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
let container=document.getElementById("box")
const mens_Shirtsdata= async()=>{
    try{
        let res=await fetch(`https://script.google.com/macros/s/AKfycbyFa9GapV1otOmILFarXxwAhnZLWy-VDIaBShKdLkRpfobZN7K3as0DLyXgBI1Lfva2cA/exec`)
        let data= await res.json()
        //  let actual_data=await data
        console.log(data.data)
          appendData(data.data)

}
catch(error){
console.log(error)
}
}
 mens_Shirtsdata()


const appendData=(data)=>{

    data.forEach(function(el){
     console.log(el)
        let div=document.createElement("div")

        let img=document.createElement("img")
        img.src=el.image
        // console.log(img)
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


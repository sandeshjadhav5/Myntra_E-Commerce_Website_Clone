import { footer } from "./footer_product_page.js";
document.getElementById("footerDiv").innerHTML=footer();


 let key=JSON.parse(localStorage.getItem('products'))
console.log(key)
const getDataDynamic = async () => {
   
   
  try{

    let res= await fetch(`https://script.google.com/macros/s/AKfycbwcxQ0Aw-882QLDwu4zOO1uA-p_ZKuPNNEv3E1K5xqRiuAj2BJispaOyxiEzDfWZAGS/exec?gender=Mens`)
let data=await res.json()
let actual_dataDynamic=data.data
//console.log(actual_dataDynamic)
appendDataDynamic(actual_dataDynamic)
  }
  catch(e){
    console.log(e)
  }
}
getDataDynamic()
const appendDataDynamic= (actual_dataDynamic) => {
  
  // let key=3077134
let container=document.getElementById('ProductImages')
let imgDiv= document.querySelector('#dynamic')

  actual_dataDynamic.forEach(function(el){
    if (key==el.id){
      console.log(el)
      let div=document.createElement("div")
      
      let img=imgDiv
     img.src=el.image
     img.setAttribute('id','modal')
  
   
    console.log(imgDiv)
      let brand=document.getElementById('greyText')
      brand.innerHTML=el.name
      let ratings=document.querySelector('.ratings')
      ratings.innerHTML='<b>4.3 </b> <i class="fa-solid fa-star"></i> | 56.3k Ratings'
      let name=document.getElementById('productNameDynamic')
      name.innerText=el.brand
      let price=document.getElementById('priceTag')
      price.innerText=`Rs.${el.price}`
      let pricee=document.getElementById('priceTagg')
      pricee.innerText=`Rs.${el.price}`
      let pwd=document.getElementById('pwd')
      pwd.innerText=`${el.gender} / ${el.brand} / ${el.name}`


//for medium size
document.querySelector('.mediumSize').addEventListener('click',function(){
  let price= document.querySelector('#priceTag')
  price.innerHTML=`Rs.${el.price}`
  document.querySelector('.mediumSize').style.backgroundColor="lightgrey"
  document.querySelector('.mediumSize').style.border="solid 1px red"
  document.querySelector("#sizes>.lSize").style.border="solid lightgrey 0.5px"
  document.querySelector("#sizes>.xlSize").style.border="solid lightgrey 0.5px"
  document.querySelector('.lSize').style.backgroundColor="white"
  document.querySelector("#sizes>.xxlSize").style.border="solid lightgrey 0.5px"
  document.querySelector("#sizes>.xxlSize").style.border="solid lightgrey 0.5px"
  document.querySelector('.xxlSize').style.backgroundColor="white"
})

//for large size
      document.querySelector('.lSize').addEventListener('click',function(){
        let price= document.querySelector('#priceTag')
        price.innerHTML=`Rs.${Math.floor((el.price)+el.price*0.1)}`
        document.querySelector('.lSize').style.backgroundColor="lightgrey"
        document.querySelector('.lSize').style.border="solid 1px red"
        document.querySelector("#sizes>.mediumSize").style.border="solid lightgrey 0.5px"
        document.querySelector("#sizes>.xlSize").style.border="solid lightgrey 0.5px"
        document.querySelector("#sizes>.mediumSize").style.border="solid lightgrey 0.5px"
        document.querySelector('.xlSize').style.backgroundColor="white"
        document.querySelector('.mediumSize').style.backgroundColor="white"
      })

//for xl size


document.querySelector('.xlSize').addEventListener('click',function(){
  let price= document.querySelector('#priceTag')
  price.innerHTML=`Rs.${Math.floor((el.price)+el.price*0.2)}`
  document.querySelector('.xlSize').style.backgroundColor="lightgrey"
  document.querySelector('.xlSize').style.border="solid 1px red"
  document.querySelector("#sizes>.lSize").style.border="solid lightgrey 0.5px"
  document.querySelector("#sizes>.mediumSize").style.border="solid lightgrey 0.5px"
  document.querySelector('.lSize').style.backgroundColor="white"
  document.querySelector("#sizes>.xxlSize").style.border="solid lightgrey 0.5px"
  document.querySelector("#sizes>.xxlSize").style.border="solid lightgrey 0.5px"
  document.querySelector('.xxlSize').style.backgroundColor="white"
  document.querySelector('.mediumSize').style.backgroundColor="white"
})

//for xxl size
document.querySelector('.xxlSize').addEventListener('click',function(){
  let price= document.querySelector('#priceTag')
  price.innerHTML=`Rs.${Math.floor((el.price)+el.price*0.3)}`
  document.querySelector('.xxlSize').style.backgroundColor="lightgrey"
  document.querySelector('.xxlSize').style.border="solid 1px red"
  document.querySelector("#sizes>.mediumSize").style.border="solid lightgrey 0.5px"
  document.querySelector("#sizes>.lSize").style.border="solid lightgrey 0.5px"
  document.querySelector("#sizes>.mediumSize").style.border="solid lightgrey 0.5px"
  document.querySelector('.lSize').style.backgroundColor="white"
  document.querySelector('.xlSize').style.backgroundColor="white"
  document.querySelector("#sizes>.xlSize").style.border="solid lightgrey 0.5px"
  document.querySelector('.mediumSize').style.backgroundColor="white"  
})

      div.append(img)
      container.append(div)
let objCart={
  name:el.name,
  img:el.image,
  price:el.price,
  brand:el.brand
}
      let addToLS=document.querySelector('#toBag')
      addToLS.addEventListener('click',function(el){
        localStorage.setItem('cartItem',JSON.stringify(objCart))
        // window.location.href="./cart.html"
      })
    }
  })
}








const myntraData = async () => {
 try{

   let res=await fetch(`https://script.google.com/macros/s/AKfycbwg-EnWORJvauyoRM13Wv-kTj53DVejlhGpOZVyOni97wDoaCTg1WSzfwx5mjBT87nF/exec?gender=Mens`)
   let data=await res.json()
   let main_data=data.data
   
   let actual_data=[]
   for(let i=4;i<19;i++){
     actual_data.push(main_data[i])
   }
   console.log(actual_data)
   appendData(actual_data)
 }
 catch(e){
   console.log(e)
 }
}
myntraData()

const appendData = (actual_data) => {
let container=document.getElementById('similarProducts')
 actual_data.forEach(function(el){

   let div=document.createElement("div")
   
   let img=document.createElement("img")
   img.src=el.image
   let brand=document.createElement('h4')
   brand.innerHTML=el.brand
   
   let name=document.createElement('p')
   name.innerText=el.name;
   let price=document.createElement('h5')
   price.innerText=`Rs.${el.price}`

   div.append(img,brand,name,price)
   container.append(div)
 })

}

const customersAlsoLiked=async()=>{
 try{
let res=await fetch(`https://script.googleusercontent.com/macros/echo?user_content_key=dJB32Hm4YBPqkw4EuobDxbf4E33n9Xnc4XnDAo5Oq12teiFIisakVEL-dVEjHD0gQTx-dTchCXPMLO35K-hb6bgFmOZvZkc3m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnG4zd22z1b4sqJMEvnF5ORVXEHmLkvEbYVhkUYYGBN9BIAr7ADhKmXCOCTTHbI3OZRbXZWTeGKPtuB3GwVc7x7mn4D3ldKDerQ&lib=M3gb1PDseKjAIreJkPY-sOxkRFtt-v6Ek`)
 let data=await res.json()
let actual_data=data.data;
let main_data=[]
for(let i=0;i<15;i++){
 main_data.push(actual_data[i])
}
appendLikedData(main_data)
 }
 catch(e){
   console.log('error')
 }
}
customersAlsoLiked()


const appendLikedData = (actual_data) => {
 let container=document.getElementById('customersLiked')
   actual_data.forEach(function(el){
 
     let div=document.createElement("div")
     
     let img=document.createElement("img")
     img.src=el.image
     let brand=document.createElement('h4')
     brand.innerHTML=el.brand
     
     let name=document.createElement('p')
     name.innerText=el.name;
     let price=document.createElement('h5')
     price.innerText=`Rs.${el.price}`
     
     div.append(img,brand,name,price)
     container.append(div)
   })
  
 }


 

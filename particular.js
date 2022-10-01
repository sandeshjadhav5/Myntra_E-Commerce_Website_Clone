// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay')

// openModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     openModal(modal)
//   })
// })

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.modal.active')
//   modals.forEach(modal => {
//     closeModal(modal)
//   })
// })

// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal')
//     closeModal(modal)
//   })
// })

// function openModal(modal) {
//   if (modal == null) return
//   modal.classList.add('active')
//   overlay.classList.add('active')
// }

// function closeModal(modal) {
//   if (modal == null) return
//   modal.classList.remove('active')
//   overlay.classList.remove('active')
// }




const appendDataDynamic= (actual_dataDynamic) => {
  
   let key=3077134
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
       
       let name=document.getElementById('productNameDynamic')
       name.innerText=el.brand
       let price=document.getElementById('priceTag')
       price.innerText=`Rs.${el.price}`

       let pwd=document.getElementById('pwd')
       pwd.innerText=`Home / Clothing / ${el.gender} / ${el.brand} / ${el.name}`

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
      document.querySelector('.lSize').addEventListener('click',function(){
        let price= document.querySelector('.priceTag')
        price.innerHTML=`Rs.${(el.price)-el.price*0.5}`
        document.querySelector('.lSize').style.backgroundColor="lightgrey"
        document.querySelector('.lSize').style.border="solid 1px red"
        document.querySelector("#sizes>.mediumSize").style.border="solid lightgrey 0.5px"

      })
      div.append(img,brand,name,price)
      container.append(div)
    })
   
  }


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

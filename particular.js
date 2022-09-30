const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


const myntraData = async () => {
  try{

    let res=await fetch(`https://script.google.com/macros/s/AKfycbwg-EnWORJvauyoRM13Wv-kTj53DVejlhGpOZVyOni97wDoaCTg1WSzfwx5mjBT87nF/exec?gender=Mens`)
    let data=await res.json()
    let main_data=data.data
    
    let actual_data=[]
    for(let i=0;i<15;i++){
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
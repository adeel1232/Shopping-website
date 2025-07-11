let icon = document.querySelector('.icon');
let ul = document.querySelector('ul');

icon.addEventListener('click', ()=> {
    ul.classList.toggle('showData');

     if (ul.className=='showData'){
        document.getElementById('bar').className="fa-solid fa-xmark";
    
    }else{
        document.getElementById('bar').className="fa-solid fa-bars";
    }
})
//nabar
let shops = document.getElementById('Shops');
let Reviwes = document.getElementById('Reviews');
let Blogs = document.getElementById('Blogs');
let contacts = document.getElementById('contacts');

shops.addEventListener('click',()=>{
    shops.style.color='aqua';
    Reviwes.style.color='white';
    Blogs.style.color='white';
    contacts.style.color='white';
})
Reviwes.addEventListener('click',()=>{
    Reviwes.style.color='aqua';
       shops.style.color='white';
    Blogs.style.color='white';
    contacts.style.color='white';
})
Blogs.addEventListener('click',()=>{
    Blogs.style.color='aqua';
       shops.style.color='white';
    Reviwes.style.color='white';
    contacts.style.color='white';
})
contacts.addEventListener('click',()=>{
    contacts.style.color='aqua';
       shops.style.color='white';
    Reviwes.style.color='white';
    Blogs.style.color='white';

})

//card js
let crd =document.querySelectorAll('.crd');
let itemPage = document.querySelector9('.itemPage')
let container = document.querySelector('.container');
let itemimg=document.getElementById('.itemimg');
let buyBtn =document.getElementById('.buyBtn');
console.log(crd);


    crd.forEach(function(curValue){
        curValue.addEventListener('click',function(){
            itemPage.style.display='fles';
            container.style.display='none';

         let imgSrc  = curValue.firstElementChild.src ;
         itemimg.src=imgSrc;
            
         buyBtn.addEventListener('click', function(){
            document.querySelector('buyPage').style.display='block';

             document.querySelector('.buyText').innerHTML=` <h3>Enter Details :</h3>
        <input type="text" placeholder="Enter Your Name" id="name">
        <input type="text" placeholder="Enter Your Address  id="address">
        <input type="text" placeholder="Enter Your Moblie  id="number">
        <h3>Payment Option :</h3>
        <select>
            <option value='Google-Pay'>Google-Pay</option>
           <option value='Phone-Pay'>Phone-Pay</option>
           <option value='Bharat-Pay'>Bharat-Pay</option>
          <option value='Cash-On-Delivery'>Chah-On-Delivery</option>
        </select><br>
        <button>Submit</button>`
let button =document.createElement('button');
button.innerText='Submit';
buyText.appendChild(button);
button.addEventListener('click',function(){
let name =document.getElementById('name');
if (name.value == ""&& address.value ==""&& Number.value ==""){
    alert('Please Enter Detail')
    }else{
    alert('Your Response Recorded')
}
        let cross =document.querySelector('.cross');
        cross.addEventListener('click', function(){
      document.querySelector('buyPage').style.display='none';
    })
    
        })
        
    })
})})
// connect
function connect(){
    let name = document.getElementById('names');
let number = document.getElementById('number');
if (name.value == ""&& num.value == ""){
    alert('Fill Details')
}else{
    alert('Thanks For Connecting')
}
}
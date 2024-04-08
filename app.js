
let service = document.querySelector("#service");
let search=document.querySelector(".search")
let result=document.querySelector(".result")
let titles=[]
let detail=[],n=0
let description=[]
let rates=[]

                //search engine

search.addEventListener("input",()=>{
result.style.display="block"
  result.innerHTML=""
  searchValue=search.value.toLowerCase()

let found = titles.filter(name =>{
return name.toLowerCase().includes(searchValue)
})

 found.forEach(f=>{
 result.innerHTML+=`<li>${f}</li>`
})

let inputValue=search.value
if (inputValue === ""){
result.innerHTML=""
result.style.display="none"
}

if(found==""){
    result.style.display="none"
}
})



      //Adding products
async function create() {
    let response1 = await fetch('https://dummyjson.com/products?limit=200');
    let data1 = await response1.json();
    data1.products.forEach(product => {
       titles.push(product.title);
       description.push(product.description)
       rates.push(product.rating)
        service.innerHTML += `
            <div class="product">
                <img src="${product.thumbnail}" class="pimg">
                <div class="pname">${product.title}</div>
                <div class="price">${product.price}$</div>
            </div>
        `;
    });

    let response2 = await fetch('https://fakestoreapi.com/products?limit=500');
    let data2 = await response2.json();
    data2.forEach(product => {
    titles.push(product.title);
    description.push(product.description)
    rates.push(product.rating.rate)
        service.innerHTML += `
            <div class="product">
                <img src="${product.image}" class="pimg">
                <div class="pname">${product.title}</div>
                <div class="price">${product.price}$</div>
            </div>
        `
    });  
addAnimation()
checkIfclikced()
console.log(rates)
}
create()
                      //Add details
function checkIfclikced(){
let products=document.querySelectorAll(".product")
products.forEach((product,index)=>{
product.addEventListener("click",()=>{
addDetails(index)
})
})
} 

function addDetails(index){
let pimg=document.querySelectorAll(".product .pimg")
let prices=document.querySelectorAll(".product .price")

detail[n]=document.createElement("div")
document.body.appendChild(detail[n])
detail[n].classList.add("detail")

 detail[n].innerHTML=`
 <div class="detailchild">
 <img src=${pimg[index].src} class="dimg">
 <div class="descrip">
<div class="dname">${description[index]}</div>
<div class="rating">
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<div class="rate">${rates[index]}
</div>
</div>
<div class="dprice">${prices[index].innerHTML}</div>
<div class="quantity">
<i class="fa-solid fa-minus"></i>
<div class="numQuantity">1</div>
<i class="fa-solid fa-plus"></i>
</div>
<button class="buy">BUY</button>
<button class="add">ADD TO CART</button>
</div>
</div>
 `
n++
}

               //Animation on products
function addAnimation(){
        
    let wHeight = window.innerHeight+200;
    let pro = document.querySelectorAll(".product");
    pro.forEach( p => {
        let pHeight = p.getBoundingClientRect();

        if (pHeight.top < wHeight) {
            p.classList.add("animate")
        }else{
        p.classList.remove("animate")
        }
    });
                window.addEventListener("scroll", () => {
                    let pro = document.querySelectorAll(".product");
                    pro.forEach( p => {
                        let pHeight = p.getBoundingClientRect()
                        if (pHeight.top < wHeight) {
                            p.classList.add("animate")
                        }else{
                        p.classList.remove("animate")
                        }
                    });
                });
            }
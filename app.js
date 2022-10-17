const carShopping = document.querySelector(".icon-Shopping");
const close = document.querySelector(".close");
const aside = document.querySelector(".aside");
const contentCar = document.querySelector(".content-products")
const mainContainer = document.querySelector(".container-products");
const totalCompra = document.querySelector(".total-Shopp");
const countershopp = document.querySelector(".counter-shopp")


window.addEventListener("beforeunload", ()=> {
    localStorage.setItem(nameLocalStorageCar, JSON.stringify(myCar))
})
const productsReloj = [
    {
        id: 0,
        model: "LDCM0045",
        price: 96.10,
        img: "./IMGENES/reloj1.png"
    },
    {
        id: 1,
        model: "LDCM3005",
        price: 102.00,
        img: "./IMGENES/reloj2.png"
    },
    {
        id: 2,
        model: "LDCM7467",
        price: 99.22,
        img: "./IMGENES/reloj3.png"
    },
    {
        id: 3,
        model: "LDCM0976",
        price: 170.12,
        img: "./IMGENES/reloj4.png"
    },
    {
        id: 4,
        model: "LDCM0032",
        price: 102.06,
        img: "./IMGENES/reloj5.png"
    },
    {
        id: 5,
        model: "LDCM8425",
        price: 101.08,
        img: "./IMGENES/reloj6.png"
    },
    {
        id: 6,
        model: "LDCM5545",
        price: 145.002,
        img: "./IMGENES/reloj7.png"
    },
    {
        id: 7,
        model: "LDCM9045",
        price: 99.97,
        img: "./IMGENES/reloj8.png"
    }
]

imprimir(productsReloj)


carShopping.addEventListener("click", ()=> {
    aside.style.display = "block";
})
close.addEventListener("click", ()=> {
    aside.style.display = "none";
})


let myCar = [];
let counterProd = 0;
const nameLocalStorageCar = 'carProducts'; 

window.addEventListener("load", ()=> {
   
    myCar = JSON.parse(localStorage.getItem(nameLocalStorageCar)); 
    if(myCar == null && localStorage  && localStorage && undefined  && localStorage && ""){
        myCar = []
    }
    addCar()
})


function addCar(){
    console.log(myCar);
    let htmlContent = "";
    myCar.forEach((itemProduc, i)=> {

        htmlContent += `
        <div class="product-add">
            <img src="${itemProduc.img}">
            <h5>modelo: ${itemProduc.model}</h5>
            <p>precio: ${itemProduc.price}$</p>
            <button onclick="deleteProduct(${i})" class="btn-delete" id="${i}"><i class="fa-regular fa-trash-can delete" id="${i}"></i></button>
        </div>`;
        console.log("dentro");
        
    });
    contentCar.innerHTML = htmlContent;
    let sumProducts = myCar.reduce((a, b) => a + b.price, 0)
                console.log(sumProducts);
                totalCompra.textContent =`Total a pagar: ${sumProducts.toFixed(2)}$`;
                let counterProduct = myCar.length;
                countershopp.textContent = counterProduct;
}

function deleteProduct(idProduct){
    myCar.splice(idProduct, 1);
    addCar(); 
}

mainContainer.addEventListener("click", (e)=> {
    if(e.target.classList.contains("btn-agregar")){
       const idBtnAdd = e.target.getAttribute("id");

        productsReloj.forEach((productReloj)=> {
            if(productReloj.id == idBtnAdd){  
                myCar.push({
                    img: productReloj.img,
                    model: productReloj.model, 
                    price: productReloj.price,
                    id: productReloj.id})
                    addCar()                
            }
        })
    }
})


        
function imprimir(productsReloj){
productsReloj.forEach((reloj, idCounter) => {
    mainContainer.innerHTML  +=`
    <div class="unit-product">
        <div class="content-img-product">
            <img src="${reloj.img}" alt="">
        </div>
        <h3>Modelo ${reloj.model}</h3>
        <p>tipo de Movimiento Automatico</p>
        <span>${reloj.price}$</span>
        <button class="btn-agregar" id="${idCounter}"> Agg <i class="fa-solid fa-cart-arrow-down btn-agregar" id="${idCounter}"></i></button>
    </div>`;
})
}

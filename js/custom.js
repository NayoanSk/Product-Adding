
let productAll = [
    {
        id : "12A3",
        title : "Haier 8 KG Front Loading Washing Machine/525",
        price : 500,
        discount : "10%",
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore velit odit mollitia culpa nam quas eos quo alias blanditiis.",
        productUrl : "https://shorturl.at/npvAb",
        productDetails : "https://www.daraz.com.bd/products/haier-8-kg-525-bldc-i264686781-s1235273677.html?scm=1007.51610.379274.0&pvid=4eaeab1d-c07d-4d27-93b3-cea6a4aba6ad&search=flashsale&spm=a2a0e.tm80335411.FlashSale.d_264686781"
    },
    {
        id : "12A4",
        title : "Sunsilk Shampoo Onion & Jojoba Oil 375ml",
        price : 400,
        discount : "5%",
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore velit odit mollitia culpa nam quas eos quo alias blanditiis.",
        productUrl : "https://shorturl.at/EFBm4",
        productDetails : "https://www.daraz.com.bd/products/sunsilk-shampoo-onion-jojoba-oil-375ml-i343914576-s1677521694.html?scm=1007.51610.379274.0&pvid=e5cda618-bc4a-4650-b42b-655c21c6c7bf&search=flashsale&spm=a2a0e.tm80335411.FlashSale.d_343914576"
    },
    {
        id : "12A5",
        title : "Realme Note 60x",
        price : 10500,
        discount : "15%",
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore velit odit mollitia culpa nam quas eos quo alias blanditiis.",
        productUrl : "https://shorturl.at/tDpvQ",
        productDetails : "https://www.daraz.com.bd/products/realme-note-60x-i519152882-s2497271834.html?scm=1007.51610.379274.0&pvid=3994dea0-e885-4902-863b-7f4471505a2a&search=flashsale&spm=a2a0e.tm80335411.FlashSale.d_519152882"
    },
    {
        id : "12A6",
        title : "Minister One Wash Synthetic Detergent",
        price : 120,
        discount : "0%",
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore velit odit mollitia culpa nam quas eos quo alias blanditiis.",
        productUrl : "https://shorturl.at/5w5fV",
        productDetails : "https://www.daraz.com.bd/products/minister-one-wash-synthetic-detergent-powder-lemon-jasmine-500gm-i520038129-s2501801885.html?scm=1007.51610.379274.0&pvid=d5c4a980-eb41-4774-b996-2b4d486be1ad&search=flashsale&spm=a2a0e.tm80335411.FlashSale.d_520038129"
    },
    {
        id : "12A7",
        title : "Parachute Just For Baby Milky Glow Face Cream",
        price : 350,
        discount : "12%",
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore velit odit mollitia culpa nam quas eos quo alias blanditiis.",
        productUrl : "https://shorturl.at/Q4c6f",
        productDetails : "https://www.daraz.com.bd/products/parachute-just-for-baby-milky-glow-face-cream-100ml-i313496929-s1405614390.html?scm=1007.51610.379274.0&pvid=5361f7ba-428e-4d1a-ba0d-6c2bc8c96bac&search=flashsale&spm=a2a0e.tm80335411.FlashSale.d_313496929"
    },
    {
        id : "12A8",
        title : "Gree GS-18XPUV32 1.5 Ton Pular Split Type Inverter",
        price : 65000,
        discount : "20%",
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore velit odit mollitia culpa nam quas eos quo alias blanditiis.",
        productUrl : "https://shorturl.at/n7QcL",
        productDetails : "https://www.daraz.com.bd/products/gree-gs-18xpuv32-15-i505220714-s2437292453.html?scm=1007.51610.379274.0&pvid=1233f729-bef0-4648-aba9-4a1cc0e2d3d8&search=flashsale&spm=a2a0e.tm80335411.FlashSale.d_505220714"
    }
];

let formProduct = document.getElementById("formProduct");
formProduct.addEventListener("submit", (e)=>{
    e.preventDefault();
    let searchProd = e.target.searchProd.value;
    let changeText = searchProd.toLowerCase();
    e.target.searchProd.value = "";
    
    for(i = 0; i < productAll.length; i++){
        let{id, title, price, discount, description, productUrl, productDetails} = productAll[i];
        let changeTitle = title.toLowerCase();
        let titleIncludes = changeTitle.includes(changeText);
        //titleIncludes
        if(price > 200){
            let proMainDiv = document.getElementById("proMainDiv")
            proMainDiv.innerHTML += productCard(productAll[i]);
        }
    }
});

/*
let formProduct = document.getElementById("formProduct");
formProduct.addEventListener("submit", (e)=>{
    e.preventDefault();
    let searchProd = e.target.searchProd.value;
    let changeText = searchProd.toLowerCase();
    e.target.searchProd.value = "";
    let AllProduct = productAll.filter((value)=>{
        let prodtitle = value.title;
        let changeTitle = prodtitle.toLowerCase();
        return changeTitle.includes(changeText);
    });

    let proMainDiv = document.getElementById("proMainDiv");
    AllProduct.forEach((values)=>{
        let prodCaredss = productCard(values);
        proMainDiv.innerHTML += prodCaredss;
    });

});
*/
function productCard(infoProd){
    let {id, title, price, discount, description, productUrl, productDetails} = infoProd;
    let htmlcode = `
    <div id="productCard">
        <img src="${productUrl}" alt="">
        <h2>${title.length > 20 ? title.slice(0, 20) + "...." : title}</h2>
        <h3>$${price}</h3>
        <h4>Discount :<del>${discount}</del></h4>
        <h5>${id}</h5>
        <p>${description}</p>
        <a href="${productDetails}" target="_blank"><button>Details</button></a>
    </div>
    `;
    return htmlcode;
}



let url = "js/productAll.json"
fetch(url)
.then((res)=> res.json())
.then((resp)=>{
    prodFunc(resp)
})

function prodFunc(proInfo){
    let proMainDiv3 = document.getElementById("proMainDiv3");
    proInfo.forEach((value)=>{
        proMainDiv3.innerHTML += proHtml(value);
    })

    function proHtml(info){
        let {productUrl, price, title, productDetails}= info;
        let htmlCode = `
            <div id="productCard3">
                <img src="${productUrl}" alt="">
                <h2>${title.length > 20 ? title.slice(0, 20) + "...." : title}</h2>
                <h3>$${price}</h3>
                <a href="${productDetails}" target="_blank"><button>Details</button></a>
            </div>
        `;
        return htmlCode;
    }
}

//use another Api
let urls = "https://jsonplaceholder.typicode.com/users";
fetch(urls)
.then((res)=> res.json())
.then((resp)=>{
    testFunc(resp)
});
function testFunc(information){
    let proMainDiv4 = document.getElementById("proMainDiv4");
    information.forEach((values)=>{
        proMainDiv4.innerHTML += newUser(values);
    })
    function newUser(newInformation){
        let {name, email, website, address} = newInformation;
        let htmlcodes = `
            <div id="productCard4">
                <h2>${name}</h2>
                <h3>$${email}</h3>
                <p>${website}</p>
                <p>${address.street}</p>
            </div>
        `;
        return htmlcodes;
    }
}
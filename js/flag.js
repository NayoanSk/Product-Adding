
let url = "https://restcountries.com/v3.1/all";
fetch(url)
.then((res)=> res.json())
.then((resp) =>{
    flagAll(resp);
})
function flagAll(allCountries){
    let flagMainDiv = document.getElementById("flagMainDiv");
    flagMainDiv.innerHTML ="";
    allCountries.forEach((value)=>{
        flagMainDiv.innerHTML += flagHtml(value);
    })
}
    function flagHtml(flagCode){
        let {flags, name, currencies, capital, area} = flagCode;
        let flagDiv = `
            <div class="flagDiv">
                <img src="${flags.png}" alt="">
                <h3>${name.common}</h3>
                <h4>${capital}</h4>
                <h5>${Object.values(currencies)[0].name}, ${Object.values(currencies)[0].symbol}</h5>
                <h6>${area} sq km</h6>
            </div>
        `;
        return flagDiv;
    }

let flagForm = document.getElementById("flagForm");
flagForm.addEventListener("submit" , (e)=>{
    e.preventDefault();
    let flagName = e.target.flagName.value;
    let changeName = flagName.toLowerCase();
    e.target.flagName.value ="";
    fetch(`https://restcountries.com/v3.1/name/${changeName}`)
    .then((res)=> res.json())
    .then((res)=>{
        flagAll(res);
    })
});

let persons = ["karim", 25, "Sujon"];
//array er jonno for..of   for...in dui ta e use kora jai.. tobe for... in use na kora 
//e valo
for(key of persons){
    console.log(key);
}//eta array er sob value gulo show kore
for(key in persons){
    console.log(key);
}//eta index number show kore

let person = {
    name : "Rahim",
    age : 30,
    city : "Khulna"
}
for(key in person){
    // console.log(key + ":" + person[key]);
    // console.log(person[key]);
    console.log(key);
}
// error show korbe
// for(key of person){
//     console.log(key + ":" + person[key]);
// }
let newArr = ["Bangladesh", "Nepal", "Srilanka", "Bhutan"];
for(value of newArr){
    console.log(value);
} //eta arrey er value gulo show kore

for(value in newArr){
    console.log(value);
}//eta array er index number show kore

let newObj = {
    name : "Italy",
    area : 12543,
    capital : "Rome"
}
for(value in newObj){
    console.log(value);
}// eta obj er key show kore

for(value in newObj){
    console.log(newObj[value]);
}//eta obj er value show kore
for(value in newObj){
    console.log(value + ": " + newObj[value]);
}//eta obj er key value dui ta e show kore

fetch("http://127.0.0.1:5500/api.txt")
// .then((res)=> res.json())
.then((resp)=>{
    console.log(resp);
})

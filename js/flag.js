
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
        // console.log(flagCode)
        let {flags, name, currencies, capital, area} = flagCode;
        let flagDiv = `
            <div class="flagDiv">
                <img src="${flags.png}" alt="">
                <h3>${name.common}</h3>
                <h4>${capital}</h4>
                <h5>${Object.values(currencies)[0].name}</h5>
                <h6>${area}</h6>
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


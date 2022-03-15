let clientInput = "boxer";
const button = document.querySelector(".btn");

function hydrateContainer(breed,bgd,lsd,bw,bt) {
    let breedData = document.querySelector(".breed-data");    
    breedData.innerHTML = breed;

    let bgData = document.querySelector(".breed-group-data");
    bgData.innerHTML = bgd;

    let lsData = document.querySelector(".breed-life-span");
    lsData.innerHTML = lsd;

    let bwData = document.querySelector(".breed-weight");
    bwData.innerHTML = bw;

    let btData = document.querySelector(".breed-temperament");
    btData.innerHTML = bt;
}

const fetchDogInfo = async(e) => {
e.preventDefault();

let clientInput = document.querySelector(".search").value;

const apiKey = "4fe7d4aa-db34-4dc2-b1cd-9fde99095ca2";
    try{
        const url = `https://api.thedogapi.com/v1/breeds/search?q=${clientInput}`;
        const res = await fetch(url,{
            method:"GET",
            withCredentials:true,
            headers: {
                "Content-Type": "application/json",
                "x-api-key":`${apiKey}`
            }
        });
        const data = await res.json();
        console.log(data)
        let dataName = data[0].name;
        let dataBreedGroup = data[0].breed_group;
        let dataLifeSpan = data[0].life_span;
        let dataWeight = data[0].weight.imperial;
        let dataTemperament = data[0].temperament;
        hydrateContainer(dataName,dataBreedGroup,dataLifeSpan,dataWeight,dataTemperament);
    }catch(error){
        console.log(error)
    }
 } 

button.addEventListener("click",fetchDogInfo);

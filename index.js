/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

//function to create freelancer object.
function makeFreelancer() {
  // TODO
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =  OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const price = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min) + PRICE_RANGE.min);
  return {name, occupation, price};
}

//variable and loop to create and hold NUM_FREELANCERS number of the freelancer object.
const freelanceContractors = [];
for(let i = 0; i < NUM_FREELANCERS; i++){
    freelanceContractors[i] = makeFreelancer();
}

//function to find the average price of freelancers
function averageCost(freelanceContractor){
    let sum = freelanceContractor.reduce((acc, el) => {
        return acc + el.price;
    }, 0);
    return sum / freelanceContractor.length; 
}
//variable to hold average price of feelancers
let AveragePrice = averageCost(freelanceContractors);

// == Components ==

function singleFreelancer(freelanceContractor){
    const $card = document.createElement("figure");
    $card.classList.add("individual");
    $card.innerHTML = `
    <p>${freelanceContractor.name}</p>
    <p>${freelanceContractor.occupation}</p>
    <p>${freelanceContractor.price}</p>
    `;
    return $card;
}
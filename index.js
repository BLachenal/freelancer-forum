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
 
function makeFreelancer() {
  // TODO
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =  OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const price = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min) + PRICE_RANGE.min);
  return {name, occupation, price};
}
const freelanceContractor = [];
for(let i = 0; i < NUM_FREELANCERS; i++){
    freelanceContractor[i] = makeFreelancer();
}
function averageCost(freelanceContractor){
    let sum = freelanceContractor.reduce((acc, el) => {
        return acc + el.price;
    }, 0);
    return sum / freelanceContractor.length; 
}
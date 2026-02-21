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

//function to create a single freelancer in hmtl
function singleFreelancer(freelanceContractor){
    const $tableRow = document.createElement("tr");
    $tableRow.classList.add("individual");
    $tableRow.innerHTML = `
    <th>${freelanceContractor.name}</th>
    <td>${freelanceContractor.occupation}</td>
    <td>${freelanceContractor.price}</td>
    `;
    return $tableRow;
}

//function to create the entire table of freelancers
function tableOfFreelancers(){
    const $table = document.createElement("tbody");
    $table.classList.add("individuals");

    const $individuals = freelanceContractors.map(singleFreelancer);
    $table.replaceChildren(...$individuals);
    return $table;
}

//function to render everything on screen.
function render(){
    const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <h3>Average cost: $${AveragePrice.toFixed(2)}</h3>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Occupation</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody id="FreelancerRows"></tbody>
    </table>
  `;
  $app.querySelector("#FreelancerRows").replaceWith(tableOfFreelancers());

}
render();

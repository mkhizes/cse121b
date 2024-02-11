/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement=document.getElementById('temples');
let templeList=[];
const url="https://jsonplaceholder.org/users";

/* async displayTemples Function */
const displayTemples=(URL)=>{
    templesElement.forEach((URL)=>{
        
    let articleElement=document.createElement('article');

    let h3Element=document.createElement('h3');
    h3Element.textContent=temple.templeName;


    let imgElement=document.createElement('img');
    imgElement.src=temple.imageUrl;
    imgElement.alt=temple.location;

    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);
    });
};
// Async arrow function expression to get temples
const getTemples=async(URL)=>{
    try{

const response=await fetch(URL)

templeList=await response.json();

displayTemples(templeList);
    } catch(error){
      console.error('Error fetching or display temples data:',error)  
    }
};

  // Async arrow function expression to process temples
  const processTemples = async (URL) => {
    const templesData = await fetchTemplesData(url);

    // Update the global templeList array with the fetched data
    templeList = templesData;

    // Process each temple in the templeList array
    templeList.forEach((temple) => {
      // Perform actions for each temple item
      console.log('Temple Name:', temple.templeName);
      console.log('Temple Image URL:', temple.imageUrl);
      console.log('Temple Location:', temple.location);
      console.log('------------------------');
    });
  };

  // Call the processTemples function
  processTemples();

/* async getTemples Function using fetch()*/


/* reset Function */
// Step 8: Function to reset displayed temples
const reset = () => {
    // Clear all <article> elements from the templesElement
    templesElement.innerHTML = '';
  };

/* filterTemples Function */

//Function to filter temples based on selected criteria
const filterTemples = (temples) => {
    // Call the reset function to clear the output
    reset();
  
    // Define a variable named filter that obtains the value of the HTML element with the ID 'filtered'
let filter = document.getElementById('filtered').value;
  
    // Use a switch statement to handle different filter cases
    switch (filter) {
      case 'utah':
        // Filter for temples in Utah
        displayTemples(temples.filter(temple => temple.location.includes('Utah')));
        break;
      case 'nonutah':
        // Filter for temples outside Utah
        displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
        break;
      case 'older':
        // Filter for temples built before 1950
        displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
        break;
      case 'all':
      default:
        // No filter, display all temples
        displayTemples(temples);
        break;
    }
  };

getTemples();

/* Event Listener */
// Step 10: Add a change event listener to the HTML element with the ID 'filtered'
document.getElementById('filtered').addEventListener('change', () => {
    // Call the filterTemples function with the templeList as the argument
    filterTemples(templeList);
  });
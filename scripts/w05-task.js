/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement=document.getElementById('temples');
const templeList=[];

/* async displayTemples Function */
const displayTemples=(temple)=>{
    const templeList =document.querySelector("ul")
    temples.forEach((temple)=>{
        
    const articleElement=document.createElement('article');

    const h3Element=document.createElement('h3');
    h3Element.textContent=temple.templeName;


    const imgElement=document.createElement('img');
    imgElement.src=temple.imageUrl;
    imgElement.alt=temple.location;

    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);
    // Append the <article> element to the global templesElement
    templesElement.appendChild(articleElement);
    });
};
// Async arrow function expression to get temples
const getTemples=async()=>{
    try{

const response=await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json')

templeList=await response.json();

displayTemples(templeList);
    } catch(error){
      console.error('Error fetching or display temple data:',error); 
    }
};

//   // Async arrow function expression to process temples
//   const processTemples = async () => {
//     const templesData = await fetchTemplesData();

//     // Update the global templeList array with the fetched data
//     templeList = templesData;

//     // Process each temple in the templeList array
//     templeList.forEach((temple) => {
//       // Perform actions for each temple item
//       console.log('Temple Name:', temple.templeName);
//       console.log('Temple Image URL:', temple.imageUrl);
//       console.log('Temple Location:', temple.location);
//       console.log('------------------------');
//     });
//   };

//   // Call the processTemples function
//   processTemples();

// /* async getTemples Function using fetch()*/


/* reset Function */
const reset = () => {
    // Clear all <article> elements from the templesElement
    templesElement.innerHTML = '';
  };

/* filterTemples Function */
const filterTemples = (temples) => {
    // Call the reset function to clear the output
    reset();
  
    // Define a variable named filter that obtains the value of the HTML element with the ID 'filtered'
var filter = document.getElementById('filtered').value;
  
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


/* Event Listener */
// Step 10: Add a change event listener to the HTML element with the ID 'filtered'
document.getElementById('filtered').addEventListener('change', () => {
    // Call the filterTemples function with the templeList as the argument
    filterTemples(templeList);
  });

  getTemples();
/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Brother Sizwe Aquill Xolani Mkhize";
const currentYear = new Date().getFullYear();//"2024"
const profilePicture = "images/Sizwe_Mkhize_photo.png";


/* Step 3 - Element Variables */
const nameElement = document.querySelector("#name");
const foodElement = document.querySelector("#food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
yearElement.textContent=currentYear,
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `This is ${fullName}. He is Brother Blazzard cse 121b student in BYU-Idaho online degree program`);
nameElement.innerHTML = (`<strong>${fullName}</strong>`);


/* Step 5 - Array */
let favfoods = ["Beef Curry and Rice", "Steambread and beans", 
"Butternut Salad", "Cheesecake", "Chocolate pudding", "Steak", 
"Pork loin", "Ice Cream"];
document.getElementById("food").innerHTML=favfoods;
let newfood=",Coleslaw"
food.append(newfood)
foodElement.innerHTML+=`<br>${favfoods}`;






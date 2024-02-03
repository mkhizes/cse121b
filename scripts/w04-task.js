/* LESSON 4 - Programming Tasks */
let photoElement=document.querySelector('#photo');
/* Profile Object  */
let myProfile={
    name:'Sizwe Mkhize',
    photo:{
        scr:"images/Sizwe_Mkhize_photo.png",
        alt:'my Profile Picture'
    },
    favouriteFoods:['Beef Curry and Rice',
                    'Steambread and beans',
                    'Butternut Salad',
                    'Cheesecake','Chocolate pudding',   
                    'Steak','Pork loin','Ice Cream',
                    'Coleslaw'],
    hobbies:['playing soccer','dancing','reading'],
    placesLived:[]
};

document.querySelector('#name').textContent=myProfile.name
/*const photoElement=document.getElementById('photo');
const photoElement=document.getElementById('photo');



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place:'Kwazulu-Natal',
    length:'41 years',

    place:'Gauteng',
    length:'3 years',

    place:'East London',
    length:'1 year',

    place:'Windhoek-Namibia',
    length:'1/2 year',


    place:'Port Elizabeth',
    length:'1/2 years',

});

console.log(myProfile.placesLived);

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').innerHTML=myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src=myProfile.photo.src;
document.querySelector('#photo').alt=myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favouriteFoods.forEach(food=>{
    let li=document.createElement('li')
    li.textContent=food;
    document.querySelector('#favorite-foods').appendChild(li)
});

/* Hobbies List */


/* Places Lived DataList */



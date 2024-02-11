const url = "https://jsonplaceholder.org/users";
let results = null;

async function getUsers(URL) {
  const response = await fetch(URL);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    console.log(data);
    displayUsers(data)
  }
};
    // doStuff(data);
function displayUsers(data){
    const users =document.querySelector('ul');
    data.forEach(users=>{
        const listItem=document.createElement('li');
        listItem.textContent=`${user.fisrtname}  ${users.lastname} | ${users.birthDate}`;
        userlist.appendChild(listItem);
    });
}
    getUsers(url);
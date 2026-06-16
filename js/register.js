import {
validateName,
validateEmail,
validatePassword
}
from "./validation.js";

const form =
document.querySelector("#registerForm");

const result =
document.querySelector("#result");

form.addEventListener(
"submit",
async function(e){

e.preventDefault();

const name =
document.querySelector("#name").value;

const email =
document.querySelector("#email").value;

const password =
document.querySelector("#password").value;

if(!validateName(name)){
result.textContent =
"Nama tidak sah";
return;
}

if(!validateEmail(email)){
result.textContent =
"Email tidak sah";
return;
}

if(!validatePassword(password)){
result.textContent =
"Password minimum 6 aksara";
return;
}

try{

const response =
await fetch(
"https://jsonplaceholder.typicode.com/users",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
email
})
}
);

const data =
await response.json();

result.innerHTML =
`<h3>Berjaya Daftar</h3>`;

}
catch(error){

result.textContent =
"Ralat Sambungan API";

}

});
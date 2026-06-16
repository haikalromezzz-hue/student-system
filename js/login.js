const form =
document.querySelector("#loginForm");

const result =
document.querySelector("#result");

form.addEventListener(
"submit",
function(e){

e.preventDefault();

const username =
document.querySelector("#username").value;

const email =
document.querySelector("#email").value;


if(username === ""){
result.textContent =
"Sila masukkan username";
return;
}

if(email === ""){
result.textContent =
"Sila masukkan email";
return;
}

result.innerHTML =
"<h3>Login Berjaya</h3>";

});
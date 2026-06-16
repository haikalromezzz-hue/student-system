const form =
document.querySelector("#loginForm");

const result =
document.querySelector("#result");

form.addEventListener(
"submit",
function(e){

e.preventDefault();

const email =
document.querySelector("#email").value;

const password =
document.querySelector("#password").value;

if(email === ""){
result.textContent =
"Sila masukkan email";
return;
}

if(password === ""){
result.textContent =
"Sila masukkan password";
return;
}

result.innerHTML =
"<h3>Login Berjaya</h3>";

});
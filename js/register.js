import {
  validateName,
  validateUsername,
  validateEmail
} from "./validation.js";

const form = document.querySelector("#registerForm");
const result = document.querySelector("#result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  console.log("FORM SUBMIT OK");

  const name = document.querySelector("#name").value.trim();
  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();

  if (!validateName(name)) {
    result.textContent = "Nama tidak sah";
    return;
  }

  if (!validateUsername(username)) {
    result.textContent = "Username anda salah";
    return;
  }

  if (!validateEmail(email)) {
    result.textContent = "Email tidak sah";
    return;
  }

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          username,
          email
        })
      }
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();

    console.log("API RESPONSE:", data);

    result.innerHTML = `
      <h3 style="color:green;">Berjaya Daftar ✅</h3>
      <p>Nama: ${name}</p>
      <p>Email: ${email}</p>
    `;

    form.reset();

  } catch (error) {
    console.error(error);
    result.textContent = "Ralat Sambungan API";
  }
});
const form = document.querySelector("#registerForm");
const result = document.querySelector("#result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("FORM SUBMIT FIRED");

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const passwordEl = document.querySelector("#password");

  if (!passwordEl) {
    result.textContent = "Password input missing dalam HTML";
    return;
  }

  const password = passwordEl.value.trim();

  if (name === "") {
    result.textContent = "Nama diperlukan";
    return;
  }

  if (email === "") {
    result.textContent = "Email diperlukan";
    return;
  }

  if (password.length < 6) {
    result.textContent = "Password minimum 6 aksara";
    return;
  }

  let students = JSON.parse(localStorage.getItem("students")) || [];

  students.push({
    name,
    email,
    source: "local"
  });

  localStorage.setItem("students", JSON.stringify(students));

  result.innerHTML = `<h3 style="color:green;">Berjaya Daftar ✅</h3>`;

  setTimeout(() => {
    window.location.href = "search.html";
  }, 1000);
});
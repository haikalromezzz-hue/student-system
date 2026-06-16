const form = document.querySelector("#registerForm");
const result = document.querySelector("#result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  // 🧪 SIMPLE VALIDATION
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

  // 💾 GET EXISTING DATA
  let students = JSON.parse(localStorage.getItem("students")) || [];

  // ➕ ADD NEW STUDENT
  students.push({
    name,
    email,
    source: "local"
  });

  // 💽 SAVE BACK TO LOCALSTORAGE
  localStorage.setItem("students", JSON.stringify(students));

  // 🎉 SUCCESS MESSAGE
  result.innerHTML = `
    <h3 style="color:green;">Berjaya Daftar ✅</h3>
    <p>Nama: ${name}</p>
    <p>Email: ${email}</p>
  `;

  // 🧹 RESET FORM
  form.reset();

  console.log("STUDENT SAVED:", students);
});
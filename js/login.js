const form = document.querySelector("#loginForm");
const result = document.querySelector("#result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();

  // validation kosong
  if (username === "") {
    result.textContent = "Sila masukkan username";
    return;
  }

  if (email === "") {
    result.textContent = "Sila masukkan email";
    return;
  }

  // ambil data register dari localStorage
  const students = JSON.parse(localStorage.getItem("students")) || [];

  // cari match user
  const user = students.find(
    student =>
      student.name.toLowerCase() === username.toLowerCase() &&
      student.email.toLowerCase() === email.toLowerCase()
  );

  // kalau jumpa
  if (user) {
    result.innerHTML = `
      <h3 style="color:green;">Login Berjaya ✅</h3>
      <p>Selamat datang, ${user.name}</p>
    `;
  } 
  // kalau tak jumpa
  else {
    result.innerHTML = `
      <h3 style="color:red;">Login Gagal ❌</h3>
      <p>Username atau email tidak padan</p>
    `;
  }
});
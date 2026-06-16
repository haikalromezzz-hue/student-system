const form = document.querySelector("#loginForm");
const result = document.querySelector("#result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();

  // VALIDATION KOSONG
  if (username === "") {
    result.textContent = "Sila masukkan username";
    return;
  }

  if (email === "") {
    result.textContent = "Sila masukkan email";
    return;
  }

  // AMBIL DATA REGISTER
  const students = JSON.parse(localStorage.getItem("students")) || [];

  console.log("INPUT LOGIN:", username, email);
  console.log("LOCAL DATA:", students);

  // CARI MATCH (NAME + EMAIL)
  const user = students.find(student =>
    student.name.toLowerCase().trim() === username.toLowerCase().trim() &&
    student.email.toLowerCase().trim() === email.toLowerCase().trim()
  );

  // JIKA JUMPA
  if (user) {
    result.innerHTML = `
      <h3 style="color:green;">Login Berjaya ✅</h3>
      <p>Selamat datang, ${user.name}</p>
    `;
  }
  // JIKA TAK JUMPA
  else {
    result.innerHTML = `
      <h3 style="color:red;">Login Gagal ❌</h3>
      <p>Username atau email tidak sepadan</p>
    `;
  }
});
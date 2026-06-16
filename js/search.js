const btn = document.querySelector("#searchBtn");
const list = document.querySelector("#studentList");
const input = document.querySelector("#searchInput");

btn.addEventListener("click", async function () {
  console.log("SEARCH TRIGGERED");

  const keyword = input.value.toLowerCase().trim();

  list.innerHTML = "Loading...";

  try {
    // 🌐 API DATA
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const apiStudents = await response.json();

    // 💾 LOCAL STORAGE DATA (pelajar daftar)
    const localStudents = JSON.parse(localStorage.getItem("students")) || [];

    // 🔗 COMBINE DATA
    const allStudents = [
      ...apiStudents,
      ...localStudents
    ];

    // 🔍 FILTER SEARCH
    const result = allStudents.filter(student =>
      student.name.toLowerCase().includes(keyword)
    );

    // ❌ NO RESULT
    if (result.length === 0) {
      list.innerHTML = "Tiada data dijumpai";
      return;
    }

    // 🧹 CLEAR LIST
    list.innerHTML = "";

    // 🎯 DISPLAY RESULT
    result.forEach(student => {
      list.innerHTML += `
        <div class="card">
          <h3>${student.name}</h3>
          <p>${student.email || "Tiada email"}</p>
          <small>${student.source || "API"}</small>
        </div>
      `;
    });

  } catch (error) {
    console.error(error);
    list.innerHTML = "Ralat API";
  }
});
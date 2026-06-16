const btn = document.querySelector("#searchBtn");
const list = document.querySelector("#studentList");

btn.addEventListener("click", async function () {
  console.log("CLICK OK");

  const keyword = document
    .querySelector("#searchInput")
    .value
    .toLowerCase();

  list.innerHTML = "Loading...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const students = await response.json();

    const result = students.filter(student =>
      student.name.toLowerCase().includes(keyword)
    );

    if (result.length === 0) {
      list.innerHTML = "Tiada data dijumpai";
      return;
    }

    list.innerHTML = "";

    result.forEach(student => {
      list.innerHTML += `
        <div class="card">
          <h3>${student.name}</h3>
          <p>${student.email}</p>
        </div>
      `;
    });

  } catch (error) {
    console.error(error);
    list.innerHTML = "Ralat API";
  }
});
const button = document.getElementById("loadUsers");
const container = document.getElementById("userContainer");
const loading = document.getElementById("loading");

button.addEventListener("click", fetchUsers);

async function fetchUsers() {
  container.innerHTML = "";
  loading.textContent = "Loading users...";
  for (let i = 1; i <= 6; i++) {
    const res = await fetch("https://randomuser.me/api/?results=1");

    const data = await res.json();

    const user = data.results[0];

    createUserCard(user);
  }
  loading.textContent = "";
}

function createUserCard(user) {
  const card = document.createElement("div");

  card.className = "user-card";

  card.innerHTML = `
    <img src="${user.picture.large}" class="avatar">

        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.email}</p>
    `;

  container.appendChild(card);
}

localStorage.setItem("name", "shubham");
const name = localStorage.getItem("name");
console.log(name);

const person = {
  name: "shubham",
  skills: "Frontend Expert",
};
localStorage.setItem("person", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("person")));

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  const name2 = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  localStorage.setItem("name2", name2);
  localStorage.setItem("email", email);
});

document.addEventListener("DOMContentLoaded", () => {
  const name2 = document.getElementById("name");
  const email = document.getElementById("email");
  name2.value = localStorage.getItem("name2");
  email.value = localStorage.getItem("email");
});

localStorage.removeItem("name");

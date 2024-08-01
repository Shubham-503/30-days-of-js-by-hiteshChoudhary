sessionStorage.setItem("name", "shubham");
const name = sessionStorage.getItem("name");
console.log(name);

const person = {
  name: "shubham",
  skills: "Frontend Expert",
};
sessionStorage.setItem("person", JSON.stringify(person));
console.log(JSON.parse(sessionStorage.getItem("person")));

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  const name2 = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  sessionStorage.setItem("name2", name2);
  sessionStorage.setItem("email", email);
});

document.addEventListener("DOMContentLoaded", () => {
  const name2 = document.getElementById("name");
  const email = document.getElementById("email");
  name2.value = sessionStorage.getItem("name2");
  email.value = sessionStorage.getItem("email");
});

sessionStorage.removeItem("name");

function AddData(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);

  console.log("localStorage: ", localStorage.getItem(key));
  console.log("sessionStorage: ", sessionStorage.getItem(key));
}

AddData("temp", "temp");

function clearStorage() {
  localStorage.clear();
  sessionStorage.clear();

  const isLocalStorageEmpty = localStorage.length === 0;
  const isSessionStorageEmpty = sessionStorage.length === 0;

  console.log("Is localStorage empty?", isLocalStorageEmpty);
  console.log("Is sessionStorage empty?", isSessionStorageEmpty);
}

clearStorage();

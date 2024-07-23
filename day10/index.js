const btnToggle = document.querySelector(".btn-toggle");
btnToggle.addEventListener("click", () => {
  console.log("button clicked");
  const para = document.querySelector(".para1");
  para.innerText = "new Text content";
});

btnToggle.addEventListener("dblclick", () => {
  const img = document.querySelector(".img");
  console.log("dbClick", img);
  if (img.style.display === "block") img.style.display = "none";
  else img.style.display = "block";
});

// Activity 2
const para = document.querySelector(".para1");
para.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "red";
});
para.addEventListener("mouseout", (e) => {
  e.target.style.backgroundColor = "white";
});

// Activity 3
document.querySelector("#input").addEventListener("keydown", (e) => {
  console.log(e.key);
});
document.querySelector("#input").addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

// Activity 4
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  const formData = new FormData(form);
  for (const pair of formData.entries()) {
    console.log(pair);
  }
});
document.getElementById("city").addEventListener("change", (e) => {
  console.log(e.target.value);
});

// Activity 5
document.querySelector("#myList").addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    console.log(e.target.textContent);
  }
});

// Activity 6
const liEl = document.createElement("li");
liEl.textContent = "Dynamic List";

document.querySelector("#myList").append(liEl);

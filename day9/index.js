document.querySelector("#id1").innerText = "new Content";
document.querySelector(".class1").style.backgroundColor = "blue";
const newDiv = document.createElement("div");
newDiv.innerText = "innerText is new created";

document.getElementsByTagName("body")[0].append(newDiv);

const liEl = document.createElement("li");
liEl.innerText = "li element 1";
document.getElementsByTagName("ul")[0].append(liEl);
document.querySelector(".class1").remove();

const body = document.getElementsByTagName("body")[0];
body.removeChild(body.lastChild);

document.querySelector("#id1").setAttribute("title", "ID 1");

body.classList.add("newClass");
body.classList.remove("newClass");
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  document.querySelector("#id1").style.backgroundColor = "#123edc";
});

document.querySelector("#id1").addEventListener("mouseover", (e) => {
  console.log(e);
  e.target.style.backgroundColor = "red";
});

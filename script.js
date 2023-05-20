
//   e.target.style["background-color"] = "blue";
// that code seems redundant ,but if we want to be able to remove items before adding any,then i think this is the only way
let list = Array.from(document.getElementsByTagName("span"));
list.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.parentElement.style.display = "none";
    document.getElementById("one").lastElementChild.style.color = "red";
  });
});

document.body.querySelector("button").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("is it working");
  let con = document.forms[0].firstElementChild.value;
  let li = document.createElement("li");
  li.innerHTML = con + "<span>X</span>";
  document.getElementById("one").appendChild(li);
  // console.log(li.textContent.slice(0,-1));

  // removing an element from the list

  let list = Array.from(document.getElementsByTagName("span"));
  list.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.target.parentElement.style.display = "none";
      document.getElementById("one").lastElementChild.style.color = "red";
    });
  });
});

// Searching for an item
document.body.querySelector("input").addEventListener("input", function (e) {
  // console.log(e.target.value);
  let list = Array.from(document.getElementsByTagName("li"));
  // console.log(list);
  list.forEach((li) => {
    // li.innerText.slice(0, -1);
    // console.log(li.firstChild.nodeValue);
    if (! li.firstChild.nodeValue.includes(e.target.value)) li.style.display = "none";
    else
    li.style.display = "block";
  });
});

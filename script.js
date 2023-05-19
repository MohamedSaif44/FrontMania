// document.getElementById("one").addEventListener("mouseenter", function (e) {
// //   console.log("mouse enter");
// //   console.log(e.target);
// // });

// // document.getElementById("one").addEventListener("mouseover", function (e) {
// //   console.log("mouse over");
// //   console.log(e.target);
// // });

// document.getElementById("one").addEventListener("mouseenter", function (e) {
//   console.log("mouse enter");
//   console.log(e.target);

//   e.target.style["background-color"] = "blue";
// });

// document.getElementById("one").addEventListener("mouseover", function (e) {
//   console.log("mouse over");
//   e.target.style.color = "white";
//   e.target.style.border = "4px double black";
//   // setTimeout(() => {
//   //   e.target.style.color = "";
//   //   e.target.style.border = "";
//   // }, 500);
//   console.log(e.target);
// });

// document.getElementById("one").addEventListener("mouseout", function (e) {
//   console.log("mouse out");
//   setTimeout(() => {
//     e.target.style.color = "";
//     e.target.style.border = "";
//   }, 70);
//   console.log(e.target);
// });
// that code seems redundant ,but if we want to be able to remove items before adding any,then i think this is the only way
let list = Array.from(document.getElementsByTagName("span"));
list.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.parentElement.style.display = "none";
    document.getElementById("one").lastElementChild.style.color = 'red';
  });
});

document.body.querySelector("button").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("is it working");
  let con = document.forms[0].firstElementChild.value;
  let li = document.createElement("li");
  li.innerHTML = con + "<span>X</span>";
  document.getElementById("one").appendChild(li);

  // removing an element from the list

  let list = Array.from(document.getElementsByTagName("span"));
  list.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.target.parentElement.style.display = "none";
      document.getElementById("one").lastElementChild.style.color = 'red';
      
    });
  });
});

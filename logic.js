/* const box = document.querySelector(".box");
const body = document.querySelector("body");
let R = Math.random() * 256;
let G = Math.random() * 256;
let B = Math.random() * 256;

box.style.backgroundColor = `rgb(${R},${G},${B})`;

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let x = Math.round(Math.random()*9);
box.innerHTML = arr[x];

const DATE = new Date();
console.log(DATE);
 */

// A to do list app 
const btn = document.querySelector("#btn");
const container = document.querySelector(".main");
const done_container = document.querySelector("#done");


// this code fetch data from localstorage and craete task divs

let n = localStorage.length;
let count = 1;
let arr = [];
let task1;

for(let i=1; i<=n; i++){
    arr.push(localStorage[count]);
    task1 = document.createElement("div");
    task1.setAttribute("class", "tasks");
    task1.innerHTML = arr[count - 1];
    container.appendChild(task1);

    check = document.createElement("input");
    check.setAttribute("type", "radio");
    check.setAttribute("class", "radio");
    task1.prepend(check);
    count +=1;
}

// this code add tasks on list
let count_2 = n+1;

function addEvents() {
  btn.addEventListener("click", () => {
    const data = document.querySelector("#event");
    let data_value = data.value;
    localStorage.setItem(count_2, data_value);
    
    task1 = document.createElement("div");
    task1.setAttribute("class", "tasks");
    task1.innerHTML = data_value;
    container.appendChild(task1);

    check = document.createElement("input");
    check.setAttribute("type", "radio");
    check.setAttribute("class", "radio");
    task1.prepend(check);
    
    count_2 += 1;
  });
}

addEvents();
/* 
let move = task1.querySelector("input");
*/

let move = container.querySelectorAll("input");
move.forEach(x => {
  x.addEventListener("click", () => {
    let remove = x.parentNode;
    remove.setAttribute("class", "done");
    container.removeChild(remove);
    done_container.appendChild(remove);
  });
});


/* taskElement.classList.add("done");
taskElement.querySelector(".radio").disabled = true; // Disable radio button
done_container.appendChild(taskElement); */

// logic for clear all data

const clear_btn = document.querySelector("#clear_btn");

clear_btn.addEventListener("click", () => {
    localStorage.clear();
    arr.values = null;
    // for main container
    while(container.children.length > 1){
        container.removeChild(container.lastChild);
    }
    //for task done container
    while(done_container.children.length > 1){
      done_container.removeChild(done_container.lastChild);
    }

});



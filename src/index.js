document.addEventListener("DOMContentLoaded", (e) => {
  let form = document.querySelector("form");
    addEventListener("submit", (e) => {
      e.preventDefault();
      const taskDescription = document.getElementById("new-task-description");
      console.log(taskDescription.value);
      createTaskList(taskDescription.value);
      form.reset();
  })
});

function createTaskList (tasks){
  let p = document.createElement("p");
  p.textContent = `${tasks} `;
  console.log(`${document.querySelector("select").value}`);
    function selectFontColor()  {
      if (`${document.querySelector("select").value}` ==="Get On This Now!!!") {
        p.className = "red";
        p.textContent.red;
      }
      if (document.querySelector("select").value==="Do This Tomorrow!") {
        p.className = "yellow";
        p.textContent.yellow;
      }
      if (document.querySelector("select").value==="When You Get around to it...") {
        p.className = "green";
        p.textContent.green;
      }
    }
  selectFontColor(p.textContent);
  console.log(p.textContent);
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  btn.textContent = "x";
  p.appendChild(btn);
  document.querySelector("#tasks").appendChild(p);
}

function handleDelete(e){
  e.target.parentNode.remove();
}



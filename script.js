const dateQuery = document.querySelector(".date_title");
const formattedDate = new Date().toLocaleDateString("en-CA");
dateQuery.textContent = formattedDate;

function addItem() {
  const taskInput = document.querySelector(".input_task");

  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a valid task!");
    return;
  }

  const newTask = document.createElement("div");
  newTask.classList.add("list_container");

  newTask.innerHTML = `
    <input type="radio" name="task" class="radio_task">
    <span class="task_text">${taskText}</span>
    <span class="star">★</span>
    <button class="add_item delete_btn">Del</button>
  `;

  const tasksContainer = document.getElementById("tasks");
  tasksContainer.appendChild(newTask);

  taskInput.value = ""; //input box clear

  // Add event listener for the radio button
  const radioButton = newTask.querySelector(".radio_task");
  radioButton.addEventListener("change", function () {
    const taskTextElement = newTask.querySelector(".task_text");
    if (radioButton.checked) {
      taskTextElement.style.textDecoration = "line-through"; // Apply strikethrough
      taskTextElement.style.color = "gray";
    } else {
      taskTextElement.style.textDecoration = "none"; // Remove strikethrough
    }
  });

  const starCheck = newTask.querySelector(".star");
  starCheck.addEventListener("click", function () {
    if (starCheck.style.color === "gold") {
      starCheck.style.color = "black"; // Remove star color
    } else {
      starCheck.style.color = "gold"; // Add star color
    }
  });

  const deleteButton = newTask.querySelector(".delete_btn");
  deleteButton.addEventListener("click", function () {
    tasksContainer.removeChild(newTask); // Remove the task from the list
  });
}

document
  .getElementById("imageFile")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("downloadImage").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

// // Play sound when a task is added
// const taskAddedSound = new Audio('taskAddedSound.mp3'); // Replace with your sound file URL
// taskAddedSound.play();

const submitForm = document.getElementById("Submit-form");
const editForm = document.getElementById("Edit-form");
const tasks = document.getElementById('task_list');

tasks.addEventListener('click', (e) => {
    const edit = e.target;
    editForm.childNodes[1].action = editForm.childNodes[1].action + (edit.value);

    editForm.classList.toggle("hide");
    submitForm.classList.toggle("hide");
    
    const oldtask = edit.parentElement.innerText.split("\n")[0];
    editForm.childNodes[1].childNodes[1].value = oldtask;
})


// time
const time = document.getElementById('time');
const currentDate = document.getElementById('currentDate');
setInterval(() => {
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString();
    currentDate.innerHTML = date.toDateString();
},1000)


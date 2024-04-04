const userInput = document.querySelector('#userItems');
const msg = document.querySelector('.msg');
const items = document.querySelector('.items-list');
const sub_btn = document.getElementById('btn');
const add_btn = document.getElementById('btn2');

//console.log(userInput);
sub_btn.addEventListener('click', calling);

function calling(event) {
    if(event.target.innerHTML === "Submit")
    {
        if (userInput.value === "") {
            alert("Please enter your task!");
        }
        if (userInput.value !== "") {
            printMsg();
        }
    }
};

function printMsg() {
    msg.innerHTML = "task added successfully!";
    display();
};

function display() {
    //console.log(userInput.value);
    const input = userInput.value;
    userInput.value = "";
    addTask(input);
}

function addTask(input) {
    let newEle = document.createElement('div');
    newEle.className = "item";
    newEle.innerHTML = `<span>${input}</span>
                        <button type="submit" class="btnEditOrDelete" for="item" >Edit</button>
                        <button type="submit" class="btnEditOrDelete" for="item" >Delete</button>`;
    items.appendChild(newEle);
    userInput.setAttribute('disabled', '');
}

//add function:
add_btn.addEventListener('click', function () {
    //console.log(editing);
    if (sub_btn.innerHTML === "Edit") {
        sub_btn.removeEventListener('click', editing);
        sub_btn.addEventListener('click', calling);
    }
    userInput.removeAttribute('disabled');
    sub_btn.setAttribute('for', 'userItems');
    sub_btn.innerHTML = "Submit";
    msg.innerHTML = "";
});


let editing;
items.addEventListener('click', function (event) {
    //console.log('hiiiuuu');
    //console.log(event.target);
    //console.log(selNode.parentNode);
    const selNode = event.target;
    const modNode = selNode.parentNode;
    if(selNode.innerHTML === "Edit") {
        // when multilpal times edited button clicked!
        if(sub_btn.innerHTML !== "Submit")
        {
            if (sub_btn.innerHTML === "Edit") {
                sub_btn.removeEventListener('click', editing);
                sub_btn.addEventListener('click', calling);
            }
            userInput.removeAttribute('disabled');
            sub_btn.setAttribute('for', 'userItems');
            //sub_btn.innerHTML = "Submit";
            msg.innerHTML = "";
        }
        //edited(modNode);
        console.log("edited");
        console.log("1");
        userInput.removeAttribute('disabled');
        console.log("2");
        //console.log(modNode.firstChild.innerHTML);
        let editMsg = modNode.firstChild.innerHTML;
        userInput.value = editMsg + userInput.value;
        
        sub_btn.innerHTML = "Edit";
        sub_btn.removeEventListener('click', calling);

        editing = function () {
            if (!userInput.value) {
                alert("Please enter your task!");
            }else{
                modNode.firstChild.innerHTML = userInput.value;
                userInput.value = "";
                userInput.setAttribute('disabled', '');
                msg.innerHTML = "task edited successfully!";
            }
        }

        sub_btn.addEventListener('click', editing);
    }

    if (selNode.innerHTML === "Delete") {
        const outerNode = modNode.parentNode;
        //console.log(outerNode);
        outerNode.removeChild(modNode);
        msg.innerHTML = "task deleted successfully!";
    }
});

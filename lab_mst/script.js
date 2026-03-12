let addBtn = document.getElementById("addbtn");
let list = document.getElementById("expenseList");
let totalDisplay = document.getElementById("total");

let total = 0;
let edit = null;

addBtn.addEventListener("click", function() {

    let name = document.getElementById("name").value;
    let amount = Number(document.getElementById("amount").value);
    let category = document.getElementById("category").value;

    if(name == "" || isNaN(amount)){
        alert("Enter valid details");
        return;
    }

    if(edit == null){

        let li = document.createElement("li");

        li.innerHTML = `
        ${name} - ${category} - ${amount}
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
        `;

        list.appendChild(li);

        total += amount;
        totalDisplay.innerText = total;

        li.querySelector(".delete").addEventListener("click", function(){
            list.removeChild(li);
            total -= amount;
            totalDisplay.innerText = total;
        });

        li.querySelector(".edit").addEventListener("click", function(){
            document.getElementById("name").value = name;
            document.getElementById("amount").value = amount;
            document.getElementById("category").value = category;

            edit = li;
        });

    } 
    else {

        edit.innerHTML = `
        ${name} - ${category} - ${amount}
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
        `;

        edit = null;
    }

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
});
let input = document.querySelector("input")
/*
to access the id write it with the # 
and to access it with the class then use .
*/
let btn = document.querySelector("button")

let list = document.querySelector("ol")

btn.addEventListener("click", taskHandler)

function taskHandler() {
    let data = input.value;

    if (data == "") {
        alert("Please Enter Task before adding")
        return
    }
    //creating a new element
    let li = document.createElement("li")

    let taskText = document.createElement("span")
    taskText.innerText = data
    /*
    two mathods to add data 
    inner text and inner HTML 
    in inner text - it will consider the tag H1 it wil consider it as a text
    in inner HTML - it will consider the tag H1 it wil consider it as a tag
    */

    let del = document.createElement("button")
    del.innerText = "Delete"

    del.addEventListener("click", function () {
        list.removeChild(li)
    })

    li.appendChild(taskText)
    li.appendChild(del)
    list.appendChild(li)
    input.value = ""

}



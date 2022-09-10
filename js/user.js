"use strict"

document.addEventListener('DOMContentLoaded', setupUserEmail, false);
let studentTable = document.querySelector("#student-table");
let addDataBtn = document.getElementById("add");
addDataBtn.addEventListener('click', addStudentData);

let dummyData = [
    ["1", "James", "XI", "A", "PCM", "2006-09-04"],
    ["2", "John", "XI", "A", "PCM", "2006-05-04"],
    ["3", "Ash", "XI", "B", "PCM", "2006-01-05"],
    ["4", "Adam", "XI", "A", "PCM", "2006-09-02"],
    ["5", "Skyler", "XI", "B", "PCM", "2006-05-01"],
    ["6", "Rahul", "XI", "C", "PCB", "2006-12-04"],
    ["7", "Robert", "XI", "C", "PCB", "2006-09-04"],
    ["8", "Chris", "XI", "C", "PCB", "2006-09-04"],
    ["9", "Jeremy", "XI", "C", "PCB", "2006-09-04"],
    ["10", "Clint", "XI", "A", "PCM", "2006-09-04"]
]

function addStudentData() {
    let data = document.querySelectorAll(".input-field");
    let newRow = document.createElement("tr");
    newRow.appendChild(document.createElement("td")).innerText = studentTable.rows.length.toString()
    for (let i = 0; i < data.length; i++) {
        if (validate(data[i])) {
            newRow.appendChild(document.createElement("td")).innerText = data[i].value;
        } else {
            alert("All the fields are mandatory, Please fill them all!");
            return;
        }
    }
    studentTable.appendChild(newRow);
    resetInputFields(data);
    scroll(0, 0)
}

function prePopulateData() {
    dummyData.forEach(current => {
        let newRow = document.createElement("tr");
        for (let i = 0; i < current.length; i++) {
            newRow.appendChild(document.createElement("td")).innerText = current[i];
        }
        studentTable.appendChild(newRow);
    })
}

function setupUserEmail() {
    document.getElementById("user-page").innerText = `Hello ${window.location.href.split("?")[1]}`;
    prePopulateData()
}

function resetInputFields(data) {
    for (let i = 0; i < data.length; i++) {
        data[i].value = "";
    }
}

function validate(data) {
    return data.value !== "" && data.value !== null;
}


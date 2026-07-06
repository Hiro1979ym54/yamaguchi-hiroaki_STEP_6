const textInput = document.getElementById("textInput");
const showBtn = document.getElementById("showBtn");
const addBtn = document.getElementById("addBtn");
const bgBtn = document.getElementById("bgBtn");
const displayArea = document.getElementById("displayArea");
const count = document.getElementById("count");
const tbody = document.querySelector("#dataTable tbody");

let bgIndex = 0;

const colors = [
    "lightblue",
    "lightgreen",
    "lightcoral"
];

function updateCount() {
    count.textContent = tbody.rows.length;

    if (tbody.rows.length >= 3) {
        showBtn.style.display = "none";
    } else {
        showBtn.style.display = "inline-block";
    }
}

showBtn.addEventListener("click", () => {

    const text = textInput.value.trim();

    if (text === "") {
        alert("入力値が空です。");
        return;
    }

    displayArea.textContent = text;

    displayArea.classList.toggle("highlight");
});

bgBtn.addEventListener("click", () => {

    document.body.style.backgroundColor = colors[bgIndex];

    bgIndex++;

    if (bgIndex >= colors.length) {
        bgIndex = 0;
    }
});

addBtn.addEventListener("click", () => {

    const text = textInput.value.trim();

    if (text === "") {
        alert("入力値が空です。");
        return;
    }

    const row = tbody.insertRow();

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";

    deleteBtn.addEventListener("click", () => {
        row.remove();
        updateCount();
    });

    cell2.appendChild(deleteBtn);

    while (tbody.rows.length > 3) {
        tbody.deleteRow(0);
    }

    updateCount();

    textInput.value = "";

    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
});
const container = document.querySelector(".container");

function makeRows() {
    container.style.setProperty("--grid-rows", 16);
    container.style.setProperty("--grid-cols", 16);
    for (let i = 0; i < (16 ** 2); i++) {
        let cell = document.createElement("div");
        cell.innerText = (i + 1);
        container.appendChild(cell).className = "grid-item";
    }
}

makeRows();
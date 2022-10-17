let buttons = document.getElementById("nrButtons").value;

function addButtons(buttons) {
    let winnerNumber = (Math.floor(Math.random() * buttons)) + 1;
    if (buttons >= 0 && buttons <= 10) {
        for (let i = 1; i <= buttons; ++i) {
            let btn = document.createElement("button");
            btn.innerHTML = "Click me !";
            btn.id = i;
            btn.className = "button";
            btn.onclick = function () {
                if (btn.id == winnerNumber) {
                    document.getElementById(btn.id).style.backgroundColor = "lightgreen";
                    alert("WINNER!");
                } else {
                    document.getElementById(btn.id).style.backgroundColor = "lightcoral";
                }
            };
            document.body.appendChild(btn);
        }
    } else {
        alert("Please introduce a number between 1 and 10 !")
    }
}

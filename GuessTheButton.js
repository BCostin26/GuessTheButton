let buttons = document.getElementById("nrButtons").value;

function addButtons(noButtons) {
    let winnerNumber = (Math.floor(Math.random() * noButtons)) + 1;
    if (noButtons >= 0 && noButtons <= 10) {
        for (let i = 1; i <= noButtons; ++i) {
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



//GAME PART

let CURRENT_PLAYER = "X"


let allCases = document.querySelectorAll(".case")
allCases.forEach(cell => {
    cell.addEventListener("click", function(event){
        event.target.innerText = CURRENT_PLAYER;
        if (CURRENT_PLAYER === "X"){
            CURRENT_PLAYER = "O";
        } else {
            CURRENT_PLAYER = 'X';
        }


    checkWin()
    }, {once: true});
});


function checkWin() {
    const values = [...allCases].map(cell => cell.innerText);
    console.log("VALUES", values)

    if (values[0] !== "" && values[0] === values[3] && values[0] === values[6]) {
        alert(`if1 = ${values[0]} wins !`)
    }
    if (values[0] !== "" && values[0] === values[1] && values[0] === values[3]) {
        alert(`if2 = ${values[0]} wins !`)
    }
    if (values[0] !== "" && values[0] === values[4] && values[0] === values[8]) {
        alert(`if=3 ${values[0]} wins !`)
    }
    if (values[1] !== "" && values[1] === values[4] && values[1] === values[7]) {
        alert(`if4 ${values[1]} wins !`)
    }
    if (values[2] !== "" && values[2] === values[5] && values[2] === values[8]) {
        alert(`if5 ${values[2]} wins !`)
    }
    if (values[2] !== "" && values[2] === values[4] && values[2] === values[6]) {
        alert(`if6 ${values[2]} wins !`)
    }
    if (values[3] !== "" && values[3] === values[4] && values[3] === values[5]) {
        alert(`if7 ${values[3]} wins !`)
    }
    if (values[6] !== "" && values[6] === values[7] && values[6] === values[8]) {
        alert(`if8 ${values[6]} wins !`)
    }
    if(values[0] !== "" && values[1] !== "" && values[2] !== "" && values[3] !== "" && values[4] !== "" && values[5] !== "" && values[6] !== "" && values[7] !== "" && values[8] !== ""){
        alert('Equality !')
    }
}
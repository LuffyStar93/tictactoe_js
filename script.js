

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












































//Momo Js
//var $text = $('.editor-text');

function set(txt) {
  // ajoute le nouvel élément créé et son contenu dans le DOM
  var currentDiv = document.querySelector("#editor").innerHTML = txt;
  
}

function slicer(str) {
    var sliced = [];
    for (var i = 0; i <= str.length; i++) {
        sliced.push(str.slice(0, i));
    }

    return sliced;
}

function pause (str, time) {
    // Return an array with time copies of str

    var strings = [];
    for (var i = 0; i < time; i++) {
        strings.push(str);
    }
    return strings;
}

function assemble(statements) {
    var slices = [];

    statements.forEach(function (stmt) {
        var sliced = slicer(stmt);
        var interstatementPause = pause("", 3);
        slices = slices.concat(sliced);

        // Pause on the completed statement
        slices = slices.concat(pause(stmt, 30));

        // Backspace it away
        // slices = slices.concat(sliced.reverse());
        slices = slices.concat(interstatementPause);
    });
    return slices;
}
// sentence Tab
var statements = [
    "You win...",
    "You lose...",
    "Again a party?...",
    "Are you here ?...",
    "Are you afraid to lose ?...",
]

function rand(min, max) {
    return min + Math.random() * (max - min) | 0;
}

var slices = assemble(statements);

function animate() {
    var current = slices.shift();
    set(current);
    slices.push(current);
    setTimeout(animate, rand(50, 250));
}

animate()
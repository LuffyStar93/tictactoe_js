// SECTION 1

let player_X = document.querySelector("#player_X") ;
let player_O = document.querySelector("#player_O") ;
let welcome_section = document.querySelector("#Welcome_section");
let game_section = document.querySelector("#Game_section");
let resultat_section = document.querySelector('#resultat_section');
let player = document.querySelector("#player");
let winner_text = document.querySelector("#winner")
let replay_button = document.querySelector("#replay");

let CURRENT_PLAYER = "";


player_X.addEventListener("click", () =>{
    CURRENT_PLAYER = "X"
    console.log(CURRENT_PLAYER);
    welcome_section.classList.add("display_none");
    game_section.classList.remove("display_none");
    player.innerText =`Joueur ${CURRENT_PLAYER} à toi de jouer`;
} )

player_O.addEventListener("click", () =>{
    CURRENT_PLAYER = "O"
    console.log(CURRENT_PLAYER);
    welcome_section.classList.add("display_none");
    game_section.classList.remove("display_none");
    player.innerText =`Joueur ${CURRENT_PLAYER} à toi de jouer`;
} )

//GAME PART
 
let allCases = document.querySelectorAll(".case")
allCases.forEach(cell => {
    cell.addEventListener("click", function(event){
        
        event.target.innerText= CURRENT_PLAYER;
        // console.log(target);
        
        if (CURRENT_PLAYER === "X"){
            CURRENT_PLAYER = "O";
            player.innerText =`Joueur ${CURRENT_PLAYER} à toi de jouer`;
        } else {
            CURRENT_PLAYER = 'X';
            player.innerText =`Joueur ${CURRENT_PLAYER} à toi de jouer`;
        }


    checkWin()
    }, {once: false});
    
});


function checkWin() {
    let values = [...allCases].map(cell => cell.innerText);
    console.log("VALUES", values)

    if (values[0] !== "" && values[0] === values[3] && values[0] === values[6]) {
        gotoresultat(values[0])
    }
    else if (values[0] !== "" && values[0] === values[1] && values[0] === values[3]) {
        gotoresultat(values[0])
    }
    else if (values[0] !== "" && values[0] === values[4] && values[0] === values[8]) {
        gotoresultat(values[0])
    }
    else if (values[1] !== "" && values[1] === values[4] && values[1] === values[7]) {
        gotoresultat(values[1])
    }
    else if (values[2] !== "" && values[2] === values[5] && values[2] === values[8]) {
        gotoresultat(values[2])
    }
    else if (values[2] !== "" && values[2] === values[4] && values[2] === values[6]) {
        gotoresultat(values[2])
    }
    else if (values[3] !== "" && values[3] === values[4] && values[3] === values[5]) {
        gotoresultat(values[3])
    }
    else if (values[6] !== "" && values[6] === values[7] && values[6] === values[8]) {
        gotoresultat(values[6])
    }
    else if(values[0] !== "" && values[1] !== "" && values[2] !== "" && values[3] !== "" && values[4] !== "" && values[5] !== "" && values[6] !== "" && values[7] !== "" && values[8] !== ""){
        gotoresultat("Egalité")
    }
}

let gotoresultat = (winner) => {
    game_section.classList.add("display_none");
    resultat_section.classList.remove("display_none");

    if( winner === "X" || winner === "O"){
        winner_text.innerText =`Le gagnant est ` +  winner;
    }
    else{
        winner_text.innerText ='Egalité'
    };
}


let replay = replay_button.addEventListener('click', () => {
    resultat_section.classList.add("display_none");
    welcome_section.classList.remove("display_none");
    values = [];
    CURRENT_PLAYER = "";
    allCases.forEach(cell => {
        cell.innerText = ""
    });
});
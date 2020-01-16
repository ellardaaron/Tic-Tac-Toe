let makingMarks = document.querySelectorAll('.row div');
let turns = 0;

makingMarks.forEach(function (cell) {
    cell.addEventListener("click", playerMoves);
});

function playerMoves(e) {
    if (turns % 2 == 0) {
        e.target.textContent = "X"
        turns++
    }
    else {
        e.target.textContent = "O"
        turns++
    }

    checkWin();
}

function checkWin() {

    //Top Horizontal Row Win
    if (makingMarks[0].textContent === "X" && makingMarks[1].textContent === "X" && makingMarks[2].textContent === "X" || makingMarks[0].textContent === "O" && makingMarks[1].textContent === "O" && makingMarks[2].textContent === "O") {
        if (turns % 2 === 0) {
            alert("O Wins!")
        } else {
            alert("X Wins!")
        }
    }
    
    //Middle Horizontal Line Win
    if (makingMarks[3].textContent === "X" && makingMarks[4].textContent === "X" && makingMarks[5].textContent === "X" || makingMarks[3].textContent === "O" && makingMarks[4].textContent === "O" && makingMarks[5].textContent === "O") {
        if (turns % 2 === 0) {
            alert("O Wins!")
        } else {
            alert("X Wins!")
        }
    }

    // //Middle Horizontal Row Win
    // if (makingMarks[3].textContent === makingMarks[4].textContent && makingMarks[4].textContent === makingMarks[5].textContent) {
    //     if (turns % 2 === 0) {
    //         alert("O Wins!")
    //     } else {
    //         alert("X Wins!")
    //     }
    // }

    // //Bottom Horizontal Row Win
    // if (makingMarks[6].textContent === makingMarks[7].textContent && makingMarks[7].textContent === makingMarks[8].textContent) {
    //     if (turns % 2 === 0) {
    //         alert("O Wins!")
    //     } else {
    //         alert("X Wins!")
    //     }
    // }

    // //First Vertical Column Win
    // if (makingMarks[0].textContent === makingMarks[3].textContent && makingMarks[3].textContent === makingMarks[6].textContent) {
    //     if (turns % 2 === 0) {
    //         alert("O Wins!")
    //     } else {
    //         alert("X Wins!")
    //     }
    // }

    // //Second Vertical Column Win
    // if (makingMarks[1].textContent === makingMarks[4].textContent && makingMarks[4].textContent === makingMarks[7].textContent) {
    //     if (turns % 2 === 0) {
    //         alert("O Wins!")
    //     } else {
    //         alert("X Wins!")
    //     }
    // }

    // //Third Vertical Column Win
    // if (makingMarks[2].textContent === makingMarks[5].textContent && makingMarks[5].textContent === makingMarks[8].textContent) {
    //     if (turns % 2 === 0) {
    //         alert("O Wins!")
    //     } else {
    //         alert("X Wins!")
    //     }
    // }

    // // Top Left Corner to Bottom Right Corner Diagonal Win
    // if (makingMarks[0].textContent === makingMarks[4].textContent && makingMarks[4].textContent === makingMarks[8].textContent) {
    //     if (turns % 2 === 0) {
    //         alert("O Wins!")
    //     } else {
    //         alert("X Wins!")
    //     }
    // }

    // // Top Right Corner to Bottom Left Cor
    // if (makingMarks[2].textContent === makingMarks[4].textContent && makingMarks[4].textContent === makingMarks[6].textContent) {
    //     if (turns % 2 === 0) {
    //         alert("O Wins!")
    //     } else {
    //         alert("X Wins!")
    //     }
    // }
}


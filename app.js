let makingMarks = document.querySelectorAll('.row div');
let turns = 0;
var draw = new Audio('draw.mp3');
var win = new Audio('win.mp3');



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
            setTimeout(function(){ alert("O Wins!"); }, 1);
            turns = 0;
            win.play();
        } else {
            setTimeout(function(){ alert("X Wins!"); }, 1);
            turns = 0;
            win.play();
        }
    }

    //Middle Horizontal Line Win
    if (makingMarks[3].textContent === "X" && makingMarks[4].textContent === "X" && makingMarks[5].textContent === "X" || makingMarks[3].textContent === "O" && makingMarks[4].textContent === "O" && makingMarks[5].textContent === "O") {
        if (turns % 2 === 0) {
            setTimeout(function(){ alert("O Wins!"); }, 1);
            turns = 0;
            win.play();
        } else {
            setTimeout(function(){ alert("X Wins!"); }, 1);
            turns = 0;
            win.play();
        }
    }

    //Bottom Horizontal Row Win
    if (makingMarks[6].textContent === "X" && makingMarks[7].textContent === "X" && makingMarks[8].textContent === "X" || makingMarks[6].textContent === "O" && makingMarks[7].textContent === "O" && makingMarks[8].textContent === "O") {
        if (turns % 2 === 0) {
            setTimeout(function(){ alert("O Wins!"); }, 1);
            turns = 0;
            win.play();
        } else {
            setTimeout(function(){ alert("X Wins!"); }, 1);
            turns = 0;
            win.play();
        }
    }

    //First Vertical Column Win
    if (makingMarks[0].textContent === "X" && makingMarks[3].textContent === "X" && makingMarks[6].textContent === "X" || makingMarks[0].textContent === "O" && makingMarks[3].textContent === "O" && makingMarks[6].textContent === "O") {
        if (turns % 2 === 0) {
            setTimeout(function(){ alert("O Wins!"); }, 1);
            turns = 0;
            win.play();
        } else {
            setTimeout(function(){ alert("X Wins!"); }, 1);
            turns = 0;
            win.play();
        }
    }

    //Second Vertical Column Win
    if (makingMarks[1].textContent === "X" && makingMarks[4].textContent === "X" && makingMarks[7].textContent === "X" || makingMarks[1].textContent === "O" && makingMarks[4].textContent === "O" && makingMarks[7].textContent === "O") {
        if (turns % 2 === 0) {
            setTimeout(function(){ alert("O Wins!"); }, 1);
            turns = 0;
            win.play();
        } else {
            setTimeout(function(){ alert("X Wins!"); }, 1);
            turns =0;
            win.play();
        }
    }


    //Third Vertical Column Win
    if (makingMarks[2].textContent === "X" && makingMarks[5].textContent === "X" && makingMarks[8].textContent === "X" || makingMarks[2].textContent === "O" && makingMarks[5].textContent === "O" && makingMarks[8].textContent === "O") {
        if (turns % 2 === 0) {
            setTimeout(function(){ alert("O Wins!"); }, 1);
            turns = 0;
            win.play();
        } else {
            setTimeout(function(){ alert("X Wins!"); }, 1);
            turns = 0;
            win.play();
        }
    }

    //Top Left Corner to Bottom Right Corner Diagonal Win
    if (makingMarks[0].textContent === "X" && makingMarks[4].textContent === "X" && makingMarks[8].textContent === "X" || makingMarks[0].textContent === "O" && makingMarks[4].textContent === "O" && makingMarks[8].textContent === "O") {
        if (turns % 2 === 0) {
            setTimeout(function(){ alert("O Wins!"); }, 1);
            turns = 0;
            win.play();
        } else {
            setTimeout(function(){ alert("X Wins!"); }, 1);
            turns = 0;
            win.play();
        }
    }

    //Top Right Corner to Bottom Left Corner Diagonal Win
    if (makingMarks[2].textContent === "X" && makingMarks[4].textContent === "X" && makingMarks[6].textContent === "X" || makingMarks[2].textContent === "O" && makingMarks[4].textContent === "O" && makingMarks[6].textContent === "O") {
        if (turns % 2 === 0) {
            setTimeout(function(){ alert("O Wins!"); }, 1);
            turns = 0;
            win.play();
        } else {
            setTimeout(function(){ alert("X Wins!"); }, 1);
            turns = 0;
            win.play();
        }
    }

    if (turns === 9) {
        draw.play();
        setTimeout(function(){ alert("This is not the way!"); }, 1);
    }
}

//This is the code for the restart button

let btn = document.querySelector('button');

btn.addEventListener("click", function(){
    turns = 0;
    makingMarks.forEach(function(cell) {
        cell.textContent = " "
    });
    
});


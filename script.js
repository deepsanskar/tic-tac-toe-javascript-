let currentPlayer = "X";
let arr = Array(9).fill(null);
let playerXWins = 0;
let playerOWins = 0;

function checkWinner() {
    if (
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
    ) {
        document.getElementById('winnerMessage').innerText = `Winner is ${currentPlayer}`;
        if (currentPlayer === 'X') {
            playerXWins++;
        } else {
            playerOWins++;
        }
        updateScores();
        return true;
    }

    if (!arr.some((e) => e === null)) {
        document.getElementById('winnerMessage').innerText = `Draw!!`;
        return true; // Return true to indicate game is over (draw)
    }

    return false; // Return false if no winner yet
}

function updateScores() {
    document.getElementById('playerXScore').innerText = `Player X Wins: ${playerXWins}`;
    document.getElementById('playerOScore').innerText = `Player O Wins: ${playerOWins}`;
}

function handleClick(el) {
    const id = Number(el.id);
    if (arr[id] !== null) return;
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    if (checkWinner()) {
        currentPlayer = "X"; // Reset current player for the new game
        arr = Array(9).fill(null); // Reset the board
        setTimeout(() => {
            document.getElementById('winnerMessage').innerText = '';
            document.querySelectorAll('.col').forEach(col => col.innerText = '');
        }, 3000); // Clear message and board after 3 seconds
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

document.getElementById('restartButton').addEventListener('click', () => {
    playerXWins = 0;
    playerOWins = 0;
    updateScores();
    location.reload();
});

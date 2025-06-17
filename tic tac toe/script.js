const board = document.getElementById('board');
const message = document.getElementById('message');
let currentPlayer = 'X';
let boardState = Array(9).fill(null);

board.addEventListener('click', (e) => {
    const index = e.target.dataset.index;
    if (boardState[index] || !index) return;

    boardState[index] = currentPlayer;
    e.target.textContent = currentPlayer;
    e.target.classList.add(currentPlayer);

    if (checkWin(currentPlayer)) {
        message.textContent = `${currentPlayer} wins!`;
        board.removeEventListener('click', arguments.callee);
    } else if (boardState.every(cell => cell)) {
        message.textContent = `It's a draw!`;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
});

function checkWin(player) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];
    return winPatterns.some(pattern => 
        pattern.every(index => boardState[index] === player)
    );
}

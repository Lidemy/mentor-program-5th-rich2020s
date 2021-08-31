export default function hasWinner(x, y, board, dataSize) {
  if (x === "" || y === "") return;
  function columnHasWinner() {
    let count = 0;
    for (let i = 1; i < 5; i++) {
      if (y + i >= dataSize) break;
      if (board[y][x] === board[y + i][x] && board[y][x] !== null) {
        count++;
      } else {
        break;
      }
    }
    for (let i = 1; i < 5; i++) {
      if (y - i < 0) break;
      if (board[y][x] === board[y - i][x] && board[y][x] !== null) {
        count++;
      } else {
        break;
      }
    }
    if (count >= 4) return true;
    return false;
  }
  function rowHasWinner() {
    let count = 0;
    for (let i = 1; i < 5; i++) {
      if (x + i >= dataSize) break;
      if (board[y][x] === board[y][x + i] && board[y][x] !== null) {
        count++;
      } else {
        break;
      }
    }
    for (let i = 1; i < 5; i++) {
      if (x - i < 0) break;
      if (board[y][x] === board[y][x - i] && board[y][x] !== null) {
        count++;
      } else {
        break;
      }
    }
    if (count >= 4) return true;
    return false;
  }
  function backSlashHasWinner() {
    let count = 0;
    for (let i = 1; i < 5; i++) {
      if (x + i >= dataSize || y + i >= dataSize) break;
      if (board[y][x] === board[y + i][x + i] && board[y][x] !== null) {
        count++;
      } else {
        break;
      }
    }
    for (let i = 1; i < 5; i++) {
      if (x - i < 0 || y - i < 0) break;
      if (board[y][x] === board[y - i][x - i] && board[y][x] !== null) {
        count++;
      } else {
        break;
      }
    }
    if (count >= 4) return true;
    return false;
  }
  function slashHasWinner() {
    let count = 0;
    for (let i = 1; i < 5; i++) {
      if (x + i >= 20 || y - i < 0) break;
      if (board[y][x] === board[y - i][x + i] && board[y][x] !== null) {
        count++;
      } else {
        break;
      }
    }
    for (let i = 1; i < 5; i++) {
      if (x - i < 0 || y + i >= dataSize) break;
      if (board[y][x] === board[y + i][x - i] && board[y][x] !== null) {
        count++;
      } else {
        break;
      }
    }
    if (count >= 4) return true;
    return false;
  }
  if (
    rowHasWinner() ||
    columnHasWinner() ||
    backSlashHasWinner() ||
    slashHasWinner()
  )
    return true;
  return false;
}

import React, { useState } from "react";
import "../index.css";

const BOARD_SIZE = 10;
const MINES_COUNT = 10;

function generateBoard() {
  const board = Array.from({ length: BOARD_SIZE }, () =>
    Array.from({ length: BOARD_SIZE }, () => ({
      revealed: false,
      mine: false,
      flagged: false,
      adjacentMines: 0,
    }))
  );

  // Place mines
  let placed = 0;
  while (placed < MINES_COUNT) {
    const r = Math.floor(Math.random() * BOARD_SIZE);
    const c = Math.floor(Math.random() * BOARD_SIZE);
    if (!board[r][c].mine) {
      board[r][c].mine = true;
      placed++;
    }
  }

  // Count adjacent mines
  const dirs = [-1, 0, 1];
  for (let r = 0; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      if (board[r][c].mine) continue;
      let count = 0;
      dirs.forEach(dr => {
        dirs.forEach(dc => {
          if (dr === 0 && dc === 0) return;
          const nr = r + dr;
          const nc = c + dc;
          if (
            nr >= 0 &&
            nr < BOARD_SIZE &&
            nc >= 0 &&
            nc < BOARD_SIZE &&
            board[nr][nc].mine
          ) {
            count++;
          }
        });
      });
      board[r][c].adjacentMines = count;
    }
  }

  return board;
}

export default function Minesweeper() {
  const [board] = useState(generateBoard);
  const [gameOver, setGameOver] = useState(false);  }
  

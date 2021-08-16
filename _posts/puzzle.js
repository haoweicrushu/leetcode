const normal = 1;
const rock = 2;
const exit = 3;
const start = 4;

const puzzle = [];
for (let i = 0; i < 5; i++) {
  puzzle.push([]);
  for (let j = 0; j < 5; j++) {
    if (i == 0 && j == 0) {
      puzzle[i].push({ x: 0, y: 0, index: 0, type: start });
    } else if (i == 4 && j == 4) {
      puzzle[i].push({ x: 4, y: 4, index: 24, type: exit });
    } else {
      //   puzzle[i].push(Math.floor(Math.random() * 2) + 1);
      puzzle[i].push({ x: i, y: j, index: 5 * i + j, type: Math.floor(Math.random() * 2) + 1 });
    }
  }
}

// const puzzle = [
//   [
//     { x: 0, y: 0, index: 0, type: 0 },
//     { x: 0, y: 1, index: 1, type: 1 },
//     { x: 0, y: 2, index: 2, type: 1 },
//     { x: 0, y: 3, index: 3, type: 2 },
//     { x: 0, y: 4, index: 4, type: 2 },
//   ],
//   [
//     { x: 1, y: 0, index: 5, type: 2 },
//     { x: 1, y: 1, index: 6, type: 1 },
//     { x: 1, y: 2, index: 7, type: 1 },
//     { x: 1, y: 3, index: 8, type: 2 },
//     { x: 1, y: 4, index: 9, type: 2 },
//   ],
//   [
//     { x: 2, y: 0, index: 10, type: 1 },
//     { x: 2, y: 1, index: 11, type: 1 },
//     { x: 2, y: 2, index: 12, type: 1 },
//     { x: 2, y: 3, index: 13, type: 1 },
//     { x: 2, y: 4, index: 14, type: 1 },
//   ],
//   [
//     { x: 3, y: 0, index: 15, type: 2 },
//     { x: 3, y: 1, index: 16, type: 2 },
//     { x: 3, y: 2, index: 17, type: 2 },
//     { x: 3, y: 3, index: 18, type: 2 },
//     { x: 3, y: 4, index: 19, type: 1 },
//   ],
//   [
//     { x: 4, y: 0, index: 20, type: 2 },
//     { x: 4, y: 1, index: 21, type: 1 },
//     { x: 4, y: 2, index: 22, type: 2 },
//     { x: 4, y: 3, index: 23, type: 1 },
//     { x: 4, y: 4, index: 24, type: 3 },
//   ],
// ];
// const puzzle = [
//   [1, 1, 1, 2, 2],
//   [2, 1, 1, 2, 2],
//   [1, 1, 1, 1, 1],
//   [2, 2, 2, 2, 1],
//   [2, 1, 2, 1, 3],
// ];

console.log(
  puzzle.map(p => {
    return p.map(p2 => {
      return p2.type;
    });
  }),
);

// 0 1 2 7 12 13 14 19 24
// 右 右 下 下 右 右 右 下 下
let path = new Set();
let count = 0;

function solvePuzzle(puzzle, curr) {
  const left = puzzle[curr.x] ? puzzle[curr.x][curr.y - 1] : null;
  const right = puzzle[curr.x] ? puzzle[curr.x][curr.y + 1] : null;
  const top = puzzle[curr.x - 1] ? puzzle[curr.x - 1][curr.y] : null;
  const bottom = puzzle[curr.x + 1] ? puzzle[curr.x + 1][curr.y] : null;

  if (curr.type == exit) {
    console.log('exit');
    path.add(curr.index);
    console.log(path);
    return;
  }

  if (curr.type != rock) {
    if (right && !path.has(right.index)) {
      path.add(right.index);
      solvePuzzle(puzzle, right);
    }
    if (bottom && !path.has(bottom.index)) {
      path.add(bottom.index);
      solvePuzzle(puzzle, bottom);
    }
    if (left && !path.has(left.index)) {
      path.add(left.index);
      solvePuzzle(puzzle, left);
    }
    if (top && !path.has(top.index)) {
      path.add(top.index);
      solvePuzzle(puzzle, top);
    }
  } else {
    path.delete(curr.index);
  }
}

solvePuzzle(puzzle, { x: 0, y: 0, index: 0, type: 0 });

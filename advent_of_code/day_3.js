const validatePath = (path, right, down) => {

  let numHitTrees = 0;
  let j = (0 - right);

  for (let i = 0; i < path.length; i += down) {
    // Start point i = 0, j = 0
    if (j + right >= path[i][0].length) {
      j -= (31 - right)
    } else {
      j += right;
    }

    if (path[i][0][j] === '#') {
      numHitTrees++;
    }
  }

  return numHitTrees;
}

const path = 
[
  ['...#.....#.......##......#.....'], 
  ['...#..................#........'], 
  ['....##....#.......#............'], 
  ['.........#.......#.......#.....'], 
  ['..#..............#.........#..#'], 
  ['.....#.........#....#....#....#'], 
  ['....##..........#.#.##.........'], 
  ['...#....##...#...#...#.#..#....'], 
  ['...#.......###..........#......'], 
  ['.........#.....#....#...#.#....'], 
  ['.#...###..#..##..#.........###.'], 
  ['#.#...#..........###...#....#..'], 
  ['#....#.#..#..........#.......#.'], 
  ['.#..#........##.#..............'], 
  ['............#..#.#............#'], 
  ['.............#..........#......'], 
  ['...#.......#...............#...'], 
  ['.#...#..#..#............#..#...'], 
  ['....##.##..................#.##'], 
  ['#......#...#..##....#.....#...#'], 
  ['#..#..........##....#...###....'], 
  ['##......#.##.#......#..#......#'], 
  ['....#...#.......##.##...#.#..#.'], 
  ['##.#...#....#...#...#........#.'], 
  ['........#..#.....#....#.......#'], 
  ['.#......#......#..............#'], 
  ['.#.....#..#..#..#..#..#....#..#'], 
  ['.......#.....#.................'], 
  ['.#......#...#..#..#...#...#....'], 
  ['.........#..#..#.........#.....'], 
  ['.....#.........#.#..........#..'], 
  ['#......#....#....##....#.#.#...'], 
  ['................##.#...........'], 
  ['.....##.....#............#.#...'], 
  ['...........#...#.#..##...#.....'], 
  ['.......#....##.......#..#....#.'], 
  ['.##......##....#....####.##..#.'], 
  ['.....#.##.....#...#....##......'], 
  ['.............#....#......#....#'], 
  ['#.#.#.###........#.#....#.#....'], 
  ['.##...........#................'], 
  ['#..#..#...##..##.##...#..#.#...'], 
  ['..#......##..#.#......#..#.#.#.'], 
  ['.....#..............#......#...'], 
  ['#.#..##.##...#............##...'], 
  ['.#......#.............#........'], 
  ['........##....#......#..#......'], 
  ['##.........##....#..........#..'], 
  ['..#..#....#.........##....#..#.'], 
  ['........#..#..#........#...#...'], 
  ['#.........#......##.#...#.##...'], 
  ['.##.............#..###....#.##.'], 
  ['.##.#....#.......#.............'], 
  ['#..##.#.........#..##.#......##'], 
  ['....#..#.......................'], 
  ['.#.#.........#...............#.'], 
  ['....#......#.#..##..#...#.#..#.'], 
  ['#....##...##..#.......##.....##'], 
  ['....##...##...#....#.....#..#..'], 
  ['.#......#.#.#.#......##..#..#..'], 
  ['.....##..#..#.....#.....#...##.'], 
  ['....###................#..#.#..'], 
  ['.....#..#..#.#..........#..#...'], 
  ['...#.....#............#........'], 
  ['#.............#...#..#.....#..#'], 
  ['#........#.....#.#..#......#...'], 
  ['...#.##.....#.#..#.........#..#'], 
  ['.......##...#..#.#....##.......'], 
  ['..................#..##..#.#.#.'], 
  ['..#......#..#..#.....#...#.#...'], 
  ['.#.......#.....#.#....#.#......'], 
  ['##..#.#....#.###..#...#.......#'], 
  ['.......................#.......'], 
  ['..###..........#..##.##.#...##.'], 
  ['.....#...#....###.........#..#.'], 
  ['..#.....#....###...............'], 
  ['....#.......#........#....#..#.'], 
  ['......#................#.#...##'], 
  ['#.....#.......#..#..........##.'], 
  ['#.#....##.........#.....#.#....'], 
  ['#.#.#...#............####.##..#'], 
  ['.....#....####........#...#..#.'], 
  ['....##........#.#..............'], 
  ['.#......#..#..##......#....#.##'], 
  ['..#....#.#........#..#....#....'], 
  ['.#...#.##...#.#.....#.....#...#'], 
  ['..........#................###.'], 
  ['.....#..........##..#..........'], 
  ['.....#..................#...#..'], 
  ['#......##....#.#...#..#.......#'], 
  ['..#......##....#......#.#...#..'], 
  ['###.#..###.#.#..#...#....#.....'], 
  ['#.....#.#...#.##...#........#..'], 
  ['#..........................#...'], 
  ['.#.#.....#.#.#.......##.#.#....'], 
  ['.#....#..##......#....#........'], 
  ['.#.......#.##......#.#..#......'], 
  ['............#.....#....##.##...'], 
  ['....##........##......#........'], 
  ['....#......##....##.....#......'], 
  ['..#.#.....#......#...#.#.......'], 
  ['.###.........#...#........#....'], 
  ['......#.#...##.....##..##..#...'], 
  ['...#...#.#......#..##..#.......'], 
  ['.##....#.#........#.#..........'], 
  ['#....#.#......#......#.#.#.....'], 
  ['#.....#.....#................##'], 
  ['...........#....#...#...#......'], 
  ['..........##..##..#...##.......'], 
  ['.##......#.......#..#.#..##....'], 
  ['..........##....#....#..#.#....'], 
  ['...............#......#.....##.'], 
  ['.#...#....................#..#.'], 
  ['.............###...............'], 
  ['.####..............#...#.......'], 
  ['....#...#.#...#...#....#.......'], 
  ['.......#.#.....................'], 
  ['...............................'], 
  ['#..#.........##.......#.#.#....'], 
  ['....##...#...........#......#..'], 
  ['........##...#......#..........'], 
  ['....#.#.....#..#......#........'], 
  ['#..#................#..#.##....'], 
  ['.#........#.......#.........##.'], 
  ['#...........#...#...#......#.#.'], 
  ['..#.#.#..........##.##...#...#.'], 
  ['..#...#.##...#.#...........#...'], 
  ['##...........##...##...##......'], 
  ['....#....##...#......#..#.....#'], 
  ['#..#.#.#..#...#...#....#.......'], 
  ['............#.....#....#....#.#'], 
  ['....##.....#.........#......#..'], 
  ['.....##.......#...#...#.###....'], 
  ['...##......##..###.#.#....#....'], 
  ['#.#.#.#..#.#.........#...#...##'], 
  ['..#..........#.................'], 
  ['....##....#....................'], 
  ['###.#...............##...##.#..'], 
  ['....#.......##.#..#.#..........'], 
  ['............##..#.......##.....'], 
  ['#...#.........#..#..#..#...#...'], 
  ['..#......##..#.#...##.#.......#'], 
  ['......#................#...#...'], 
  ['......#..###............#.#....'], 
  ['..#.#...###...#..#...#......##.'], 
  ['...#.##...##............#......'], 
  ['#...##........#.#..#.......#...'], 
  ['#..#.....#..#.##...............'], 
  ['..#.....#.#....#.........#.....'], 
  ['.............#....#..#...#.##..'], 
  ['..#.#.....................##.#.'], 
  ['........#.......#..#.#.........'], 
  ['##..............#.....#.......#'], 
  ['.#.##...###....#.....#..##.#...'], 
  ['#..#...#..#......#..........###'], 
  ['#...........#..#...#....#....#.'], 
  ['....#..#.......##......#......#'], 
  ['#...#.#...............##...#...'], 
  ['...##.#..##.......##..#........'], 
  ['...........##..........#.......'], 
  ['..#....#..##...#......#.#......'], 
  ['.#.#....#.#.#...#.#............'], 
  ['.#.#..#...##.......#.#.........'], 
  ['...#...#.............#.######..'], 
  ['##.#........###.......#....#.#.'], 
  ['.#....#.....#.#........#......#'], 
  ['..#.#.........#..........##.#..'], 
  ['.#....#.#..............#......#'], 
  ['.....#..##.........#..##..#....'], 
  ['........#..#....#.......#.....#'], 
  ['#.#.......#.....#.##.#...#....#'], 
  ['...#...##...#....#.....#....#.#'], 
  ['#..##....#..........#..#.......'], 
  ['.......#.#.....#...#.#.#.....##'], 
  ['#...#...#..#......##.#..#......'], 
  ['...#.......#....#...........#.#'], 
  ['##.......#####.#.........#..#..'], 
  ['....#.#...................##...'], 
  ['......#..##............#.......'], 
  ['#.........#....#####.#.#..#.#..'], 
  ['..#......#.#.##............#...'], 
  ['..#...#.....#.#....#......#....'], 
  ['.#...#....#....#.#.#......#.#..'], 
  ['..#.##.....#..........#...#.#..'], 
  ['.......#...#.............#...#.'], 
  ['.#.........#.....#.#........##.'], 
  ['#....#..#..........##.......##.'], 
  ['...#....#.#.........#.......###'], 
  ['......#....#.#......#.......#..'], 
  ['.....#...#...#.#...##..#.#.....'], 
  ['#.........##..#...##..#.#....#.'], 
  ['...#......#.#......##.....#....'], 
  ['.#####.....#.#.#.#...###.##....'], 
  ['..#................#.#...#.#...'], 
  ['#.......##...#.........##..#...'], 
  ['..#.....#....##............#...'], 
  ['#............##...............#'], 
  ['..#..#.................#.......'], 
  ['...............#..#.......##...'], 
  ['..##..#....#...##..........#..#'], 
  ['#...###....##.#.......#.....#..'], 
  ['..........#.........#..#......#'], 
  ['##....#.....#...##.......#.....'], 
  ['..#..#.......#.................'], 
  ['..#..##......#.........#......#'], 
  ['...........##.#..#......#.#..#.'], 
  ['..#...##...##......#...#...#.#.'], 
  ['.#..#.....#.........#..........'], 
  ['#..##...#............#..#.#....'], 
  ['..#...#...##.#........#....#.#.'], 
  ['......##..###.#....#........#..'], 
  ['.....#..#....##...##..........#'], 
  ['................#.#.#.....#..#.'], 
  ['#.##...#......#.#..#.......###.'], 
  ['.......#.#..#..#......#..##..#.'], 
  ['.##...#...#....#....#.......#..'], 
  ['......#..#....#.#.###.....#.#.#'], 
  ['#....#.#...#......#.#.....#..#.'], 
  ['.......#.#...#.#.#............#'], 
  ['#.....#..#...#.................'], 
  ['.....#..........#..#.#..#.#....'], 
  ['.........#......#.#.........###'], 
  ['..#.###........#....##.#.......'], 
  ['.#.......#.#......#........#..#'], 
  ['............#........#.....#...'], 
  ['......#......#....#.#....#.....'], 
  ['.#.......#.....#.##.#..#...#..#'], 
  ['##.....#...#..........##..#...#'], 
  ['.#........#....#...#....##.#...'], 
  ['...#.#.......#.#....#.#...#...#'], 
  ['........#.#.....#.##...#.#.#...'], 
  ['...........#....#..#.........#.'], 
  ['......#.#..#..##...#.......#...'], 
  ['...#....#..#..#.##...........##'], 
  ['.#..#.#.#......#....##...#.....'], 
  ['......#..#........#...##.......'], 
  ['.............#...##.#.....#...#'], 
  ['....#...............##......#.#'], 
  ['.#...........#.........###.##.#'], 
  ['....##........##...#.##.....#..'], 
  ['#......##........#...........#.'], 
  ['###.#.................#.....#..'], 
  ['.....##..#.........#......##.#.'], 
  ['#.#.......##.#..#...#...#......'], 
  ['...#.#..##.....#....##.....#.#.'], 
  ['...##..#...#........#.#..#..#..'], 
  ['...........#....#...#...##.....'], 
  ['##.......#...#.#.##...##..#.#..'], 
  ['#....#.#..##...................'], 
  ['.#...................#.#..#....'], 
  ['#.....#..........#..#...#...#..'], 
  ['...#..#............#.#.........'], 
  ['............#..##.....##......#'], 
  ['#....#.........#.#..#..........'], 
  ['...#.#................#....#.#.'], 
  ['..#..#...#...#.#.#...#.#.#.....'], 
  ['..#.......#.............##..#.#'], 
  ['#........#.#.###.#...#..#.###..'], 
  ['.......#......#..#.....####...#'], 
  ['..##....#..#...................'], 
  ['....##.#....#......#.#..#..#..#'], 
  ['#...........##...#.#.##..###...'], 
  ['##.##......#...........#....#..'], 
  ['.#....#....#..#..#...##...#....'], 
  ['...##.#.#......#...............'], 
  ['.....##.##...#...........#.....'], 
  ['....#...#.#.........##.#....#.#'], 
  ['#..#...........#......#........'], 
  ['..#..#.....#....#.##.......#..#'], 
  ['..#.......##.....##.......#...#'], 
  ['.#.##.#..#...............#....#'], 
  ['.........#...........#.........'], 
  ['..........##......#.#..........'], 
  ['..#........###....#..#...#...#.'], 
  ['....#.#...#.....#..#....#......'], 
  ['..##...##...#..#..##......##..#'], 
  ['..#..#......#....#....#...#..##'], 
  ['...#...............#..#........'], 
  ['....##..#...#......#........#..'], 
  ['###.....##.......#.............'], 
  ['.#.#.##........##..#...#.......'], 
  ['.....###............#..#..#....'], 
  ['.#....##.#...####........#.....'], 
  ['............#.#.....##....#.#..'], 
  ['....#..........#...#...........'], 
  ['........#.#...#..##...........#'], 
  ['#.......#..#.......###...#....#'], 
  ['#....#..#......#.....#...##.#..'], 
  ['..#.............#.#.###...##..#'], 
  ['.#.#....#...#.....#...#.......#'], 
  ['.##.#..#.........#..#......#...'], 
  ['#....#...#......#.....#.....#..'], 
  ['...........#....#.......##...#.'], 
  ['#.#..##....#....#.#.......#.#..'], 
  ['..............#.#..##.##.......'], 
  ['....#........#......#....#.#...'], 
  ['......#.....................#..'], 
  ['#..##...##.....#.........#.....'], 
  ['#.....#.....#....#...#.....#...'], 
  ['........###...........#...#....'], 
  ['............#.....#...##....#..'], 
  ['.......#.......#...#.#...##....'], 
  ['..#.#..#....#...#...#....#.....'], 
  ['..........#.#....#....###....#.'], 
  ['.##...#......###..#............'], 
  ['...#...#........#....#....##...'], 
  ['##.....#.##...#.#...........#.#'], 
  ['..........#.#....#...##.#...#..'], 
  ['..#....#.#...#...#....#.###....'], 
  ['......#.##..#..#.........#.###.'], 
  ['#.#.#.....#.....##.......#.....'], 
  ['...#..#..#....#.#....#....#....'], 
  ['##..#.#................#......#'], 
  ['.....#...#..#......#..####.....'], 
  ['.....##.....#....####......#...'], 
  ['..........##..###.#....#.....##'], 
  ['###...#.......#......##...#....'], 
  ['.......##...#...#..#.##.#....##'], 
  ['.....##.....##...##.....#..#..#'], 
  ['......#.#.....#...#....#...#...'], 
  ['..##........#...#..............'], 
  ['..#........#.##.........#...#..'], 
  ['#....#....#................#...'], 
]

console.log(validatePath(path, 1, 2));
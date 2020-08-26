# Game-of-Life
## Description
The main focus of this repo is to demonstrate a cellular automaton made by British mathematician John Horton Conway. Despite the name, The Game of Life, does not have any players. It is a zero-player game determined by its initial state requiring no further input from the user. The game is made using p5.js, a JavaScript library, and some simple html and css.
## The Game of Life Rules
The Game of Life is an infinite (finite in my rendition), 2D grid of square cells in either dead or alive states. Each cell interacts with its eight surrounding neighbors according to the ruleset below. At each step in time, the following ruleset is applied
1. Any live cell with less than two live neighbour dies, as though if by underpopulation
2. Any live cell with two or three live neighbours lives onto the next generation
3. Any live cell with more than three live neighbors dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
## Controls
My rendition of The Game of Life has one simple control for the user, the mouse press. A mouse press from the user resets the game and randomizes the initial state.

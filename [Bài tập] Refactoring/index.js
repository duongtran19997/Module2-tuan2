"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TennisGame_1 = require("./TennisGame");
var game = new TennisGame_1.TennisGame();
game.getScore('player1', 'player2', 6, 6);
console.log(game.score);

import React, { Component } from "react";
import * as R from "ramda";
import ai from "gomokuai";
import checkWinner from "./check-winner.js";

const initialState = boardSize => ({
    board: R.update(Math.floor(boardSize * boardSize / 2), 1, R.repeat(0, boardSize * boardSize)),
    boardSize: boardSize,
    player: 2,
    runningInterval: null,
    winner: 0,
    boardFull: false
});

export class GomokuPlayself extends Component {
    constructor(props) {
        super(props);

        const boardSize = this.props.size;

        this.state = initialState(boardSize);

        this.boardToAscii = this.boardToAscii.bind(this);
        this.toggleGame = this.toggleGame.bind(this);
        this.tickGame = this.tickGame.bind(this);
    }

    tickGame() {
        const { player, board, boardSize } = this.state;
        const pos = ai.bestMove(board, boardSize);

        if (pos == null) {
            this.stopGame();
            this.setState(() => ({ boardFull: true }));
            return;
        }
        const { x, y } = pos;
        const newBoard = R.update(x + y * boardSize, player, board);

        const maybeWinner = checkWinner(x, y, newBoard, boardSize);

        if (maybeWinner !== 0) {
            this.stopGame();
        }

        this.setState(() => ({
            player: player === 1 ? 2 : 1,
            board: newBoard,
            winner: maybeWinner
        }));
    }

    startGame() {
        if (this.state.winner !== 0 || this.state.boardFull) {
            this.setState(({ boardSize }) => initialState(boardSize));
        }

        const interval = setInterval(this.tickGame, 500);

        this.setState(() => ({ runningInterval: interval }));
    }

    stopGame() {
        clearInterval(this.state.runningInterval);
        this.setState(() => ({ runningInterval: null }));
    }

    toggleGame() {
        this.state.runningInterval ? this.stopGame() : this.startGame();
    }

    componentWillUnmount() {
        clearInterval(this.state.runningInterval);
    }

    boardToAscii() {
        const { board, boardSize } = this.state;
        const { markers } = this.props;

        const asciiBoard = R.pipe(
            R.map(x => markers[x]),
            R.splitEvery(boardSize),
            R.map(row => "|" + R.join("|", row) + "|"),
            R.prepend(R.join(" ", R.repeat("_", boardSize))),
            R.join("\n")
        )(board);

        return asciiBoard;
    }

    render() {
        const { runningInterval: running, winner, boardFull } = this.state;
        const { markers } = this.props;

        return (
            <div onClick={this.toggleGame}>
                <pre className="center-text">{this.boardToAscii()}</pre>
                <pre className="center-text">{winner ? `${markers[winner]} vann!` : ""}</pre>
                <pre className="center-text">
                    {!running ? "Klicka för att starta" : "Klicka för att pausa"}
                </pre>
                <pre className="center-text">{boardFull ? "Brädet fullt utan vinnare" : ""}</pre>
            </div>
        );
    }
}

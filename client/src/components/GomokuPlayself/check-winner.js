const getPosition_ = boardSize => (x, y) => {
    return x + y * boardSize;
};

export default function checkWinner(x, y, board, boardSize) {
    const getPosition = getPosition_(boardSize);
    const position = getPosition(x, y);
    // get player at position
    const player = board[position];

    if (!player) {
        return 0;
    }

    //check hor
    for (let i = -4, inRow = 0; i <= 4; i += 1) {
        let xToCheck = x - i;

        if (xToCheck < 0 || xToCheck >= boardSize) {
            continue;
        }

        let posToCheck = getPosition(xToCheck, y);

        if (board[posToCheck] === player) {
            inRow += 1;
            if (inRow >= 5) {
                return player;
            }
        } else {
            inRow = 0;
        }
    }

    //check vert
    for (let i = -4, inRow = 0; i <= 4; i += 1) {
        let yToCheck = y - i;

        if (yToCheck < 0 || yToCheck >= boardSize) {
            continue;
        }

        let posToCheck = getPosition(x, yToCheck);

        if (board[posToCheck] === player) {
            inRow += 1;
            if (inRow >= 5) {
                return player;
            }
        } else {
            inRow = 0;
        }
    }

    //check up diagonal
    for (let i = -4, inRow = 0; i <= 4; i += 1) {
        let yToCheck = y - i;

        if (yToCheck < 0 || yToCheck >= boardSize) {
            continue;
        }
        let xToCheck = x - i;

        if (xToCheck < 0 || xToCheck >= boardSize) {
            continue;
        }

        let posToCheck = getPosition(xToCheck, yToCheck);

        if (board[posToCheck] === player) {
            inRow += 1;
            if (inRow >= 5) {
                return player;
            }
        } else {
            inRow = 0;
        }
    }

    //check down diagonal
    for (let i = -4, inRow = 0; i <= 4; i += 1) {
        let yToCheck = y + i;

        if (yToCheck < 0 || yToCheck >= boardSize) {
            continue;
        }
        let xToCheck = x - i;

        if (xToCheck < 0 || xToCheck >= boardSize) {
            continue;
        }

        let posToCheck = getPosition(xToCheck, yToCheck);

        if (board[posToCheck] === player) {
            inRow += 1;
            if (inRow >= 5) {
                return player;
            }
        } else {
            inRow = 0;
        }
    }

    return 0;
}

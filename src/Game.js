import React from 'react';
import Board from './Board';

const GameTitle = () => {
    return <h1>Tic Tac Toe made by <a href="https://github.com/zhongjis">Zhongjie Shen</a></h1>;
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                move: [-1, -1], // [x, y]
            }],
            stepNumber: 0,
            xIsNext: true,
        }
    }

    handleClick(i) {
        // calculating x axis and y axis
        const y = Math.floor(i/3);
        const x = i % 3;

        // update history with the new data
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const currentStep = history[history.length - 1];
        const squares = currentStep.squares.slice();

        // check if winner is true
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        // fill square and update history
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                move: [x, y],
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const xAxis = step.move[0];
            const yAxis = step.move[1];

            const desc = move ?
                'Go to move #' + move + " (" + xAxis + ", " + yAxis + ")":
                'Go to game start';

            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className='game'>
                <div className='game-title'>
                    <GameTitle />
                </div>
                <div className='game-body'>
                    <div className='game-board'>
                        <Board 
                            squares={current.squares}
                            onClick={(i) => this.handleClick(i)}
                        />
                    </div>
                    <div className='game-info'>
                        <div>{status}</div>
                        <ol>{moves}</ol>
                    </div>
                </div>
            </div>
        );
    }
}

// =======================================

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
      }
  }
  return null;
}

export default Game;
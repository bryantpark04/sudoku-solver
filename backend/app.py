import time
from flask import Flask, request

from sudoku import solve_sudoku

app = Flask(__name__)

@app.route("/time")
def get_current_time():
    return {'time': time.time()}

@app.route('/solve', methods=['POST'])
def solve_sudoku_puzzle():
    # TODO: Cache sudoku puzzles in SQLAlchemy database
    board: list[str] = request.get_json()['body']
    solution: list[str] = solve_sudoku(board)
    return solution if solution else []

@app.route('/random')
def get_random_sudoku():
    # TODO: Implement this
    return [*'6.....8.3.4.7.................5.4.7.3..2.....1.6.......2.....5.....8.6......1....']
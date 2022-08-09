import random
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
    BASE = 3
    SIDE = BASE ** 2
    PROP_EMPTY = 0.75
    NUM_EMPTY = int(SIDE ** 2 * PROP_EMPTY)
    BASE_RANGE = range(BASE)

    rows = [g * BASE + r for g in random.sample(BASE_RANGE, BASE) for r in random.sample(BASE_RANGE, BASE)]
    cols = [g * BASE + c for g in random.sample(BASE_RANGE, BASE) for c in random.sample(BASE_RANGE, BASE)]
    nums = random.sample("123456789", SIDE)

    board = [nums[(BASE * (r % BASE) + r // BASE + c) % SIDE] for c in cols for r in rows] # complete Sudoku
    for i in random.sample(range(len(board)), NUM_EMPTY): # remove some numbers from complete puzzle
        board[i] = "."

    return board
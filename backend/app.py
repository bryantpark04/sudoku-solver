import time
from flask import Flask, request

from sudoku import solve_sudoku

app = Flask(__name__)

@app.route("/time")
def get_current_time():
    return {'time': time.time()};

@app.route('/solve', methods=['POST'])
def solve_sudoku_puzzle():
    board: list[str] = request.get_json()['body']
    solution: list[str] = solve_sudoku(board)
    return solution if solution else []

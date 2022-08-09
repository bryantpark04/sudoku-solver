import os
import random
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy

from backend.sudoku import solve_sudoku
from backend.models import initialize_sudoku_solve


app = Flask(__name__, static_folder='../frontend/build/', static_url_path='/')

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABSE_URL') or 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy()
db.init_app(app)

SudokuSolve = initialize_sudoku_solve(db) # workaround for circular import issue

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/solve', methods=['POST'])
def solve_sudoku_puzzle():
    board: list[str] = request.get_json()['body']
    solution: list[str]

    puzzle_key = ''.join(board)
    query = SudokuSolve.query.get(puzzle_key)
    if query:
        solution = [*query.solution]
    else:
        solution = solve_sudoku(board)
        solution_key = ''.join(solution)
        new_solve = SudokuSolve(puzzle=puzzle_key, solution=solution_key)
        db.session.add(new_solve)
        db.session.commit()
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

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
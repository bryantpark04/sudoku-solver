def initialize_sudoku_solve(db): # workaround for circular import issue
    class SudokuSolve(db.Model):
        puzzle = db.Column(db.String, primary_key=True)
        solution = db.Column(db.String)

    return SudokuSolve
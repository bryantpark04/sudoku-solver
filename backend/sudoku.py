import sys
from math import sqrt
from typing import Optional


def solve_sudoku(pzl: list[str]) -> Optional[list[str]]:
    setGlobals(len(pzl))
    blanks = blank_indices(pzl)
    illegals = blanksToIllegals(pzl, blanks)
    solved = bruteForce(pzl, illegals)
    return solved


def setGlobals(pzlLength):
    global N, SUB_BOX_HEIGHT, SUB_BOX_WIDTH, SYMBOL_SET, CONSTRAINT_SETS, NEIGHBORS, INDEX_TO_SETS
    N = int(sqrt(pzlLength))
    SUB_BOX_HEIGHT = int(sqrt(N))
    for _ in range(SUB_BOX_HEIGHT, -1, -1):
        if N % SUB_BOX_HEIGHT == 0: SUB_BOX_WIDTH = N // SUB_BOX_HEIGHT
    SYMBOL_SET = {*'123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'[:N]}
    CONSTRAINT_SETS = []
    CONSTRAINT_SETS += [{j for j in range(i*N, i*N + N)} for i in range(0, N)] # rows
    CONSTRAINT_SETS += [{j for j in range(i, pzlLength, N)} for i in range(0, N)] # columns
    tlcorners = {r*N+c for r in range(0, N, SUB_BOX_HEIGHT) for c in range(0, N, SUB_BOX_WIDTH)}
    CONSTRAINT_SETS += [{tlcorner + c + r*N for r in range(SUB_BOX_HEIGHT) for c in range(SUB_BOX_WIDTH)} for tlcorner in tlcorners] # boxes
    NEIGHBORS = {}
    INDEX_TO_SETS = {}
    for i in range(pzlLength):
        NEIGHBORS[i] = set()
        INDEX_TO_SETS[i] = set()
        for index,s in enumerate(CONSTRAINT_SETS):
            if i in s:
                NEIGHBORS[i].update(s)
                INDEX_TO_SETS[i].add(index)
        NEIGHBORS[i].remove(i)


def repr2D(pzl: list[str]):
    output = ''
    for i,c in enumerate(pzl):
        row, col = (i//N, i % N)
        if col == 0 and not row % SUB_BOX_HEIGHT and row > 0: # vertical separation between subblocks
            output += '\n' + ('+').join('-'*SUB_BOX_WIDTH for _ in range(N // SUB_BOX_WIDTH))
        if not col % SUB_BOX_WIDTH:
            if col == 0:    # next line
                output += '\n'
            else: # horizontal separation between subblocks
                output += '|'
        output += c
    return output.strip()


def bruteForce(pzl: list[str], b2i) -> Optional[list[str]]:
    if '.' not in pzl: return pzl

    blankIndices = set()
    flag = False
    for blank in b2i:
        nImpossible = len(b2i[blank])
        if nImpossible == N:
            return []
        if nImpossible == N-1:
            flag = True
            break
        blankIndices.add((nImpossible, blank))
    if not flag: nImpossible, blank = max(blankIndices)
    setOfChoices = {(blank, ch) for ch in SYMBOL_SET - b2i[blank]}

    # improvement 7
    if nImpossible < N-1: # if there is more than 1 choice
        blanks = blank_indices(pzl)
        num_choices_old = N - nImpossible
        storage = []
        for constraint_set in CONSTRAINT_SETS:
            for symbol in SYMBOL_SET:
                possible_choices = [pos for pos in constraint_set if pos in blanks and symbol not in b2i[pos]]
                num_possible_choices = len(possible_choices)
                if num_possible_choices == 1:
                    flag = True
                    setOfChoices = {(possible_choices[0], symbol)}
                    break
                if 0 < num_possible_choices < num_choices_old:
                    storage.append([num_possible_choices, possible_choices, symbol])
            if flag: break
        if storage:
            _, indices, symbol = min(storage)
            setOfChoices = {(index, symbol) for index in indices}

    for nblank, choice in setOfChoices:
        newB2i = {k:{*b2i[k]} for k in b2i if k!=nblank}
        for k in newB2i: # this is actually around 10-15% faster for whatever reason
            if k in NEIGHBORS[nblank]:
                newB2i[k].add(choice)

        newPzl = [*pzl]
        newPzl[nblank] = choice
        bF = bruteForce(newPzl, newB2i)
        if bF: return bF
    return None


def blank_indices(pzl):
    return {i for i,c in enumerate(pzl) if c=='.'}


def blanksToIllegals(pzl, blanks):
    return {i:{pzl[j] for j in NEIGHBORS[i] if pzl[j] != '.'} for i in blanks}


def main():
    args = sys.argv[1:]
    pzl = [*args[0]]
    solved = solve_sudoku(pzl)

    repr2D(pzl)
    print()
    if solved:
        repr2D(solved)
    else:
        print('invalid puzzle')


if __name__ == '__main__': 
    main()
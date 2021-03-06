class GridItem {

    constructor(id) {

        this.reference = document.getElementById(id);
        this.owner = 0;
    }

    set_owner(o) {

        this.owner = o;
        if (this.owner == 1) this.reference.style.backgroundColor = 'red';
        if (this.owner == 2) this.reference.style.backgroundColor = 'blue';
        if (this.owner == 3) this.reference.style.backgroundColor = 'green';
        if (this.owner == 0) this.reference.style.backgroundColor = 'transparent';
    }
}

let turn = 0;

let grid = [
    [
        [new GridItem('btn111'), new GridItem('btn112'), new GridItem('btn113')],
        [new GridItem('btn121'), new GridItem('btn122'), new GridItem('btn123')],
        [new GridItem('btn131'), new GridItem('btn132'), new GridItem('btn133')]
    ],
    [
        [new GridItem('btn211'), new GridItem('btn212'), new GridItem('btn213')],
        [new GridItem('btn221'), new GridItem('btn222'), new GridItem('btn223')],
        [new GridItem('btn231'), new GridItem('btn232'), new GridItem('btn233')]
    ],
    [
        [new GridItem('btn311'), new GridItem('btn312'), new GridItem('btn313')],
        [new GridItem('btn321'), new GridItem('btn322'), new GridItem('btn323')],
        [new GridItem('btn331'), new GridItem('btn332'), new GridItem('btn333')]
    ]
];

class GridLookup {

    static lookup_id(id) {

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                for (let k = 0; k < grid[i][j].length; k++) {
                    if (grid[i][j][k].reference.id == id) return new GridLookup(i, j, k);
                }
            }
        }

        return null;
    }

    get() {
        return grid[this.grid][this.row][this.col];
    }

    constructor(a, b, c) {

        this.grid = a;
        this.row = b;
        this.col = c;
    }
}

function mouse_over(square) {

    let lookup = GridLookup.lookup_id(square.id);
    if (lookup.get().owner == 0) lookup.get().reference.style.borderColor = (turn % 3 == 0) ? 'red' : (turn % 3 == 1 ? 'blue' : 'green');
}

function mouse_leave(square) {

    let lookup = GridLookup.lookup_id(square.id);
    if (lookup.get().owner == 0) lookup.get().reference.style.borderColor = 'transparent';
}

function mouse_click(square) {

    let lookup = GridLookup.lookup_id(square.id);
    if (lookup.get().owner == 0) {
        lookup.get().set_owner(turn % 3 == 0 ? 1 : (turn % 3 == 1 ? 2 : 3));
        turn++;
    }

    let red_victory = check_win(1, grid);
    let blue_victory = check_win(2, grid);
    let green_victory = check_win(3, grid);

    setTimeout(function() {

        if (red_victory && blue_victory && green_victory) {
            window.alert("3 Way Tie");
            window.location.reload(false);
        }

        else if (red_victory && blue_victory) {
            window.alert("2 way tie between red and blue!");
            window.location.reload(false);
        }

        else if (red_victory && green_victory) {
            window.alert("2 way tie between red and green!");
            window.location.reload(false);
        }

        else if (blue_victory && green_victory) {
            window.alert("2 way tie between blue and green!");
            window.location.reload(false);
        }

        else if (red_victory) {
            window.alert("Red wins!");
            window.location.reload(false);
        }
        else if (blue_victory) {
            window.alert("Blue wins!");
            window.location.reload(false);
        }
        else if (green_victory) {
            window.alert("Green wins!");
            window.location.reload(false);
        }
    }, 100);
}
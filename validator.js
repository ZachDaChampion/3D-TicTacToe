function check_win(player, board) {

    for (let i = 1; i < 4; i++) {
        for (let j = 1; j < 4; j++) {
            for (let k = 1; k < 4; k++) {

                for (let x = -1; x < 2; x++) {
                    for (let y = -1; y < 2; y++) {
                        for (let z = -1; z < 2; z++) {

                            // get cells
                            let first = '' + (i - x) + '' + (j - y) + '' + (k - z);
                            let second = '' + i + '' + j + '' + k;
                            let third = '' + (i + x) + '' + (j + y) + '' + (k + z);

                            console.log(first + ' ' + second + ' ' + third);

                            // validate that cells are on grid
                            if (!((first + second + third).includes('0') || (first + second + third).includes('4') || first == second || second == third)) {

                                // check if cells work
                                let first_works = GridLookup.lookup_id('btn' + first).get().owner == player;
                                let second_works = GridLookup.lookup_id('btn' + second).get().owner == player;
                                let third_works = GridLookup.lookup_id('btn' + third).get().owner == player;

                                // check for victory
                                if (first_works && second_works && third_works) {
                                    GridLookup.lookup_id('btn' + first).get().reference.style.borderColor = 'yellow';
                                    GridLookup.lookup_id('btn' + second).get().reference.style.borderColor = 'yellow';
                                    GridLookup.lookup_id('btn' + third).get().reference.style.borderColor = 'yellow';
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return false;
}
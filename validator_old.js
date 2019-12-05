let winning_boards = [

    '111 000 000',
    '000 111 000',
    '000 000 111',
    '100 100 100',
    '010 010 010',
    '001 001 001',
    '100 010 001',
    '001 010 100'
];

// i know this is disgusting, but it works and i'm not in the mood to do it right
function check_string(stra, strb) {

    let shared = '';
    for (let i = 0; i < stra.length; i++) shared += (stra[i] == strb[i]) ? stra[i] : 0;
    return winning_boards.includes(shared);
}

function check_board(board) {

    for (let i = 0; i < winning_boards.length; i++) {
        if (check_string(winning_boards[i], board)) return true;
    }

    return false;
}

function generate_board(player, squares) {

    let board = '';

    for (let i = 0; i < squares.length; i++) {

        for (let j = 0; j < squares[i].length; j++) {

            board += (squares[i][j].owner == player) ? 1 : 0;
        }

        board += ' ';
    }

    return board.trim();
}

function check_if_won(player, board_3d) {

    // check top flat face
    if (check_board(generate_board(player, [
        [GridLookup.lookup_id('btn111').get(), GridLookup.lookup_id('btn112').get(), GridLookup.lookup_id('btn113').get()], 
        [GridLookup.lookup_id('btn121').get(), GridLookup.lookup_id('btn122').get(), GridLookup.lookup_id('btn123').get()], 
        [GridLookup.lookup_id('btn131').get(), GridLookup.lookup_id('btn132').get(), GridLookup.lookup_id('btn133').get()]
    ]))) return true;

    // check middle flat face
    if (check_board(generate_board(player, [
        [GridLookup.lookup_id('btn211').get(), GridLookup.lookup_id('btn212').get(), GridLookup.lookup_id('btn213').get()], 
        [GridLookup.lookup_id('btn221').get(), GridLookup.lookup_id('btn222').get(), GridLookup.lookup_id('btn223').get()], 
        [GridLookup.lookup_id('btn231').get(), GridLookup.lookup_id('btn232').get(), GridLookup.lookup_id('btn233').get()]
    ]))) return true;

    // check bottom flat face
    if (check_board(generate_board(player, [
        [GridLookup.lookup_id('btn311').get(), GridLookup.lookup_id('btn312').get(), GridLookup.lookup_id('btn313').get()], 
        [GridLookup.lookup_id('btn321').get(), GridLookup.lookup_id('btn322').get(), GridLookup.lookup_id('btn323').get()], 
        [GridLookup.lookup_id('btn331').get(), GridLookup.lookup_id('btn332').get(), GridLookup.lookup_id('btn333').get()]
    ]))) return true;

    // check front front-back face
    if (check_board(generate_board(player, [
        [GridLookup.lookup_id('btn111').get(), GridLookup.lookup_id('btn112').get(), GridLookup.lookup_id('btn113').get()], 
        [GridLookup.lookup_id('btn211').get(), GridLookup.lookup_id('btn212').get(), GridLookup.lookup_id('btn213').get()], 
        [GridLookup.lookup_id('btn311').get(), GridLookup.lookup_id('btn312').get(), GridLookup.lookup_id('btn313').get()]
    ]))) return true;

    // check middle front-back face
    if (check_board(generate_board(player, [
        [GridLookup.lookup_id('btn121').get(), GridLookup.lookup_id('btn122').get(), GridLookup.lookup_id('btn123').get()], 
        [GridLookup.lookup_id('btn221').get(), GridLookup.lookup_id('btn222').get(), GridLookup.lookup_id('btn223').get()], 
        [GridLookup.lookup_id('btn321').get(), GridLookup.lookup_id('btn322').get(), GridLookup.lookup_id('btn323').get()]
    ]))) return true;

    // check back front-back face
    if (check_board(generate_board(player, [
        [GridLookup.lookup_id('btn131').get(), GridLookup.lookup_id('btn132').get(), GridLookup.lookup_id('btn133').get()], 
        [GridLookup.lookup_id('btn231').get(), GridLookup.lookup_id('btn232').get(), GridLookup.lookup_id('btn233').get()], 
        [GridLookup.lookup_id('btn331').get(), GridLookup.lookup_id('btn332').get(), GridLookup.lookup_id('btn333').get()]
    ]))) return true;

    // check left left-right face
    if (check_board(generate_board(player, [
        [GridLookup.lookup_id('btn111').get(), GridLookup.lookup_id('btn121').get(), GridLookup.lookup_id('btn131').get()], 
        [GridLookup.lookup_id('btn211').get(), GridLookup.lookup_id('btn221').get(), GridLookup.lookup_id('btn231').get()], 
        [GridLookup.lookup_id('btn311').get(), GridLookup.lookup_id('btn321').get(), GridLookup.lookup_id('btn331').get()]
    ]))) return true;

    // check middle left-right face
    if (check_board(generate_board(player, [
        [GridLookup.lookup_id('btn112').get(), GridLookup.lookup_id('btn122').get(), GridLookup.lookup_id('btn132').get()], 
        [GridLookup.lookup_id('btn212').get(), GridLookup.lookup_id('btn222').get(), GridLookup.lookup_id('btn232').get()], 
        [GridLookup.lookup_id('btn312').get(), GridLookup.lookup_id('btn322').get(), GridLookup.lookup_id('btn332').get()]
    ]))) return true;

    // check right left-right face
    if (check_board(generate_board(player, [
        [GridLookup.lookup_id('btn113').get(), GridLookup.lookup_id('btn123').get(), GridLookup.lookup_id('btn133').get()], 
        [GridLookup.lookup_id('btn213').get(), GridLookup.lookup_id('btn223').get(), GridLookup.lookup_id('btn233').get()], 
        [GridLookup.lookup_id('btn313').get(), GridLookup.lookup_id('btn323').get(), GridLookup.lookup_id('btn333').get()]
    ]))) return true;
}
# TIC-TAC-TOE GAME 

    # The game is played on a grid that’s 3 squares by 3 squares.
    # Players take turns putting their marks (O or X) in empty squares.
    # The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
    # When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.
board = [
    ['___', '___', '___'],     # Row 1
    ['___', '___', '___'],     # Row 2
    ['___', '___', '___'],      # Row 3
    ]

def display_board():
    # The GUI
    print("*" * 19)  # Top border (frame)
    for i in range(3):
        # Print row with asterisks surrounding the content
        print(f"* {board[i][0]} | {board[i][1]} | {board[i][2]} *")
        if i < 2:
            print("*-----+-----+-----*")  # Separator between rows
    print("*" * 19)  # Bottom border (frame)

def player_input(player):
    """
    Function to get the position from the player.
    """
    print(f"Player {player}'s turn...")
    
    while True and not is_tie():
        row = int(input("Enter row:"))
        column = int(input("Enter column:"))
        
        if row < 1 or row > 3 or column < 1 or column > 3:
            print("Invalid input. Row and column must be between 1 and 3.")
            continue

        if board[row-1][column-1] != '___':
            print("Error, this position is already taken")
            continue
        else: 
            board[row-1][column-1] = f" {player} "
            break

def check_win(player):
    player_str = f" {player} "
    for i in range(3):
        # Check rows
        if board[i][0] == board[i][1] == board[i][2] == player_str:
            return True
        # Check columns
        if board[0][i] == board[1][i] == board[2][i] == player_str:
            return True
    
    # Check diagonals
    if board[0][0] == board[1][1] == board[2][2] == player_str:
        return True
    if board[0][2] == board[1][1] == board[2][0] == player_str:
        return True

def is_tie():
    """Check if the game is a tie."""
    for row in board:
        if '___' in row:  # If there's still an empty space, it's not a tie
            return False
    return True  # No empty spaces left, it's a tie

def play():
    current_player = "X"  # Start with player 'X'
    while True:
        display_board()
        player_input(current_player)
        if check_win(current_player):
            display_board()
            print(f"Congratulations player {current_player}! We have a winner.")
            return

        # Switch player: if current is 'X', change to 'O' and vice versa
        current_player = "O" if current_player == "X" else "X"


play()
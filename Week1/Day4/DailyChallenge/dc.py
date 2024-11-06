# Solve the matrix:

matrix_string = """
7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!
"""

matrix = [list(row) for row in matrix_string.strip().split('\n')]
string = ""
for i in range(3):
    for row in matrix:
        if row[i].isalpha():
            string += (row[i])
        else:
            if string and string[-1] != " ":
                string += " "
print(string)
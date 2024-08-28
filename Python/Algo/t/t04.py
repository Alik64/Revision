import sys

# Vérifier qu'un argument a été passé
if len(sys.argv) != 2:
    print("Tu ne me la mettras pas à l’envers.")
    sys.exit(1)

# Récupérer l'argument
argument = sys.argv[1]

# Vérifier si l'argument est un entier valide (positif ou négatif)
try:
    number = int(argument)
except ValueError:
    print("Tu ne me la mettras pas à l’envers.")
    sys.exit(1)

# Vérifier si le nombre est pair ou impair
if number % 2 == 0:
    print("pair")
else:
    print("impair")
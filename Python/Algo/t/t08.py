# Créez un programme qui affiche le résultat d’une puissance.
# L’exposant ne pourra pas être négatif.
# ne pas utiliser pow() ou **
import sys

# Vérifier qu'exactement deux arguments ont été passés
if len(sys.argv) != 3:
    print("erreur.")
    sys.exit(1)

# Récupérer les arguments
base = sys.argv[1]
exponent = sys.argv[2]

# Vérifier si les arguments sont des entiers
try:
    base = int(base)
    exponent = int(exponent)
except ValueError:
    print("Veuillez entrer deux entiers.")
    sys.exit(1)

# Vérifier si l'exposant est négatif
if exponent < 0:
    print("erreur.")
    sys.exit(1)

# Calculer le résultat manuellement sans utiliser pow() ou **
result = 1
for _ in range(exponent):
    result *= base

# Afficher le résultat
print(result)

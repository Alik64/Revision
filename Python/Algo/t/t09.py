
# Créez un programme qui affiche si un nombre est premier ou non.
import sys

# Vérification du nombre d'arguments
if len(sys.argv) != 2:
    print("Usage: python exo.py <entier>")
    sys.exit(1)

# Récupérer l'argument et vérifier qu'il s'agit d'un entier
try:
    number = int(sys.argv[1])
except ValueError:
    print("Erreur : Veuillez entrer un entier valide.")
    sys.exit(1)

# Cas spéciaux pour 0 et 1
if number in (0, 1):
    print(f"Non, {number} n'est pas un nombre premier.")
    sys.exit(0)

# Fonction pour vérifier si un nombre est premier
def is_prime(n):
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    for i in range(3, int(n**0.5) + 1, 2):
        if n % i == 0:
            return False
    return True

# Affichage du résultat
if is_prime(number):
    print(f"Oui, {number} est un nombre premier.")
else:
    print(f"Non, {number} n’est pas un nombre premier.")
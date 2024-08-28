import sys

# Vérifier qu'exactement deux arguments ont été passés
if len(sys.argv) != 3:
    print("Usage: python exo.py <chiffre1> <chiffre2>")
    sys.exit(1)

# Récupérer les arguments
number1 = sys.argv[1]
number2 = sys.argv[2]

# Vérifier si les arguments sont des entiers
try:
    number1 = int(number1)
    number2 = int(number2)
except ValueError:
    print("Veuillez entrer deux entiers.")
    sys.exit(1)

# Vérifier les conditions spécifiques pour afficher le résultat ou une erreur
if number2 == 0 or number1 < number2:
    print("erreur")
    sys.exit(1)

# Calculer le résultat et le reste
result = number1 // number2
remainder = number1 % number2

# Afficher le résultat et le reste
print(f"résultat: {result}")
print(f"reste: {remainder}")
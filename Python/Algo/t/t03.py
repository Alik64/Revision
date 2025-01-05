#Créez un programme qui affiche l’alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d’un retour à la ligne.
import sys

# Vérifier qu'un argument a été passé
if len(sys.argv) != 2:
    print("Usage: python exo.py <lettre>")
    sys.exit(1)

# Récupérer le caractère et s'assurer qu'il s'agit d'une lettre minuscule
letter = sys.argv[1]

if len(letter) != 1 or not letter.islower() or not letter.isalpha():
    print("Erreur : Veuillez entrer une seule lettre minuscule.")
    sys.exit(1)

# Convertir la lettre en son code ASCII
ascii_value = ord(letter)

# Afficher l'alphabet à partir de la lettre donnée
for i in range(ascii_value, 123):
    print(chr(i), end="")
print()
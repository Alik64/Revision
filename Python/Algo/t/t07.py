#Créez un programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument.
#Fonctions interdites: -La fonction len
import sys

# Vérifier qu'un seul argument est passé
if len(sys.argv) != 2:
    print("erreur")
    sys.exit(1)

# Récupérer l'argument
argument = sys.argv[1]

# Vérifier si l'argument est une chaîne de caractères (évitant des nombres)
if argument.isdigit():
    print("erreur")
    sys.exit(1)

# Compter le nombre de caractères sans utiliser len()
count = 0
for char in argument:
    count += 1

# Afficher le nombre de caractères
print(count)
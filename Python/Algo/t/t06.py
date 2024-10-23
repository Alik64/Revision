#Créez un programme qui affiche l’inverse d’une chaine de caractères.
#Fonctions interdites: -La fonction reverse
 
import sys

# Vérifier qu'un argument a été spécifié
if len(sys.argv) != 2:
    print("Usage: python exo.py <chaine>")
    sys.exit(1)

# Récupérer l'argument
argument = sys.argv[1]

# Inverser la chaîne de caractères sans utiliser slicing
inversed = ""
for char in argument:
    inversed = char + inversed

# Afficher l'inverse de l'argument
print(inversed)
# Soluiton avec slicing
print(argument[::-1])
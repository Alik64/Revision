
# Ce que doit faire votre programme :
# L'objectif est de construire une tour à l'aide de petits cubes en bois, sachant que la forme de cette tour consiste en un ensemble de grands cubes placés les uns au-dessus des autres. La base de la tour est un cube de taille 17×17×17, c'est-à-dire composé de 17×17×17 = 4 913 petits cubes.
# Sur ce cube est posé un autre cube de taille 15×15×15. 
# Au-dessus de ce dernier se trouve un cube de 13×13×13. 
# La tour continue ainsi jusqu'à atteindre le sommet, qui consiste en un cube de taille 1×1×1.

n = 9 #nombre de chiffre impaire de 1 à 17
sum_of_cubes = n**2 * (2 * n**2 - 1)
print(sum_of_cubes)
#Écrivez un programme qui affiche une table de multiplication allant jusqu'à 20 fois 20.

for i in range(1, 21):
    for j in range(1, 21):
        print(i * j, end=" ")
    print()
    
#ma solution 

mult = 1
for loop in range(20):
   for row in range(1,21):
      print(row * mult,end=' ')      
   print()
   mult +=1
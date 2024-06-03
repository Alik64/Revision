'''
In a high-rise building, there are 5 entrances with 20 apartments each. On each floor, there are 4 apartments. The numbering of the apartments goes sequentially from bottom to top:

- On the 1st floor of the 1st entrance, there are apartments 1, 2, 3, 4.
- On the 2nd floor of the 1st entrance, there are apartments 5, 6, 7, 8, and so on.

Write a script that receives the apartment number and displays the entrance and floor number on the screen. Test the script with different input values.
'''

def get_entrance_and_floor(apartment_number):
    entrance = (apartment_number - 1) // 20 + 1
    floor = (apartment_number - 1) // 4 + 1
    return entrance, floor

# Test the script with different apartment numbers
test_apartment_numbers = [1, 5, 21, 81, 85, 100]
for apt_num in test_apartment_numbers:
    entry, floor = get_entrance_and_floor(apt_num)
    print(f"Apartment {apt_num}: Entrance {entry}, Floor {floor}")
   
    
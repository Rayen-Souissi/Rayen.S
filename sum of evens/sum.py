def sum_peers(liste):
    sum = 0
    for number in liste:
        if number % 2 == 0:
            sum += number
    return sum


print("Enter a space-separated list of numbers : ")
input_user = input()

list_of_numbers = [int(number) for number in input_user.split()]

result = sum_peers(list_of_numbers)
print(f"The sum of even numbers in the list is : {result}")

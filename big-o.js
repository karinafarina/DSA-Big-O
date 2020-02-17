// 1. 
//   1. 0(1)
//   2. 0(n)
// 2. 0(1) because it is performing a check, basic math operation, and returning a Boolean; the inpu is just one value with one operationbeing performed on it 

// 3. O(n^k) Polynomial time because it has to loop through twice

// 4. O(n) Linear time because it loops through once for each DataTransferItem

// 5. 0(1) constant time because it goes through the array once and stops when it finds a match to the item

// 6. O(n^k) Polynomial time because it loops through twice

// 7. It takes an array of numbers, num, loops through it, for each number in the array, if the number = 1 it adds a 0 to the end of an new array, result, if the number = 2 it adds 1 to result and otherwise, it adds each number - 2 + each number -3 to result. It then returns the result array. O()

//8. Finds the middle item and checks to see if that is our item; otherwise, it take the higher or lower end and keeps checking and splitting the array until we find the item. The big O classificaiton is O(log(n)) return -1 following while loop is to indicate that item does not exist in given array, false return

//9. This function is just grabbing a random element in the array; the length of the array does not matter; the operation will take the same amount of time, therfore, the big o clsiffiaation would be constand O(1)

//10. takes a number n, if n < 2 or a decimal return its not prime; otherwise, check if 'n' is divisible by an intger between 2 and n
//Linear becaus in the worst case our loop will only run n times. therfor amount of operations will alwasy directly scale with value of n O(n) 
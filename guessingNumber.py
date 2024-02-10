import random

ran = random.randint(1,25)
chances = 5

for i in range(1,6):
  num = int(input("enter a number between 1 & 25:"))
  if(num>25 or num<1):
    print("OUT OF RANGE. Choose between 1-25 only.")
  elif(num == ran):
    print("Congrats!You guessed the correct answer!")
    exit() # quit() can also be used to end the program
  elif(num>ran):
    print("The number you entered is higher than the correct answer,Try again")
  else:
    print("The number you entered is lower than the correct answer,Try again")
  
  chances-=1
  

print("Game Over. Your Chances are over.The Correct answer is",ran)
exit()

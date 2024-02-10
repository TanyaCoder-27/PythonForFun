import random

ran = random.randint(1,100)
chances = 10

for i in range(1,10):
  num = int(input("enter a number between 1 & 100:"))

  if(num>100 or num<1):
    print("OUT OF RANGE. Choose between 1-25 only.")
  elif(num == ran):
    print("Congrats!You guessed the correct answer!")
    exit()
  elif(num>ran):
    print("The number you entered is higher than the correct answer,Try again")
  else:
    print("The number you entered is lower than the correct answer,Try again")
  
  chances-=1
print("Game Over. Your Chances are over.The Correct answer is",ran)
exit()

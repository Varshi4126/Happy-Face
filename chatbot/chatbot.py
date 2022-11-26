import random
from textblob import TextBlob


name = input("Hello my dear friend, What is your name ?   ")
nicknameQ = input(f"Do you have a nickname {name}? ")


if "y" in nicknameQ.lower():
    nickname = input("What is your nickname? ")
    print(f"Nice to meet you {nickname}!")
elif "n" in nicknameQ.lower():
    nickname = name + name[-1] + "lu"
    print(f"I love to call you {nickname}")


messages = [
    f"How are you feeling today {nickname}?  ",
    f"Hello {nickname}! How  you doing?  ",
    f"Is everything okay {nickname}?  ",
    f"How was your day {nickname}?  ",
    f"How are things going {nickname}?  "
]
print(random.choice(messages))

message1 = input()
blob = TextBlob(message1)

if blob.polarity > 0:
    print("Glad you are doing well.")
else:
    print("Sorry to hear that.")



topics = [
    "low feeling",
    "hopeless feeling",
    "financial problems",
    "relationship",
    "exams",
    "movies",
    "music",
    "jokes"
]

questions = [
    "What is your take on ",
    "What do you think about ",
    "What is your opinion on ",
    "I would like your opinion on " 
]


for i in range(0, random.randint(3, 4)):
    q = random.choice(questions)
    t = random.choice(topics)

    questions.remove(q)
    topics.remove(t)


    question = q + t + "?"
    print(question) 

    topicA = input()
    blob = TextBlob(topicA)

    if blob.polarity > 0.5:
        print(f"You have a clear opinion on {t}. Seems like you are a bit positive towards {t}.")
    elif blob.polarity > 0.1:
        print(f"It's clear that you do like {t}.")
    elif blob.polarity < -0.5:
        print(f"Oops! You really hate {t}.")
    elif blob.polarity < -0.1:
        print(f"You don't like {t}.")
    else:
        print(f"So, you are neutral towards {t}.")

byesType = [
    f"Good bye {nickname}!. Give a try on the test.",
    f"Take a break and watch your favourite movie. Chill out. Still have any issue talk with me. Let's solve by our depression test. Have a great day {nickname}, Bye!",
    f"Alright {nickname}, go and grab your favourite music...gotta bounce. Peace out. Take a test and reduce your problem.",
    f"See you later {nickname}!. Watch any sort of comedy show or cartoon which is your all time favourite. Take test okay!",
    f"Okay! Let's talk some other time {nickname}!. Take some time and attempt the test."
]

print(random.choice(byesType))


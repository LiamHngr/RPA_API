import csv
import random

with open('strings.csv', newline='') as csvfile:
    reader = csv.reader(csvfile)
    strings = [row[0] for row in reader]

def get_random_string():
    return random.choice(strings)
# Birthday Paradox Experiment

## Abstract
This exercise is for showing the birthday paradox in action, and to demonstrate the Law of Big Numbers.

## Algorithm

### Chance by Number of Runs Function
In order to avoid probabilistic solutions, and the using of probability formulas, I'm implelmenting a lifelike scenario, by creating an array with N randomized birthdates starting from January 1st 1970 (Unix time) to now.

Once we have a list of N dates, we can start out experiment. The experiment is to find whether we have 2 people that share a birthday. We say that two people share a birthday if they were born on the same month and day. For example, if we have two people that were born on January 27th, they share a birthday.
If we find two people that share a birthday, we count that as a successful experiment, and increment the number of successfull experiments.

After all the runs are completed, we divide the number of successful runs by the number of total runs to get the average. We can see that the result converges to around 50% if we have around 23 people.


### Chance by Accuracy Function
In this function, I check the two runs at the same time. One with X runs, and the other with X + 1 runs, using the first function (Chance by Number of Runs). 

Once I have the result from the two I want to get the absolut difference between them. If the absolut difference between the runs is less than the accuracy that is required, we can stop the experiment and return the current run.

This demonstrates the Law of Big Numbers, by showing that for really big numbers, the result will only change slightly. 

## How to start?
Inside the birthdayParadox.js file, there is a driver code for the experiment. Feel free to change any parameter that you want to see the result change. 
To run the program, type "node birthdayParadox.js".


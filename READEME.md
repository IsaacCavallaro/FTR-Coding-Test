## Overview

Thank you for taking the FTR Coding Test! The test has two parts, one in which you’ll be writing
an application, and a second part in which we’ll ask you to describe how you’d deal with some
hypothetical changes to the application you’ve written. It might make sense to read both parts
before starting.

---

## Part 1: Writing the application

You can implement the below program however you’re most comfortable (e.g. web app, console
program, desktop app, etc). The way the system handles user interaction isn't important, but
preserving the features is. For example, if you create a website you may choose to implement
halt/resume as buttons not text inputs. We would prefer if your submission was written in
TypeScript but we will accept submissions in other languages.

The application should accept an ongoing series of user supplied numbers as inputs, and output
notifications when certain conditions are met. It should operate as follows:

---

1. On startup, the program will **prompt the user for the number of seconds** (X) between
outputting the frequency of each number to the screen.
2. Every **X seconds the program will display**, in frequency descending order, the list of
numbers and their frequency.
3. If the user enters 'halt' the timer should pause.
4. If the user enters 'resume' the timer should resume.
5. If the user enters a number that is one of the first 1000 numbers in the Fibonacci
    
    sequence, the system should alert "FIB"
    
6. If the user enters 'quit', the application should output the numbers and their frequency, a
    
    farewell message, and finally terminate.
    
    ---
    
    ## Example
    
    ```jsx
    Please input the amount of time in seconds between emitting numbers and their frequency
    15
    >> Please enter the first number
    10
    >> Please enter the next number
    10
    >> Please enter the next number
    8
    >> FIB
    >> Please enter the next number >> 10:2, 8:1
    halt
    >> timer halted
    resume
    >> timer resumed
    8
    >> FIB
    >> Please enter the next number
    10
    >> Please enter the next number
    33
    >> 10:3, 8:2, 33:1
    >> Please enter the next number
    quit
    >> 10:3, 8:2, 33:1
    >> Thanks for playing, press any key to exit.
    ```
    
    ---
    
    ## Part 2 - Changes to your application
    
    1. You have a new requirement to implement for your application: its logic should stay
    exactly the same but it will need to have a different user interface (e.g. if you wrote a
    web app, a different UI may be a REPL).
        
        Please describe how you would go about implementing this new UI in your application?
        Would you need to restructure your solution in any way?
        
    2. You now need to make your application “production ready”, and deploy it so that it can
    be used by customers.
        
        Please describe the steps you’d need to take for this to happen.
        
    3. What did you think about this coding test - is there anything you’d suggest in order to
    improve it?
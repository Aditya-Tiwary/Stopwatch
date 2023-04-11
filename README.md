# Stopwatch

This is a simple stopwatch web application that allows users to time events by measuring the elapsed time with hours, minutes, seconds, and milliseconds.

### Getting Started

To use the stopwatch application, simply open the index.html file in your web browser. The user interface displays a digital stopwatch with an initial value of "00 hr 00 min 00 sec 00". The user can start, stop, and reset the stopwatch using the corresponding buttons.

### How It Works

The stopwatch functionality is implemented using JavaScript. The stopwatch.js file contains the logic for the stopwatch, which works as follows:

1. The stopwatch keeps track of the elapsed time using four variables: hr, min, sec, and msec, representing hours, minutes, seconds, and milliseconds, respectively.
2. The startTimer() function sets an interval timer that calls the runStopwatch() function every 10 milliseconds.
3. The runStopwatch() function increments the msec variable by 1, and checks if it has reached 100 milliseconds. If it has, it increments the sec variable by 1 and resets msec to 0. If sec has reached 60, it increments min by 1 and resets sec to 0. Similarly, if min has reached 60, it increments hr by 1 and resets min to 0.
4. The displayHr, displayMin, displaySec, and displayMsec variables are used to format the elapsed time with leading zeros as needed, and are concatenated to create a string that is displayed in the HTML element with the ID "display".
5.The stopTimer() function clears the interval timer to stop the stopwatch from running.
6.The resetTimer() function stops the timer, resets all the variables to 0, and updates the display element with the initial "00 hr 00 min 00 sec 00" value.
7.Event listeners are added to the three button elements in the HTML document with the IDs "start", "stop", and "reset" to call the appropriate functions when clicked.

## Authors

This web application was created by Aditya Tiwary.

## 

This project is licensed under the MIT License - see the LICENSE.md file for details.

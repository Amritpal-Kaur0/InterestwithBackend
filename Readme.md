# Debounce and Throttle Implementation for "Count Interest" 

## Overview

This project implements debounce and throttle techniques in the "Count Interest" web application to enhance the user experience and optimize the performance of the interest calculation.


### Debounce
Debouncing is implemented on the input field for "Time" to ensure that the interest calculation is triggered only after the user has stopped typing for a certain duration. This helps prevent unnecessary API calls and provides a smoother interaction.

### Throttle

Throttling is applied to the interest calculation function to limit the frequency of API requests. It ensures that the interest calculation function is executed at most once per second, even if the user continues to interact with the input fields rapidly.


### Debounce

The `BounceCountInt` function uses a `setTimeout` mechanism to delay the execution of the `countInterest` function. If the user continues to input within the debounce delay (set to 1000 milliseconds), the timer is reset. The interest calculation is triggered only when the user pauses for the specified duration.

``javascript
let timeout;

function BounceCountInt() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        countInterest();
    }, 1000);
}``

## How to Use
* Clone the repository to your local machine.
* Open the index.html file in a web browser.
* Start server by nodemon index.js
* Enter values for "Principal," "Rate," and "Time" to see the debouncing and throttling effects on the interest calculation.

## Dependencies
The project uses vanilla JavaScript for the implementation.
The web application relies on a backend server (e.g., Node.js/Express) to handle the interest calculation API requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
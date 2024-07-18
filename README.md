# Form-Creation-Validation
Overview
The User Registration Form project implements a simple web form for user registration with basic client-side validation using HTML, CSS, and JavaScript. This README provides an overview of the project structure, files, and functionality.

# Files
## index.html
The HTML file defines the structure of the user registration form. It includes input fields for username, email, and password, along with a submit button and a feedback section for validation messages.

## style.css
The CSS file styles the user registration form to enhance visual appeal and usability. It includes styles for form elements, buttons, and feedback messages.

## script.js
The JavaScript file provides client-side validation for the user registration form. It handles form submission events, validates input values (username length, email format, password length), and displays appropriate feedback messages based on validation results.

## Usage
Open the Form: Open the index.html file in a web browser.
Fill out the Form:
Enter a username (minimum 3 characters).
Enter a valid email address.
Enter a password (minimum 8 characters).
Submit the Form: Click the "Register" button to submit the form.
Validation Feedback:
If any input does not meet the validation criteria, corresponding error messages will be displayed in the feedback section below the form.
If all inputs are valid, a success message ("Registration successful") will be displayed.

## Features
Form Validation: Validates username length, email format using a regular expression (emailPattern), and password length.
Feedback Messages: Displays error messages for invalid inputs and a success message for valid registration.
Responsive Design: Utilizes CSS for responsive design principles, ensuring the form adapts to different screen sizes.

## Future Enhancements
Enhance email validation to check for domain validity.
Implement backend validation for more robust security.
Add additional form fields or features based on project requirements.

## Notes
This project focuses on frontend validation for demonstration purposes. Backend validation and security considerations are crucial for production environments.
Credits
Created by [Fredrick Akuffo]

<!-- Fetch data project -->

# Fetch and Display User Data

This project demonstrates how to retrieve data asynchronously from an API and display it in an unordered list on a web page. It uses JavaScript's `fetch` API to get user data from `jsonplaceholder.typicode.com`.

## Project Structure

- `fetch-data.html`: The main HTML file containing the structure of the webpage.
- `fetch-data.css`: The CSS file for styling the webpage.
- `fetch-data.js`: The JavaScript file containing the code to fetch and display user data.

## How It Works

The JavaScript code in `fetch-data.js` does the following:

1. Waits for the DOM to be fully loaded using `DOMContentLoaded`.
2. Defines an asynchronous function `fetchUserData` to fetch user data from the API.
3. Fetches user data from the `https://jsonplaceholder.typicode.com/users` endpoint.
4. Parses the response as JSON.
5. Clears any existing content in the `div` with the id `api-data`.
6. Creates a new `ul` element.
7. Iterates over the fetched user data, creating an `li` element for each user, and appends it to the `ul` element.
8. Appends the `ul` element to the `div` with the id `api-data`.
9. Handles any errors that occur during the fetch operation by displaying an error message.

## Files

### `fetch-data.html`
### `fetch-data.css`
### `fetch-data.js  `

## Usage
1. Clone or download the repository.
2. Open fetch-data.html in a web browser.
3 The page will automatically fetch and display the user data from the API.
Dependencies
4. No external dependencies are required for this project. It uses vanilla JavaScript.

## License
1. This project is open source and available under the MIT License.


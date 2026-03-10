# Sequential User Fetcher

A simple web application that demonstrates how to fetch user data from an external API using JavaScript async and await.  
The application loads users sequentially and displays them as cards on the page.

## Project Overview

This project fetches random user profiles from the Random User API and displays them dynamically in the browser.

When the user clicks the Load Users button:

1. A loading message appears
2. The application fetches users one by one from the API
3. Each user is displayed as a card with their profile picture, name, and email
4. Once all users are loaded, the loading message disappears

The project demonstrates how asynchronous JavaScript works when fetching data sequentially.

## Features

• Fetches data from a public API  
• Uses Async and Await for asynchronous operations  
• Dynamically creates user cards using DOM manipulation  
• Displays a loading indicator while fetching data  
• Responsive grid layout using CSS  
• Simple and clean UI

## Technologies Used

HTML  
CSS  
Vanilla JavaScript  
Random User API

## How It Works

### HTML Structure

The HTML file creates the basic layout of the application.

Main elements include:

• Application title heading  
• Button to trigger user fetching  
• Loading text indicator  
• Container where user cards are displayed

The JavaScript file is linked at the bottom so the DOM loads before scripts run.

### JavaScript Logic

The JavaScript file handles fetching data and updating the UI.

Workflow:

1. The button is selected using getElementById
2. An event listener detects button clicks
3. When clicked, the fetchUsers() function runs
4. A loading message appears
5. A loop runs six times to fetch six users from the API
6. Each API response is converted to JSON
7. User data is extracted from the response
8. A card element is created dynamically using DOM methods
9. The card is appended to the container
10. After all users load, the loading message disappears

Because await is used inside the loop, each request waits for the previous one to complete. This is known as sequential fetching.

### CSS Styling

CSS is used to create a modern card layout.

Key styling features:

• Dark theme background  
• Responsive grid layout for user cards  
• Hover animation on cards  
• Circular user avatars  
• Styled button and loading text

The layout automatically adjusts based on screen size using CSS Grid.

## API Used

Random User API  
https://randomuser.me/

The API returns randomly generated user data including:

• Name  
• Email  
• Profile picture  
• Location  
• Phone number

In this project we use:

• Name  
• Email  
• Profile picture

## Learning Concepts

This project helps understand several important frontend development concepts:

• Asynchronous JavaScript  
• Async and Await  
• Fetch API  
• DOM Manipulation  
• Dynamic UI Rendering  
• Sequential API Requests

## Future Improvements

Possible enhancements for this project:

• Add error handling using try and catch  
• Add loading spinner animation  
• Fetch users in parallel using Promise.all  
• Add more user details such as location and phone number  
• Add search or filter functionality

## Author

Adnan Ashraf

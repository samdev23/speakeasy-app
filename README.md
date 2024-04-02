# Speakeasy Websocket Application

This is the react frontend to an overall web socket application. It allows users to connect to a WebSocket server and chat with each other in real-time. This application uses an AWS API websocket gateway with routes implemented by a lambda function to do the websocket server logic. You can find that code here: https://github.com/samdev23/speakeasy-lambda-api-handler. 

Below, you'll find instructions on how to set up and run this react application.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
  - [Landing Page](#landing-page)
  - [Chat Page](#chat-page)
- [Features](#features)

## Getting Started
### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone this repository to your local machine.

   `git clone https://github.com/samdev23/speakeasy-app`
   
2. Navigate to the project directory.
   
   `cd speakeasy-app`
   
3. Install dependencies using npm.
   
   `npm install`

### Running the Application
  - Run the following command to start the development server:
      `npm start`
    
  - The application will be available at http://localhost:3000 in your web browser.
  - Alternatively you can assess the deployed version of this app at: http://speakeasy-webpage.s3-website.us-east-2.amazonaws.com/

## Usage
### Landing Page

  - When you visit the landing page (/), you can set your username and connect to the chat server.
  - Enter your desired username and click on the "Connect" button. Once connected, you will be redirected to the chat page (/chat).

### Chat Page

- On the chat page, you can see the list of users currently online and the chat messages.
- Type your message in the input box at the bottom and press Enter to send a public message to all users.
- To disconnect from the chat server, click on the "Disconnect" button which is the green button on the top right

## Features
  - Real-time communication via WebSocket.
  - Public messaging: Users can send messages visible to all connected users.
  - User presence: List of users currently online is displayed.
  - Simple and intuitive user interface.

## Contact
Samuel Johnson - samj944@gmail.com  


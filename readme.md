# One Blog
A single page application blogging platform.

## Features
* User authentication via Google Sign-in.
* Post management
* Draft and publish post using Markdown Syntax. 
* Random Post generation

## Firebase Configuration
To get started with Google authentication

1. Login in [Firebase](https://firebase.google.com/) with your Google account.
2. Click the Go to console button and press CREATE NEW PROJECT.
3. Name the project and choose your country.
4. While in the Project console, click Authentication on the sidebar
5. Under Authentication, select the SIGN-IN METHOD tab. Enable Google Sign-in provider and click SAVE.

To get your firebase configuration, click WEB SETUP and copy only the following

`````
  // Initialize Firebase
  var config = {
    apiKey: "...",
    authDomain: "...",
    databaseURL: "...",
    storageBucket: "...",
    messagingSenderId: "..."
  };
```````
And update the file `./public/js/firebase.config.js` and your done!


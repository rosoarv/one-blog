# One Blog
A single page application blogging platform.

## Features
* User authentication via Google Sign-in.
* Post management
* Draft and publish post using Markdown Syntax. 
* Random Post generation

## Getting Started
Before you install make sure you have an Apache server and MySQL running in your PC. Also, you need to have [Laravel](https://laravel.com/docs/5.4) and [Composer](https://getcomposer.org/) installed in your machine.

Download the files or use the following command to clone the repository to your local system

`git clone https://github.com/rosoarv/one-blog.git projectname`

`cd projectname`

`composer install` 

## Database Set-up
Create a database and import the sql file under "`./db/one-blog.sql`".
Update the database environment file `.env.example` with your database connection values and rename the file to `.env`.

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

To run the application, open command line inside your directory and type `php artisan serve` to start the app on http://localhost:8000/



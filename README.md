# Code Base Interview
* Team Members & Contributions
  * Daniel
    * Initial HTML/CSS skeleton
    * Backend - Firebase setup and functions (auth, read, write)
    * Frontend - Responsive design on "Brands", "Hosts", "How It Works", and "Home" page.
      Wrote code for site-wide Footer. Implemented React-Router throughout the app.
  * Will 
    * Products Page 
      * Item Component
      * Popup Component with more details for each product
      * Like / unlike updates firebase values
  * Christine

* Necessary Installations / Libraries We Used
  * `npm install react`
  * `npm install react-router`
  * `npm install react-router-dom`
  * `npm install react-media`
  * `npm install firebase`
  * `sudo npm install firebase-tools`
  * `npm install @emotion/styled`
  * `npm install @emotion/core`
  * `npm install redux react-redux`
  * `npm install react-redux-firebase`
  * `npm install redux-thunk`
  * `npm install recompose`
  * `npm i -S react-simple-flex-grid`

* Tutorials and Online Resources
  * https://facebook.github.io/create-react-app/docs/getting-started
  * https://reacttraining.com/react-router/web/guides/basic-components
  * https://firebase.google.com/docs/web/setup
  * https://css-tricks.com/intro-firebase-react/
  * https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/#firebase-authentication
  * https://howtofirebase.com/save-and-query-firebase-data-ed73fb8c6e3a

* After installing the necessary dependencies, run the application with `npm start` on the command line

# E2 README
### User story template: ###
As a (type of user), I can (some goal) so that (some reason)

#### Business ####
As a business owner, I can seek out various methods and spaces to promote my products so that I can receive informative, powerful user data and consumer insights for a cheaper price than current data analysis methods.

#### Customer ####
As a customer, I can use renter-curated products for free during my stay at an Airbnb home as long as I fill out a user experience survey after doing so, so that I spend less on products and goods during a trip and more on experiences. Moreover, I can receive the satisfaction of knowing that my opinion is valued and is contributing to an actual company's business model to improve their current strategies.

# E3 README
* Instructions to Run

   Make sure you have React and Firebase installed. This can be done using npm. Run the code by typing the normal `npm  start`

* Screen Recording

   https://youtu.be/nLlPGOOlA6g

* Features Implemented
   1. Created a Firebase database to store user product and brand information and user information
   2. Connected product and brand information to our web app through JavaScript backend code
     * Authenticated users can access this information and remove products from their dashboard
   3. Implemented user authentication
     * Used Firebase to integrate Google profile login/logout

* Estimated Time to Complete

   This project took around 5 hours excluding admistrativa-related stuff (repo management, AG350, screen recording, etc)

* Issues We Couldn't Solve
   1. Beautiful styling
   2. You have to refresh the page after you login to show the products. I was trying to figure this out for the longest time and couldn't ;(

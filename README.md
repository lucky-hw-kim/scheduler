# Interview Scheduler

The Scheduler client application created using Create React App. User can book, edit and cancel an appointment with an interviwer of their choices at available time using the app.

## Main Features

- Development focuses on a single page application (SPA) called Interview Scheduler, built using React.
- Data is persisted by the API server using Heroku and local development server
- The client application communicates with an API server over HTTP, using the JSON format.
- Jest, Storybook and Cypress tests are used through the development of the project

## Screen Shots & GIF demo


![alt Demo_GIF](https://github.com/lucky-hw-kim/scheduler/blob/master/doc/Interview-Scheduler_demo.gif?raw=true)

![alt Demo_Error_GIF](https://github.com/lucky-hw-kim/scheduler/blob/master/doc/Interview-Scheduler_Error_demo.gif?raw=true)

![ScreenShot of main page](https://github.com/lucky-hw-kim/scheduler/blob/master/doc/Interview-Scheduler_1.png?raw=true)

![ScreenShot of booking page open](https://github.com/lucky-hw-kim/scheduler/blob/master/doc/Interview-Scheduler_2.png?raw=true)

## Indepth Functionalities

- Interviews can be booked between Monday and Friday.
- A user can switch between weekdays.
- A user can book an interview in an empty appointment slot.
- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
- A user can cancel an existing interview.
- A user can edit the details of an existing interview.
- The list of days informs the user how many slots are available for each day.
- The expected day updates the number of spots available when an interview is booked or canceled.
- A user is presented with a confirmation when they attempt to cancel an interview.
- A user is shown an error if an interview cannot be saved or deleted.
- A user is shown a status indicator while asynchronous operations are in progress.
- When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
- The application makes API requests to load and persist data. We do not lose data after a browser refresh. 


## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

### Dependencies
* React
* Axios
* Classnames
* Normalize.css
* React-dom
* React-scripts
* Babel/core
* Storybook/addon-actions
* Storybook/addon-backgrounds
* Storybook/addon-links
* Storybook/addons
* Storybook/react
* Testing-library/jest-dom
* Testing-library/react
* Testing-library/react-hooks
* Babel-loader
* Node-sass
* Prop-types
* React-test-renderer

### Tech Stack Used
--Languages--
</br>

* JavaScript
* CSS 
* html

</br>

--Frameworks & Library--

</br>

*  nodeJS
*  React
*  Axios
*  SASS

</br>

---testing---

</br>

* Jest
* Testing Library
* StoryBook
* Cypress




# Wellspring Electronic Health Record System
# Wellspring Electronic Health Record System

https://dev.d3jjlg6ekb7hcc.amplifyapp.com/

# Introduction

Welcome to my implementation of the solution for [WellSpring Take-Home Challenge](https://github.com/abbycare/take-home). This application showcases various features, and I'll provide insights into the code structure and how to run it locally. For a live demonstration, you can test the deployed version on AWS [here](https://dev.d3jjlg6ekb7hcc.amplifyapp.com/).

## Description

This application incorporates secure authentication through AWS Amplify Auth, ensuring a seamless and protected user experience. Leveraging TypeScript for enhanced code clarity and Material-UI for polished styling, it offers a user-friendly interface with distinct components.

### Features supported

- Side nav panel
- Recent patients table
- Upcoming visits table

### Bonus Highlight

- **Authentication Support**: Users can securely log in, log out, create accounts, and verify their accounts via email. AWS Amplify Auth is seamlessly integrated for robust authentication.
- **ThemeProvider Integration**: Consistent styling across the application is maintained using ThemeProvider, offering a cohesive color palette (primary, secondary, info, warning, success).
- **PatientPage Navigation**: Access PatientPage through the left-hand Heart Icon or by selecting "View All" on the Recent Patients Table. PatientPage features a simple and sortable Material-UI table.
- **Responsive Styling**: The application's styling adapts to various screen sizes, ensuring a responsive and user-friendly experience.
- **Configurable Router**: Utilizing react-router-dom, the app boasts a navigation bar that can be effortlessly extended with new pages for enhanced functionality.

### Future Expansion with Serverless Database Solution (DynamoDB) + AWS Lambda API

- **Scheduling Appointments**: Empowering administrators to efficiently schedule appointments for patients, fostering a streamlined healthcare management process.

- **Patient Information Editing**: Enhanced capabilities on the Patient Page to facilitate the seamless editing of patient information by administrators.

- **Appointment Management**: The ability to cancel upcoming visits or reschedule existing appointments, ensuring flexibility and adaptability to changing circumstances.

- **Notification System**: Implementation of a robust notification system to alert users of any crucial messages or updates, fostering proactive engagement.

- **Historical Visit Tracking**: Enabling users to access past visit records, providing a comprehensive overview beyond the current day, tomorrow, and this week.

- **Extended Documentation (Readme)**: The addition of more informative pages, including an extended Readme, offering comprehensive insights into the application's functionality and usage.

### Getting Started

1. Run `npm install` to install the necessary dependencies
2. Run `npm start` to start the application
3. Open your web browser and navigate to http://localhost:3000 to view the application

### API Endpoints

This project comes with two API endpoints that you can use to fetch data for your front-end application:

- GET `/api/patients`
  Returns an array of patients.

- GET `/api/appointments`
  Returns an array of appointments.

### Typescript

This project was originally built using JavaScript, but candidates are free to add TypeScript to the existing codebase. To do so, simply run the following command in your terminal:

`npm install --save-dev typescript`

After installing TypeScript, create a tsconfig.json file in the root directory of your project with the following configuration:

```json{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "esModuleInterop": true,
    "strict": true,
    "jsx": "react",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "declaration": true,
    "outDir": "./dist",
    "sourceMap": true
  },
  "include": ["./src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

### Technologies

- React.js
- HTML/CSS

### Design Assets

Link to Figma design: (https://www.figma.com/file/oUQ510tObMV24neUboZKuD/Take-home-Design-V2.0?node-id=0-1&t=RT5tZiHAUQTip1rw-0)
Link to download the assets is here (optional): https://drive.google.com/file/d/1-Gi7yLZMxclh_ld8M3LTSQkfExkzKBLl/view?usp=sharing

## To Deploy to AWS

- First follow this [link](https://docs.amplify.aws/cli/start/install/) to setup amplify cli

then follow amplify host

```
amplify build
amplify publish

```

Lam Tran solution to this take home assignment.

### Introduction

At Wellspring, we’re building tools to supercharge our families’ ability to provide care throughout their journey with us. Whether it’s through training or care, we’re here to tackle the bottlenecks that affect our families’ experience.

This project aims to build a front-end web experience for our electronic health record system. The interface will help our clinical team to easily access patient data and track how to best support our families.

<img width="960" alt="image" src="https://user-images.githubusercontent.com/24286181/233230738-f1d03f3c-0438-485f-aa31-01dfd9a3b0cb.png">

### Features

- Side navigation panel
- Recent patients table
- Upcoming visits table

### Getting Started

1. Clone this repository to your local machine
2. cd into wellspring-take-home
3. Run npm install to install the necessary dependencies
4. Run npm start to start the application
5. Open your web browser and navigate to http://localhost:3000 to view the application

### API Endpoints

This project comes with two API endpoints that you can use to fetch data for your front-end application:

- GET `/api/patients`
  Returns an array of patients.

- GET `/api/appointments`
  Returns an array of appointments.

### Typescript (Optional)

This project was originally built using JavaScript, but candidates are free to add TypeScript to the existing codebase. To do so, simply run the following command in your terminal:

`npm install --save-dev typescript`

After installing TypeScript, create a tsconfig.json file in the root directory of your project with the following configuration:

```json{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "esModuleInterop": true,
    "strict": true,
    "jsx": "react",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "declaration": true,
    "outDir": "./dist",
    "sourceMap": true
  },
  "include": ["./src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

### Technologies

- React.js
- HTML/CSS

### Design Assets

Link to Figma design: (https://www.figma.com/file/oUQ510tObMV24neUboZKuD/Take-home-Design-V2.0?node-id=0-1&t=RT5tZiHAUQTip1rw-0)

Link to download the assets is here (optional): https://drive.google.com/file/d/1-Gi7yLZMxclh_ld8M3LTSQkfExkzKBLl/view?usp=sharing

## Frequently Asked Questions (FAQ)

**Q: How should the coding challenge be submitted?**.

- Zip the directory containing your code and email the zipped file back to us.
- Alternatively, you can create a public repository and share the repository URL with us.

**Q: Do you have renders for the kebab menu on the appointments table?**

- No, you don't need to worry about implementing an interaction for the kebab menu on the appointments table. Clicking on the menu should not trigger any action or behavior.

**Q: Will the tabs under Upcoming visits be functional?**.

- Yes, the tabs (Today, Tomorrow, This week) should be fully functional. They should filter the upcoming visits based on the selected day. You can choose a random date as the "today" date to build upon.

**Q: Will the side navigation tabs be functional? Should clicking on the Patients tab bring up a list of patients?**.

- While there is no specific requirement for a patients page, it is expected that the side navigation tabs change the state and/or route away from the home page. You have flexibility in implementing the behavior and appearance of the patients page.

**Q: If I click the "View all" tab in the Recent Patients section, should it bring up the same page as the "Patients" button?**.

- Yes, clicking the "View all" tab in the Recent Patients section should navigate to the same page as the "Patients" button. However, the design and content of this page are not specified, and it can be left blank or simply display a title such as "Patients" for the purpose of this take-home project.

**Q: Can I use libraries or other technologies?**.

- Absolutely! We encourage you to use any libraries or technologies that you are comfortable with and that will help you showcase your skills effectively in completing the assessment.

Note: We understand that not every detail may be fully provided, mimicking a real-world front-end engineering scenario where you may need to take the initiative to provide the optimal user experience. Feel free to demonstrate your problem-solving skills and make informed decisions to enhance the usability and functionality of the application.

If you have any additional questions, please do not hesitate to reach out to us.

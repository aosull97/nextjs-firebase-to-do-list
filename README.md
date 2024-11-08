## Table of Contents
- [Table of Contents](#table-of-contents)
- [About](#about)
- [Features](#features)
- [Set Up Locally](#set-up-locally)
  - [Prerequisites](#prerequisites)
  - [Firebase Set Up](#firebase-set-up)
  - [Installation](#installation)
  - [Running](#running)
- [How to Use](#how-to-use)
- [Demo Screens](#demo-screens)
- [Try it Online](#try-it-online)
- [Tech Stack](#tech-stack)

## About
This is a simple yet efficient task management tool that allows users to log in and manage their to-do list. 

## Features
- View your personal To-Do List
- Delete tasks by simply clicking the trash icon
- Edit/rename a task by clicking the edit icon
- Add new tasks

## Set Up Locally
### Prerequisites
- Node.js
- A Firebase Account
  

### Firebase Set Up
1. Create a new project in Firebase (Google Analytics can be disabled)
   ![image](https://github.com/user-attachments/assets/a2ceb6d3-e934-4bd5-bab0-bdbad1e37252)

2. Add a web app to your Firebase project
   ![image](https://github.com/user-attachments/assets/82733bde-43fd-4a21-9ae9-aa25d4905ee4)

3. Copy your Firebase config variables, you will need these later


### Installation
1. Clone the repository
    ```sh
    $ git clone https://github.com/aosull97/nextjs-firebase-to-do-list.git
    ```
2. Navigate into the next-js-to-do-list folder
   ```sh
   $ cd next-js-to-do-list
   ```
3. Create a .env.local file in the root directory and paste in your Firebase config variables with the following prefix's:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-app-12345
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-app-123.firebasestorage.app
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1234567
   NEXT_PUBLIC_FIREBASE_APP_ID=1326h7dfgdiigssd
   ```
   
### Running
1. Install modules
   ```sh
   $ npm install
   ```

2. Start the application
   ```sh
   $ npm run dev
   ```
   

## How to Use
1. **Sign In/Sign Up**: The app will open on the sign in page. You need an account to use this application, so either sign in here or click the 'Sign Up' link just underneath to create an account and then sign in.
2. **View To-Do List**: Once signed in, you will be taken to your To-Do List. If you have just signed up, or haven't added any tasks yet, then this will be empty.
3. **Add Task**: To add a new task to your To-Do list, click the 'Add Task' button, which will take you to the page where you can create a new task. Enter a name for the task, then click on the 'Add Task' button. From here, you can either add another task or click on the 'Back to List' button to view your updated To-Do list.
4. **Edit a Task**: From your To-Do list, you can edit a task by clicking on the pencil/edit icon next to it. You will then be taken to a page where you can make changes to the task name, and click the 'Update Task' button once you are done. From here, you can either make more changes to the task or click the 'Back to List' button to view your To-Do list with the updated/edited task.
5. **Delete a Task**: You can delete any task from your To-Do list simply by clicking on the trash/bin icon next to it.
6. **Logout**: To logout of the app, click on the 'Logout' button in the top right corner of your To-Do list page.

## Demo Screens
*Sign In page:*
![image](https://github.com/user-attachments/assets/35715046-4a09-4466-bf41-4c93c0e70f21)

*Sign Up page:*
![image](https://github.com/user-attachments/assets/fa5ba627-a384-44f4-8bbe-dbaac94cb874)

*To-Do List:*
![image](https://github.com/user-attachments/assets/bcb0c527-34d6-47a3-9ebe-c3f2a8d684be)

*Add a new task:*
![image](https://github.com/user-attachments/assets/00550646-0abb-488e-a547-ff98cdc514b3)

*Edit task:*
![image](https://github.com/user-attachments/assets/a7cc361e-677a-4170-8dbd-43e2a844d22f)


## Try it Online
You can try this application online by going to the following link: https://nextjs-firebase-to-do-list-eta.vercel.app

## Tech Stack
- Next.js
- Firebase (Authentication and FireStore)
- Tailwind CSS
- TypeScript
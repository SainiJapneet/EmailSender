# EmailSender

This is a simple Node.js script that uses the Nodemailer library to send emails through a Gmail account.

## Prerequisites

Before running this code, ensure that you have the following prerequisites installed:

- Node.js (version 12 or higher)
- Nodemailer library

## Installation

1. Clone this repository or download the code.

2. Open a terminal and navigate to the project directory.

3. Install the dependencies by running the following command:

   ```bash
   npm install

   
Certainly! Here's an example of a complete README file for your Node.js Email Sender project:

markdown
Copy code
# Node.js Email Sender

This is a simple Node.js script that uses the Nodemailer library to send emails through a Gmail account.

## Prerequisites

Before running this code, ensure that you have the following prerequisites installed:

- Node.js (version 12 or higher)
- Nodemailer library

## Installation

1. Clone this repository or download the code.

2. Open a terminal and navigate to the project directory.

3. Install the dependencies by running the following command:

   ```bash
   npm install

   
Usage
Open the index.js file.

Locate the cred object and replace 'dummy_mail@gmail.com' with your Gmail email address.

Replace 'dummy_password' with your Gmail account password or app-specific password.

Locate the mailInfo object and modify it with the desired email details (e.g., from, to, subject, text).

Save the index.js file.

In the terminal, run the following command to start the script: node index.js

The script will send the email using the provided credentials and email information.

##Note

1. If you have 2FA enabled on your Gmail account you need to use generate app-specific passwords.
2. Go to the manage account section of your Gmail account.
3. Open the Security section.
4. Find the App passwords section or find it from the search bar above.
5. In Select the app and device you want to generate the app password for. select other option from dropdown and give a name to it.
6. A password will get generated and use it as password in the index.js

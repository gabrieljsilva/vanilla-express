# Vanilla Express
This a project with only express to handle request;

- Structured for scalability and readability;
- Without database ORM;
- Validation with yup;
- Authentication;

# Getting Started

- Copy .env.example file and rename to .env.
- Create an empty file called main.db.

by default this project uses sqlite3 as database;
So use some sqlite3 tool and create a table called `users`.
And then add the following columns:
- id;
- name;
- email;
- password;

after this you can run it in development mode using the following command:

`npm run start:dev`

or in production mode:

`npm run start`
# Capstone
The Capstone is a Casting Agency that is responsible for creating Movies and managing and assigning Actors to those Movies. There are two users Executive Producer and Casting Director within the company and are creating a system to simplify and streamline this process.

The Capstone codes follows PEP8 style guidelines.

### Agency Tasks:
1) Display actors and movies list with details.
2) Allow Casting Director to add, delete Actors and edit Movie and Actor details.
3) Allow Executive Producer to create, delete Movies and all the permissoins that casting director has. 

### Backend
The `./backend` directory contains a Flask server with a SQLAlchemy module to accomplish the tasks. The required endpoints, configure, and integrate Auth0 for authentication for role based permissions.

[View the README.md within ./backend for more details.](./backend/README.md)

### Frontend
The `./frontend` directory contains a complete Ionic frontend to consume the data from the Flask server. Updated the environment variables found within (./frontend/src/environment/environment.ts) to reflect the Auth0 configuration details set up for the backend app. 

[View the README.md within ./frontend for more details.](./frontend/README.md)

#### Frontend View

##### Tabs:

1) Movie List
2) Artist List
3) User 

### Deployment
**Capstone** application deployed in **_Heroku_**. This is the url for [**capstone**](https://www.google.com).

### Author
Purvi Rawal

### Acknoledgemnts
Udacity team for making a greate nenodegree program for Full Stack Developer. 
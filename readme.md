<p align="center"><img src="https://github.com/Ekhel/Natours/blob/master/images/head.png" width="600px" /></p>
<p align="center"><strong>Practice Node, Manipulate JSON file with File Sync, API, Midleware, routes, and controllers</strong></p>

---

## Requirements

- Bahasa

  - NodeJS (12.18.0)
  - JSX

- Services

  - Morgan (Midleware)
  - express (Framework)

- DBMS

  - MongoDB
  - Compass (GUI For MongoDB)
  - Mongoose (Connector Schema, Agregrations)

- Pre Host Documents
  - Atlas (AWS)

---

## Deploy On Heroku :

- [Natours-Midleware](https://natours-middleware.herokuapp.com)
- [Atlas AWS](https://account.mongodb.com/account/login)

---

## Route API :

<table>
  <thead>
    <tr>
      <th>Route</th>
      <th>Endpoind</th>
      <th>Method</th>
      <th>Calback</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>User LogIn</td>
      <td>https://natours-middleware.herokuapp.com/api/v1/user/login</td>
      <td>POST</td>
      <td>Token</td>
    </tr>
    <tr>
      <td>User Register</td>
      <td>https://natours-middleware.herokuapp.com/api/v1/user/signup</td>
      <td>POST</td>
      <td>JWT Token</td>
    </tr>
    <tr>
      <td>Tours</td>
      <td>https://natours-middleware.herokuapp.com/api/v1/tours</td>
      <td>GET</td>
      <td>JSON Data</td>
    </tr>
  </tbody>
</table>

- Postman Setup

  - Register (RAW | JSON) BODY

    ```javascript
    {
      "name": "Maria",
      "email": "maria@gmail.com",
      "password": "maria123",
      "passwordConfirm": "maria123",
    }
    ```

  - Login (RAW | JSON) BODY
    ```javascript
    {
      "email": "maria@gmail.com",
      "password": "maria123",
    }
    ```

---

## About The Practical :

- **How to Call/Read JSON file on Node :**

  - Read File JSON fs(FileStream) with FileSync
  - export to View Function

- **Works with Express (Framework bassed on NodeJS) :**

  - Install nodemon (npm install nodemon --save)
  - setting up nodemon to our app
  - Install express (npm install express --save)
  - Import Express to our app
  - Setting up Local Port Server

- **How to API works on Node** :

  - function request and result
  - Make Method GET request dan Result
  - Make Method GET Params request and Result (Param)
  - Make Method POST request and Result
  - Make Method PATCH request and Result
  - Make Method DELETE request

- **How to Routes work on Node:**

  - Setting up Route use express
  - Base Struktur Route on express

- **How to use Third party Middleware or own:**

  - Setting Up Middleware
  - Install Third Party Middleware with Morgan
  - Install Morgan (npn install morgan --save)
  - exports Module

- **Setting Up MongoDB with Compass:**

  - Install and Settup MongoDB with Shell & Compass
  - Connect our GUI Compass with Atlas DB
  - Connect our App With Atlas DB and Compas Localy GUI
  - Setting Up our App with Localy MongoDB Document

* **Refactoring API Route**

  - Refactor File for express Route
  - Group endpoint Based on Route

* **More Complex Filtering**

  - Filter endpoint With JSX Callback Fungtion
  - Filter endpoint With Mongo Operator
  - Multiple Filter endpoint with Params

* **Modeling User Auth and Use JWT(jsonwebtoken)**

  - Create Model for Users Login
  - Create Function SignUp
  - Create Function Login
  - Use JWT for Token Authentication Login
  - Use JWT for Protect the Route

* **More Complex Authetication**

  - Create Function Forgot Password
  - Create Function Reset Password
  - Reset Current User data
  - Create Update Curent Password and Token
  - Send Reset Token to email [Tested Work Use Mailtrap](https://mailtrap.io)
  - Use the Nodemailer to setup incomming email server
  - Reset Fungtion Done!

* **Handle The Security (BEST PRACTICE)**

  - Setting up Midleware use Limiiter
  - Setting up Monggo Data sanitise for Auth Undefined
  - Handle the Cross site scripting use xss-clean
  - Sending jwt to cookie
  - Handle Brute force & DDoS attackt with hpp and helmet

* **More MongoDB data Modeling**

  - Modeling Location (Geospatial Data)
  - Populate Data user in Tours Model (guides)
  - Modeling Query Object references
  - Populate data Query Object

* **Nested Routes**

  - Merge Routes
  - Nested Routed

* **Advanced Postman Setting**

  - Setting up postman for API Usefull
  - Make Documentation of API with Postman

* **Use Template Engine**

  - Setting up template with pug
  - Setting up base template and Content

* **Use Mapbox**
  - Populate Coordinate use Mapbox
  - Show the Coordinate in our Pages

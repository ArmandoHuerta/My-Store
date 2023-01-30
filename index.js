// ??? Importa el middleware DOTENV (Permite el uso de variables de entorno)
require("dotenv").config();

// ??? Importa la variable PORT desde el archivo .env
const PORT = process.env.PORT;

// ??? Importa el middleware EXPRESS (Servidor)
const express = require("express");

// ??? Crea una instancia de Express llamada "app"
const app = express();

// ??? Middleware para leer archivos JSON en las solicitudes
app.use(express.json());

// ??? Imprime / muestra un mensaje en pantalla
console.log("App is running on port " + PORT);

// ??? Endpoint components:
// ???        - HTTP method (POST, GET, PUT, DELETE, UPDATE)
// ???        - URL
// ???        - Request
// ???        - Response
app.post("/", function (req, res) {
  console.log("Request: ");
  const { putitos, machos } = req.body;
  console.log(machos);
  res.send(putitos);
});

// ??? Registered users
const users = [
  {
    firstname: "Marcos",
    lastname: "Hernandez",
    email: "marcos@google.com",
    password: 12345678,
  },
  {
    firstname: "Sergio",
    lastname: "Hernandez",
    email: "sergio@google.com",
    password: 12345678,
  },
];
// ??? FIND USER
const user = users.find((user) => user.firstname === "Sergio");
console.log(user);

// TODO: Login:
// URL: /login
// Request body:
//       - email
//       - password
// Response:
//       - Success: User is found in database
//       - Error: User is not found in database
app.post("/login", function (req, res) {
  console.log("Request: ");
  const { email, password } = req.body;

  const result = users.indexOf(email);
  if (result > -1) {
    res.send("Success");
  } else {
    res.send("Error");
  }
  //  res.send(password);//
});

// TODO: Register
// URL: /register
// Request body:
//       - First name
//       - Last name
//       - email
//       - password
// Response:
//       - Success: User is created in database
//       - Error:

app.post("/register", function (req, res) {
  console.log("Request: ");
  // Recibir solicitud (request)
  const { Firstname, lastname, email, password } = req.body;

  // Crear un nuevo usuario
  const user = {
    firstname: Firstname,
    lastname: lastname,
    email: email,
    password: password,
  };
  // Crear arreglo usuarios
  let users = [];
  // Añadir user a un arreglo de usuarios (simula base de datos)
  users.push(user);

  res.sendStatus(200);
});

app.listen(PORT);

/* 
    *
    *** FUNCTION COMPONENTS
    ??? Definiendo funcion
    functionName (paramateres){
      console.log(paramateres);
      
      return result;
    }

    ??? Ejecutando la funcion
    const resultado = functionName(email)
  */

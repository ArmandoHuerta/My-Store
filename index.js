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

// !!! Users
const users = ["marcos@google.com", "sergio@google.com"];
// !!! Find user in array: Returns -1 if not found
console.log(users.indexOf("usa"));

// TODO: Login:
// URL: /login
// Request body:
//       - email
//       - password
// Response:
//       - Success: User is found in database
//       - Error: User is not found in database

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

app.listen(PORT);

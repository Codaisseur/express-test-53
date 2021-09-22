const express = require("express");
// Pick a Port (address) for our server to run
const PORT = 4000;

// Create an express app => server
const app = express();

// HTTP Method GET (POST, DELETE)
app.get("/test", (request, response) => {
  console.log("I just got a request! :)");
  console.log("What type of request?", request.method);

  response.send("Hey I got your request, test worked!!");
});

app.get("/hello", (request, response) => {
  response.send(`
    <div>
      <h1>Hello! Welcome to my first server route</h1>
      <p>this is the first time I use Express :)</p>
    </div>
  `);
});

// Start it
app.listen(PORT, () =>
  console.log(`Server running and listening at port: ${PORT}`)
);

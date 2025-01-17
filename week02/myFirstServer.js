"use strict";

const http = require("http");
const students = require("../week01/exercise/students.json");

const server = http.createServer((request, response) => {
  if (request.url === "/feed") {
    response.write("This is your news feed");
  } else if (request.url === "/username") {
    response.write("tim");
  } else if (request.url === "/api") {
    response.setHeader("Content-type", "application/json");
    response.write(JSON.stringify({ data: students }));
  } else {
    response.setHeader("Content-type", "application/json");
    response.write(JSON.stringify({ error: "url not found" }));
  }
  response.end();
  //   console.log(request.url, request.method);

  //   response.write("Hello world from Node.js");
  //   response.end();
});

server.listen(4000, (err) => {
  if (err) {
    console.error("something went wrong", err);
    return;
  }
  console.log("Server running on port 4000");
});

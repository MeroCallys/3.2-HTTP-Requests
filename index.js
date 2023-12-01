import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello, Home Page!</h1>");
});

app.post("/register", (req, res) => {
  res.send("<h1>This is the register page</h1>");
  res.sendStatus(201);
});

app.put("/user/ivan", (req, res) => {
  res.send("<h1>This is the user page</h1><p>Update some for user ivan?</p>");
  res.sendStatus(200);
});

app.patch("/user/ivan", (req, res) => {
  res.send("<h1>This is the user page</h1><p>Update all for user ivan?</p>");
  res.sendStatus(200);
});

app.delete("/user/ivan", (req, res) => {
  res.send("<h1>This is the user page</h1><p>Delete user ivan?</p>");
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

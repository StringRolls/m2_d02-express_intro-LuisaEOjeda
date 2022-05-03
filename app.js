const express = require("express");

require("dotenv").config();

const app = express();

app.use(express.static("public"))

// Build the server here
app.get("/", (request, response) =>
  response.sendFile(__dirname + "/views/index.html")
);

app.get("/homepage", (req, res) => 
    res.sendFile(__dirname + "/views/home.html")
);

app.get('/hobbies/crochet', (req, res) => 
res.sendFile(__dirname + "/views/crochet.html")
)
app.get ('/hobbies', (req, res) => 
res.sendFile(__dirname + "/views/hobbies.html")
)


app.get("*", function (req, res) {
    res.send("Sorry, page not found...Blame our developer", 404);
  });

const PORT = 3000;
app.listen(PORT, () => console.log('running on port 3000'));
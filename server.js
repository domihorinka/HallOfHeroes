const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 27017;
const app = express();


require('dotenv').config();


// Define middleware here
const apiRoutes = require("./routes/apiRoutes")
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/character",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  }
);

app.use('/api',apiRoutes);



// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

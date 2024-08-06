const express = require("express");
const mongoose = require("mongoose");
const productRoute = require('./routes/productRoute')
const errorMiddleware = require('./middleware/errorMiddleware')
const cors =require('cors')

require('dotenv').config()

const app = express();

const MONGODB_URL = process.env.MONGODB_URL
const PORT = process.env.PORT || 3000
const FRONTEND = process.env.FRONTEND


app.use(cors({
  origin: FRONTEND,
  optionSuccessStatus: 200,
}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/products',productRoute)

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("connected to DB");
    app.listen(PORT, () => {
      console.log(
        `Hello Xuan I am a server and currently running on port ${PORT}`
      );
    });
  })
  .catch(() => {
    console.log("Could not connect to DB");
  });
//routes



app.get("/", (req, res) => {
  res.send("Hello");
});

app.use(errorMiddleware)


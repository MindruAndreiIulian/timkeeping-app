require('dotenv').config()

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require('cors')
const timkeepingRouter = require("./routes/TimekeepingRoutes");
const userRouter = require("./routes/UserRoutes");

//middleware
app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

app.use("/api/timekeeping", timkeepingRouter);
app.use("/api/users", userRouter)

module.exports = app;

const uri = process.env.MONGO_URI;

mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB successfully!");
        }
    }
);
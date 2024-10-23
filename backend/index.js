

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan")
const userRoute=require("./routes/user");
const authRoute=require("./routes/auth");
const postRoute=require('./routes/post')



dotenv.config();

const URI = process.env.MONGO_URL;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("conncection Successful");
    } catch (error) {
        console.log(error, "Not connection ");
    }
}

connectDb();
// middleware
app.use(express.json())
app.use(helmet());
app.use(morgan("common"));

app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);


app.listen(8800, () => {
    console.log("Backend srever is running");
})
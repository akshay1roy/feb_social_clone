

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan")
const userRoute=require("./routes/user");
const authRoute=require("./routes/auth");
const postRoute=require('./routes/post')
const multer=require('multer');
const path=require("path");
// const cors = require('cors');




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

app.use("/images",express.static(path.join(__dirname,"public/images")))

// app.use(cors());
app.use(express.json())
app.use(helmet());
app.use(morgan("common"));





const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/images")
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name)
    }
})
const upload=multer({storage});

app.post("/api/upload", upload.single("file"),(req,res)=>{
    try {
        return res.status(200).json("File is uploaded Successfully ")
    } catch (error) {
        
    }
})

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);


app.listen(8800, () => {
    console.log("Backend srever is running");
})


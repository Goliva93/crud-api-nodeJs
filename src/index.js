
const express = require ("express");
const mongoose = require ("mongoose");
require("dotenv").config();

const userRoute = require("./routes/users"); 

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', userRoute);

//routes
app.get('/', (req, res) => {
    res.send("welcome to my api");
});

//mongodb connect
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('connected sucess to mongodb'))
.catch((error) => console.log('hubo un error causa', error));

app.listen(port,() => console.log('server listening on port',port));

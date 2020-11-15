const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb://mongo:27017/newdock").then(() => {
    console.log("MongoDB Connected");
}).catch(() => { 
    console.log("MongoDB Connection Error");
})


const PORT = 8000 || process.env.PORT;
// Run the app
app.listen(PORT, (req, res) => { 
    console.log(`Server running at ${PORT}`);
})
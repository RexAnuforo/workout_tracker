const express=require("express")
const logger=require("morgan");
const mongoose=require("mongoose")
const PORT =  5500;

//initialize the app and create a port
const app = express();
app.use(logger("dev"))
app.use(express.urlencoded({ extended : true}));


//Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.static("public"));
mongoose.connect("mongodb://localhost/workout",{
    useNewUrlParser:true,
    useFindAndModify:false
})
app.use(require("./routes/api.js"))
app.use(require("./routes/view.js"))

//Start the server on the port 
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
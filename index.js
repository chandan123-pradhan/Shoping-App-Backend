require = require("esm")(module)
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(express.json())
const auth_controller=require('./controllers/main_controllers')
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {

    res.send("Hello server is running");

})





app.listen("8080", () => {
    console.log("Server started");
})

app.use('/',auth_controller)

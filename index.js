const express = require ("express")
const mongoose = require ("mongoose")

//express app initialization
const app = express();
app.use(express.json());

// database connection with mongoose
mongoose
  .connect("mongodb://localhost/todos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

//application route 

//default error handler
const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).josn({error: err});
}

app.listen(3000, () => {
    console.log("app is listening to port 3000");
})
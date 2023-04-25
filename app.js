const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const port = 1000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

//own module
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: false,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));

app.use(userRouter);
app.use("/admin", adminRouter);

app.listen(port, () => console.log(`Server is Running on port ${port}`));

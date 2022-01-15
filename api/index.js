const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const myListRoute = require("./routes/myList")
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connected Successfully!"))
  .catch((err) => console.log(err));

app.use(cors({ orgin: process.env.ADMIN_PROXY }));
app.use(cors({ orgin: process.env.CLIENT_PROXY }));
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);
app.use("/api/mylist", myListRoute);

app.listen(8800, () => {
  console.log("Backend server is running on port 8800...");
});

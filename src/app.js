const express = require("express");
const mongoose = require("mongoose");
const StudentsRouter = require("./routers/students");
require("./db/conn");

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(StudentsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

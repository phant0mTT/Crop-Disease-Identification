const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const recommendationRoutes = require("./routes/recommendationRoutes");
app.use("/api", recommendationRoutes);

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

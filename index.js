const express = require("express");
const app = express();
const calRoutes = require("./routes/cal");
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
app.use(express.static("public"));

app.use(express.json());
app.use("/api", calRoutes);

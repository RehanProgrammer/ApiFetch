const express = require("express");
const app = express();
const brewery = require("./routes/brewry");

app.use(express.json());
app.use("/api", brewery);
app.listen(3001, "localhost", err => {
  if (!err) console.log("server running on port 3001");
  else console.error(`${err} occured`);
});

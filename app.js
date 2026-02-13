const express = require("express");
const app = express();
const orderRoutes = require("./src/routes/orderRoutes"); 

app.use(express.json());
app.use("/api", orderRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(3000, "0.0.0.0", () => console.log("Server running on port 3000"));

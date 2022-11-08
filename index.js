const express = require("express");
const app = express();
const port = 3000;
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  // #swagger.description = "Hello World route"
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});

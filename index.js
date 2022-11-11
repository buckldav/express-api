const express = require("express");
const swaggerUi = require("swagger-ui-express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // #swagger.summary = "Hello World"
  // #swagger.description = "Hello World route."
  res.send("Hello World!");
});

// run the server
require("child_process")
  .fork("./swagger/swagger.js")
  .on("exit", () => {
    // compile the docs
    const swaggerDocument = require("./swagger/swagger.json");
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    // listen for requests
    app.listen(port, () => {
      console.log(`API listening at http://localhost:${port}`);
    });
  });

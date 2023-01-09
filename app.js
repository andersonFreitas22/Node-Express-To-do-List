const express = require("express");

const app = express();

app.use(express.json());

const checkListRoute = require("./src/routes/checklist");

app.use("/checklists", checkListRoute);

app.listen(3000, () => {
  console.log("Servidor ativo!");
});

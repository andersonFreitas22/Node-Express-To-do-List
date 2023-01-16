const express = require("express");
const checkListRoute = require("./src/routes/checklist");
const taskRoute = require("./src/routes/task");
const rootRoute = require("./src/routes/index");
const path = require("path");
const methodOverride = require("method-override");

require("./config/database");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use("/", rootRoute);
app.use("/checklists", checkListRoute);
app.use("/checklists", taskRoute.checklistDependent);
app.use("/tasks", taskRoute.simple);
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Servidor ativo!");
});

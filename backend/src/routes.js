const express = require("express");

const EnterpriseController = require("./controllers/EnterpriseController");
const SiloController = require("./controllers/SiloController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.store);

routes.post("/register", EnterpriseController.store);
routes.get("/profile", EnterpriseController.index);
routes.put("/profile", EnterpriseController.update);
routes.delete("/profile", EnterpriseController.destroy);

routes.post("/silo", SiloController.store);
routes.get("/silos", SiloController.list);
routes.put("/silo", SiloController.update);
routes.get("/silo/:id", SiloController.index);
routes.delete("/siloremove/:id", SiloController.destroy);

module.exports = routes;

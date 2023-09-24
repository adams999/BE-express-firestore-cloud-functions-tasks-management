import routerTasks from "../../controllers/tasks";
import { Express } from "express";

const routes = (app: Express) => {
  // Routes of path tasks.
  app.use("/tasks", routerTasks);
};

// Creacion de ruta para peticiones.
export default routes;

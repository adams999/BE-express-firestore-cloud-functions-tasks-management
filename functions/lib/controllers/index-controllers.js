"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = __importDefault(require("./tasks"));
const routes = (app) => {
    // Routes of path tasks.
    app.use("/tasks", tasks_1.default);
};
// Creacion de ruta para peticiones.
exports.default = routes;
//# sourceMappingURL=index-controllers.js.map
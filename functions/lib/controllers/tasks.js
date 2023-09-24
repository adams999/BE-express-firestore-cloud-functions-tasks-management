"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Connection to db the firestore.
const config_1 = __importDefault(require("../firebase/config"));
const express_1 = __importDefault(require("express"));
const tasks_validate_property_1 = __importDefault(require("../utils/helpers/tasks-validate-property"));
// Modularizar routes.
const routerTasks = express_1.default.Router();
// RUTAS TASKS
const tasksCollections = config_1.default.collection("tasks");
// Obtiene la lista de las tareas.
routerTasks.get("/", async (req, res) => {
    try {
        const tasksList = [];
        const tasksRef = await tasksCollections.where("save", "==", false).get();
        tasksRef.forEach((task) => {
            tasksList.push(Object.assign(Object.assign({}, task.data()), { id: task.id }));
        });
        res.json(tasksList);
    }
    catch (error) {
        res.status(400).json({
            message: "Error al retornar las Tareas, intenta de nuevo!",
        });
    }
});
// Obtiene una tarea especifica.
routerTasks.get("/:id", async (req, res) => {
    try {
        const taskRef = await tasksCollections.doc(req.params.id).get();
        res.json(Object.assign(Object.assign({}, taskRef.data()), { id: taskRef.id }));
    }
    catch (error) {
        res.status(404).json({
            message: "No se encontro la Tarea, intenta de nuevo!",
        });
    }
});
// Genera una nueva Tarea.
routerTasks.post("/", async (req, res) => {
    try {
        const taskData = Object.assign(Object.assign({}, tasks_validate_property_1.default.setAndValidatePropertyTask(req.body)), { save: false });
        const taskRef = await tasksCollections.add(taskData);
        res.json(Object.assign(Object.assign({}, taskData), { id: taskRef.id }));
    }
    catch (error) {
        res.status(400).json({
            message: "Error al crear la Tarea intenta de nuevo!",
        });
    }
});
// Actualiza una tarea
routerTasks.put("/:id", async (req, res) => {
    try {
        const task = tasks_validate_property_1.default.setAndValidatePropertyTask(req.body);
        delete task.id;
        await tasksCollections.doc(req.params.id).update(task);
        res.json(Object.assign(Object.assign({}, task), { id: req.params.id }));
    }
    catch (error) {
        res.status(400).json({
            message: "Error al editar la Tarea intenta de nuevo!",
        });
    }
});
// Elimina una tarea.
routerTasks.delete("/:id", async (req, res) => {
    try {
        await tasksCollections.doc(req.params.id).update({ save: true });
        res.json({
            message: "Se elimino la Tarea Exitosamente!",
        });
    }
    catch (error) {
        res.status(404).json({
            message: "Error al eliminar la Tarea intenta de nuevo!",
        });
    }
});
// Export RouteTasks
exports.default = routerTasks;
//# sourceMappingURL=tasks.js.map
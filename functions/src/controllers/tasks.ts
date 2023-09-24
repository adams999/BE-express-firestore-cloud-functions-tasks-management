// Connection to db the firestore.
import db from "../firebase/config";

import express, { Request, Response } from "express";
import helperTasks from "../utils/helpers/tasks-validate-property";

import { Task, TaskResponse } from "../utils/models";

// Modularizar routes.
const routerTasks = express.Router();

// RUTAS TASKS
const tasksCollections = db.collection("tasks");

// Obtiene la lista de las tareas.
routerTasks.get("/", async (req: Request, res: Response) => {
  try {
    const tasksList: Task[] = [];
    const tasksRef = await tasksCollections.where("save", "==", false).get();
    tasksRef.forEach((task) => {
      tasksList.push({
        ...(task.data() as unknown as Task),
        id: task.id,
      } as Task);
    });
    res.json(tasksList);
  } catch (error) {
    res.status(400).json({
      message: "Error al retornar las Tareas, intenta de nuevo!",
    } as TaskResponse);
  }
});

// Obtiene una tarea especifica.
routerTasks.get("/:id", async (req: Request, res: Response) => {
  try {
    const taskRef = await tasksCollections.doc(req.params.id).get();
    res.json({ ...taskRef.data(), id: taskRef.id });
  } catch (error) {
    res.status(404).json({
      message: "No se encontro la Tarea, intenta de nuevo!",
    } as TaskResponse);
  }
});

// Genera una nueva Tarea.
routerTasks.post("/", async (req: Request, res: Response) => {
  try {
    const taskData: Task = {
      ...helperTasks.setAndValidatePropertyTask(req.body),
      save: false,
    } as Task;
    const taskRef = await tasksCollections.add(taskData);
    res.json({ ...taskData, id: taskRef.id } as Task);
  } catch (error) {
    res.status(400).json({
      message: "Error al crear la Tarea intenta de nuevo!",
    } as TaskResponse);
  }
});

// Actualiza una tarea
routerTasks.put("/:id", async (req: Request, res: Response) => {
  try {
    const task: Task = helperTasks.setAndValidatePropertyTask(req.body);
    delete task.id;
    await tasksCollections.doc(req.params.id).update(task);
    res.json({ ...task, id: req.params.id } as Task);
  } catch (error) {
    res.status(400).json({
      message: "Error al editar la Tarea intenta de nuevo!",
    } as TaskResponse);
  }
});

// Elimina una tarea.
routerTasks.delete("/:id", async (req: Request, res: Response) => {
  try {
    await tasksCollections.doc(req.params.id).update({ save: true });
    res.json({
      message: "Se elimino la Tarea Exitosamente!",
    } as TaskResponse);
  } catch (error) {
    res.status(404).json({
      message: "Error al eliminar la Tarea intenta de nuevo!",
    } as TaskResponse);
  }
});

// Export RouteTasks
export default routerTasks;

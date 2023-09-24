import { Task } from "./task";

// Modelo representa la estandarizacion de data para las peticiones.
export interface TaskResponse {
  /** Mensaje mostrar al cliente. */
  message: string;

  /** Data de la tarea actualizada. */
  task?: Task[];
}

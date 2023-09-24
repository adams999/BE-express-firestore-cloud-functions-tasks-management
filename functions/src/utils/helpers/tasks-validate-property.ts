import { StatusTaskEnum, Task } from "../../utils/models";

// Helpers all related with path tasks.
const helperTasks = {
  // Set and validate object to generate object the task to modified data.
  setAndValidatePropertyTask(task: Task) {
    const taskData: Task = {
      name: task.name,
      description: task.description,
      status: [StatusTaskEnum.Pendiente, StatusTaskEnum.Finalizada].includes(
        task.status
      ) ? task.status : StatusTaskEnum.Pendiente,
    };
    task?.id ? (taskData.id = task.id) : null;
    return taskData;
  },
};

export default helperTasks;

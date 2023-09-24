"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../utils/models");
// Helpers all related with path tasks.
const helperTasks = {
    // Set and validate object to generate object the task to modified data.
    setAndValidatePropertyTask(task) {
        const taskData = {
            name: task.name,
            description: task.description,
            status: [models_1.StatusTaskEnum.Pendiente, models_1.StatusTaskEnum.Finalizada].includes(task.status) ? task.status : models_1.StatusTaskEnum.Pendiente,
        };
        (task === null || task === void 0 ? void 0 : task.id) ? (taskData.id = task.id) : null;
        return taskData;
    },
};
exports.default = helperTasks;
//# sourceMappingURL=tasks-validate-property.js.map
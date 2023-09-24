"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiFirestore = void 0;
// Imports to executed cloudStore.
const https_1 = require("firebase-functions/v2/https");
// Imports to libs to work backend.
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
// Controller centered.
const v1_1 = __importDefault(require("./routes/v1"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true })); // se usa para los post
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
// Established functionality of paths.
(0, v1_1.default)(app);
exports.apiFirestore = (0, https_1.onRequest)(app);
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("firebase/compat/app"));
require("firebase/compat/auth");
require("firebase/compat/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyCcKyvyDjy5HViug7_MYYyDvgMxqYETLZU",
    authDomain: "listado-personas-48fcf.firebaseapp.com",
    databaseURL: "https://listado-personas-48fcf-default-rtdb.firebaseio.com",
    projectId: "listado-personas-48fcf",
    storageBucket: "listado-personas-48fcf.appspot.com",
    messagingSenderId: "938543601604",
    appId: "1:938543601604:web:7daaea5efee237dd64f691",
    measurementId: "G-ELRBG2TM8Z",
};
app_1.default.initializeApp(firebaseConfig);
const db = app_1.default.firestore();
exports.default = db;
//# sourceMappingURL=config.js.map
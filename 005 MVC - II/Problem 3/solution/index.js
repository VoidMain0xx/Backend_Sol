import express from "express";
import { newUser } from "./user.controller.js";
import validateMiddleware from "./Middleware/validateRequest.js";

const app = express();
app.use(express.json());
app.post("/new", validateMiddleware, newUser);

export default app;

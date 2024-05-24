import { Router } from "express";
import * as controller from "../controllers/index";

export const index = Router();


index.use("/login", controller.loginRouter);
index.get("/", controller.index);

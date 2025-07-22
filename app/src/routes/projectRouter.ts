import { Router } from "express";
import { getProject } from "../controllers/getProjectController";
import { getAllProjects } from "../controllers/getAllProjectsController";
import { createProject } from "../controllers/createProjectController";

export const projectRouter = Router();

projectRouter.get("/", getAllProjects);
projectRouter.get("/:userId", getProject);

//these will be protected routes
projectRouter.post("/", createProject);
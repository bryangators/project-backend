import { Router } from "express";
import { deleteProject } from "../controllers/deleteProjectcontroller";
import { getProject } from "../controllers/getProjectController";
import { getAllProjects } from "../controllers/getAllProjectsController";
import { createProject } from "../controllers/createProjectController";

export const projectRouter = Router();

projectRouter.get("/", getAllProjects);
projectRouter.get("/:projectId", getProject);

//these will be protected routes
projectRouter.post("/", createProject);
projectRouter.delete("/:projectId", deleteProject);
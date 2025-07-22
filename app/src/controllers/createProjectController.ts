import { RequestHandler } from "express";
import * as z from "zod";

import { addProject } from "../services/addProject";

const Project = z.object({
    title: z.string(),
    desc: z.string(),
    body: z.string(),
    date: z.coerce.date(),
    imageUrl: z.string(),
});

export const createProject: RequestHandler = (req, res) => {
    try {
        let payload = req.body;
        Project.parse(payload);

        addProject(payload);
        res.status(201).json({"message": "Successfully uploaded project"});
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({message: "Invalid payload"});
        }

        res.status(500).json("Internal server error");
    }
}
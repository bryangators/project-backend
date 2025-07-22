import { RequestHandler } from "express";
import { fetchAllProjects } from "../services/getAllProjects";

export const getAllProjects: RequestHandler = async (req, res) => {
    try {
        const projects = await fetchAllProjects();
        
        if (!projects)
            return res.status(404).json({ error: "Projects not found" });

        res.status(200).json({projects});
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}
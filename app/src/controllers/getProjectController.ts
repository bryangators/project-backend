import { RequestHandler } from "express";
import { getProjectById } from "../services/getProject";

export const getProject: RequestHandler<{projectId: string}> = async (req, res) => {
    try {
        const projectId = parseInt(req.params.projectId);

        const project = await getProjectById(projectId);

        if (!project)
            return res.status(404).json({ error: `Project not found for id: ${projectId}`})
        
        res.status(200).json({result: project});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
}
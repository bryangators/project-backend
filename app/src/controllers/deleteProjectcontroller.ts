import { RequestHandler } from "express";
import { deleteProjectById } from "../services/deleteProject";

export const deleteProject: RequestHandler<{projectId: string}> = async (req, res) => {
    try {
        const projectId = parseInt(req.params.projectId);

        const deleted = await deleteProjectById(projectId);
        
        if (deleted.rowCount == 0) {
            return res.status(404).json({ error: `Project id: ${projectId} not found` });
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
}
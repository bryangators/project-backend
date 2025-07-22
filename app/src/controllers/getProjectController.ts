import { RequestHandler } from "express";
import { fetchProject } from "../services/getProject";

export const getProject: RequestHandler<{userId: string}> = async (req, res) => {
    try {
        const userId = parseInt(req.params.userId);

        const result = await fetchProject(userId);
        
        res.status(200).json({result});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
}
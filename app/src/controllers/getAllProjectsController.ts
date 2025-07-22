import { RequestHandler } from "express";
import { fetchAllProjects } from "../services/getAllProjects";

export const getAllProjects: RequestHandler = async (req, res) => {
    try {
        const userId = parseInt(req.params.userId);

        const result = await fetchAllProjects();
        
        res.status(200).json({result});
    } catch (error) {
        //test
    }
}
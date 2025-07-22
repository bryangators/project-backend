import { db } from "../db/client";
import { projects } from "../db/schema";

export const fetchAllProjects = async () => {
    try {
        const result = await db
            .select()
            .from(projects);
        return result;
    } catch (error) {
        throw new Error("Something went wrong fetching all projects.");
    }
}
import { eq } from 'drizzle-orm';
import { db } from "../db/client";
import { projects } from "../db/schema";

export const deleteProjectById = async (projectId: number)=> {
    try {
        const result = await db
            .delete(projects)
            .where(eq(projects.id, projectId));

        return result;
    } catch (error) {
        throw new Error(`Something went wrong deleting project id: ${projectId}.`);
    }
}
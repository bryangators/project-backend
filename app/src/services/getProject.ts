import { eq } from 'drizzle-orm';
import { db } from "../db/client";
import { projects } from "../db/schema";

export const getProjectById = async (projectId: number)=> {
    try {
        const result = await db
            .select()
            .from(projects)
            .where(eq(projects.id, projectId));
        return result[0];
    } catch (error) {
        throw new Error(`Something went wrong fetching project id: ${projectId}.`);
    }
}
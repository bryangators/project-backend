import { eq } from 'drizzle-orm';
import { db } from "../db/client";
import { projects } from "../db/schema";

export const fetchProject = async (id: number)=> {
    try {
        const result = await db
            .select()
            .from(projects)
            .where(eq(projects.id, id));
        return result[0];
    } catch (error) {
        throw new Error(`Something went wrong fetching project id: ${id}.`);
    }
}
import { db } from "../db/client";
import { projects } from "../db/schema";
import { Project } from "../types";

export const addProject = async (project: Project) => {
    try {
        const insertProject = db
            .insert(projects)
            .values({
                title: project.title,
                desc: project.desc,
                body: project.body,
                date: project.date.toString(),
                imageUrl: project.imageUrl,
            })
            .returning({ 
                id: projects.id,
                title: projects.title,
                desc: projects.desc,
                body: projects.body,
                date: projects.date,
                imageUrl: projects.imageUrl, 
            });
        
        return insertProject;
    } catch (error) {
        throw new Error("Something went wrong inserting a new project.");
    }
}
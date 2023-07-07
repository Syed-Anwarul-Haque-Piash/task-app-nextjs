import { Itask } from "./types/Tasks"

const baseURL="http://localhost:3001"
export const getAllTasks= async(): Promise<Itask[]> =>{
    const res=await fetch(`${baseURL}/tasks`);
    const tasks=await res.json();
    return tasks;
}
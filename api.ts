import { Itask } from "./types/Tasks"

const baseURL="http://localhost:3001"

export const getAllTasks= async(): Promise<Itask[]> =>{
    const res=await fetch(`${baseURL}/tasks`,{cache:'no-store'});
    const tasks=await res.json();
    return tasks;
}

export const addTask = async(task:Itask): Promise<Itask>=>{
    const res=await fetch(`${baseURL}/tasks`,{
        method: 'POST',
       headers:{
        'Content-Type': 'application/json'
       },
       body: JSON.stringify(task)
    })
    const newTask=res.json();
    return newTask
}
export const editTask = async(task:Itask): Promise<Itask>=>{
    const res=await fetch(`${baseURL}/tasks/${task.id}`,{
        method: 'PUT',
       headers:{
        'Content-Type': 'application/json'
       },
       body: JSON.stringify(task)
    })
    const updatedTask=res.json();
    return updatedTask
}
export const deleteTask = async(id:string): Promise<void>=>{
    await fetch(`${baseURL}/tasks/${id}`,{
        method: 'DELETE',
       
    })
   
}
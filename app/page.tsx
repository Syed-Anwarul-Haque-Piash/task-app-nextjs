import { getAllTasks } from "@/api";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";


export default async function Home() {
  const tasks=await getAllTasks()
  console.log(tasks);
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Task Application</h1>
        <AddTask></AddTask>
      </div>
      <TaskList tasks={tasks}></TaskList>
    </main>
  )
}

import AddTask from "./components/AddTask";


export default function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Task Application</h1>
        <AddTask></AddTask>
      </div>
    </main>
  )
}

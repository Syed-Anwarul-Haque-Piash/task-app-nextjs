import { Itask } from "@/types/Tasks";

interface TaskListProps{
  tasks: Itask[]
}
const TaskList:React.FC<TaskListProps> = ({tasks}) => {
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map(task=>
        <tr key={task.id}>
        <td>{task.text}</td>
         <td>Blue</td>
       </tr>)}
      {/* <tr>
       <td>Cy Ganderton</td>
        <td>Blue</td>
      </tr> */}
     
    </tbody>
  </table>
</div>
    );
};

export default TaskList;
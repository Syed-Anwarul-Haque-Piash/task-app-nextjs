import { Itask } from "@/types/Tasks";
import Task from "./Task";

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
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map(task=><Task task={task}></Task>)}
        {/* <tr >
        <td>{task.text}</td>
         <td>Blue</td>
       </tr> */}
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
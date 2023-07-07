import { Itask } from "@/types/Tasks";

interface TaskProps{
    task:Itask
}

const Task:React.FC<TaskProps> = ({task}) => {
    return (
        <tr key={task.id}>
        <td>{task.text}</td>
         <td>Blue</td>
       </tr>
    );
};

export default Task;
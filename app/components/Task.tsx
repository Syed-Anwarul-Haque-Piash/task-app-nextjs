'use client';
import { Itask } from "@/types/Tasks";
import {BiEdit,BiTrash} from 'react-icons/bi';
import  {FormEventHandler, useState} from 'react'
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { editTask } from "@/api";
//import {FaTrash} from 'react-icons/fa';

interface TaskProps{
    task:Itask
}

const Task:React.FC<TaskProps> = ({task}) => {
    const router=useRouter()
    const [openModalEdit,setOpenModalEdit]=useState<boolean>(false)
    const [openModalDeleted,setOpenModalDeleted]=useState<boolean>(false)
    const [taskEdit,setTaskEdit]=useState<string>(task.text)
    const handleSubmitEdit:FormEventHandler<HTMLFormElement> =async(e)=>{
       e.preventDefault();
       await editTask({
        id:task.id,
        text: taskEdit
       })
       setTaskEdit("");
       setOpenModalEdit(false)
       router.refresh();
    }
    return (
        <tr >
        <td className="w-full">{task.text}</td>
         <td className="flex gap-4">
            <BiEdit onClick={()=>setOpenModalEdit(true)} cursor="pointer" size={25} className="text-green-500"></BiEdit>
            <Modal openModal={openModalEdit} setOpenModal={setOpenModalEdit}>
                <form onSubmit={handleSubmitEdit}>
                    <h3 className="font-bold text-lg">Edit Task</h3>
                    <div className="modal-action">
                        <input type="text" value={taskEdit} onChange={(e)=>setTaskEdit(e.target.value)} 
                        placeholder="Type here" 
                        className="input input-bordered input-info w-full max-w-xs" />
                        <button type="submit" className="btn">Submit</button>
                    </div>
                    
                </form>
            </Modal>
            <BiTrash cursor="pointer" size={25} className="text-red-500"></BiTrash>
         </td>
        
       </tr>
       
    );
};

export default Task;
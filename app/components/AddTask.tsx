'use client';
import { addTask } from "@/api";
import Modal from "./Modal";
import { FormEventHandler, useState } from 'react'
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';


const AddTask = () => {
    const router=useRouter();
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [tasks,setTasks]=useState<String>("");
    const handleSubmit: FormEventHandler<HTMLFormElement>=async(e)=>{
        e.preventDefault();
        //console.log(tasks)
        await addTask({
            id: uuidv4(),
            text: tasks
        })
        setTasks("");
        setOpenModal(false);
        router.refresh();
    }
    return (
        <div>
            <button onClick={() => setOpenModal(true)} className="btn btn-success w-full">Add task</button>
            <Modal openModal={openModal} setOpenModal={setOpenModal}>
                <form onSubmit={handleSubmit}>
                    <h3 className="font-bold text-lg">Add New task</h3>
                    <div className="modal-action">
                        <input type="text" value={tasks} onChange={(e)=>setTasks(e.target.value)} placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AddTask;
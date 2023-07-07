'use client';
import Modal from "./Modal";
import {useState} from 'react'


const AddTask = () => {
    const [openModal,setOpenModal]=useState<boolean>(false)
    return (
        <div>
           <button onClick={()=>setOpenModal(true)} className="btn btn-success w-full">Add task</button>
           <Modal openModal={openModal} setOpenModal={setOpenModal}></Modal>
        </div>
    );
};

export default AddTask;
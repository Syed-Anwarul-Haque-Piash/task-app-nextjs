'use client';
import Modal from "./Modal";
import { useState } from 'react'


const AddTask = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    return (
        <div>
            <button onClick={() => setOpenModal(true)} className="btn btn-success w-full">Add task</button>
            <Modal openModal={openModal} setOpenModal={setOpenModal}>
                <form>
                    <h3 className="font-bold text-lg">Add New task</h3>
                    <div className="modal-action">
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AddTask;
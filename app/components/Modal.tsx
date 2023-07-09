interface ModalProps {
    openModal: boolean;
    setOpenModal: (open: boolean) => boolean | void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ openModal, setOpenModal, children }) => {
    return (
        // <dialog id="my_modal_3" className={`modal ${openModal ? "modal-open" : ""}`}>
        //     <form method="dialog" className="modal-box">
        //         <button onClick={() => setOpenModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        //         {children}
        //     </form>
        // </dialog>
        <div className={`modal ${openModal ? "modal-open" : ""}`}>
            <div className="modal-box relative">
                <label onClick={() => setOpenModal(false)}
                className="btn btn-sm btn-circle absolute right-2 top-2"
                >x
                </label>
                {children}
            </div>
        </div>
    );
};

export default Modal;
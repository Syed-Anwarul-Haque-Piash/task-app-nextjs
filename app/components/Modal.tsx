interface ModalProps{
    openModal:boolean;
    setOpenModal: ()=>void;
}

const Modal:React.FC<ModalProps> = ({openModal,setOpenModal}) => {
    return (
        <dialog id="my_modal_3" className={`modal ${openModal ? "modal-open" : ""}`}>
            <form method="dialog" className="modal-box">
                <button onClick={()=>setOpenModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click on ✕ button to close</p>
            </form>
        </dialog>
    );
};

export default Modal;
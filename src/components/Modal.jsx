import { useEffect, useRef } from "react";
import { useModal } from "../contexts/ModalContext";

function Modal() {
    const { modal, closeModal, modalContent } = useModal();
    const ref = useRef();
    const closeRef = useRef();

    useEffect(() => {
        if (modal) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [modal]);

    useEffect(() => {
        if (closeRef.current) {
            closeRef.current.focus();
        }
    }, [modal]);

    return ( 
        <dialog
            ref={ref}
            className="shadow"
            onCancel={closeModal}  
            autoFocus 
            onClick={(e) => {
                const dialogDimentions = ref.current.getBoundingClientRect()
                if (
                    e.clientX < dialogDimentions.left ||
                    e.clientX > dialogDimentions.right ||
                    e.clientY < dialogDimentions.top ||
                    e.clientY > dialogDimentions.bottom
                ) {
                    closeModal()
                }
            }} 
        >
            {modalContent}
            <button onClick={closeModal} ref={closeRef}>
                Close
            </button>
        </dialog>
     );
}

export default Modal;
import { useEffect, useRef } from "react";

function Modal({ openModal, closeModal, children }) {
    const ref = useRef();

    useEffect(() => {
        if (openModal) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [openModal]);
    return ( 
        <dialog
            ref={ref}
            onCancel={closeModal}  
            autoFocus 
            onClick={(e) => {
                // console.log('click en el modal')
                // console.log(e)
                // console.log(ref.current.getBoundingClientRect())
                const dialogDimentions = ref.current.getBoundingClientRect()
                if (
                    e.clientX < dialogDimentions.left ||
                    e.clientX > dialogDimentions.right ||
                    e.clientY < dialogDimentions.top ||
                    e.clientY > dialogDimentions.bottom
                ) {
                    // console.log('El click está afuera')
                    closeModal()
                }
            }} 
        >
            {children}
            <button onClick={closeModal}>
                Close
            </button>
        </dialog>
     );
}

export default Modal;
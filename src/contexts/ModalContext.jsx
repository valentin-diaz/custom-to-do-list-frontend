import { useEffect, useState } from "react";
import { useContext, createContext } from "react";

const ModalContext = createContext();

export function useModal() {
    return useContext(ModalContext);
}

export function ModalProvider({ children }) {
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState(<></>);

    useEffect(() => {
        const keyDownHandler = event => {
            if (event.key === 'Escape') {
                event.preventDefault();
                setModal(false)
            }
        };
        document.addEventListener('keydown', keyDownHandler);
      
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);

    const showModal = (content) => {
        setModalContent(content);
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    return (
        <ModalContext.Provider 
            value={{
                modal,
                modalContent,
                showModal,
                closeModal
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}
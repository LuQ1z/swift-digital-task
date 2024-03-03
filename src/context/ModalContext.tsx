import React, {
	createContext,
	useState,
	ReactNode,
	PropsWithChildren,
} from "react";
import { Modal, ModalBackground, ModalWrapper } from "./Modal.styles";

const ModalContext = createContext({
	showModal: (_: ReactNode) => {},
});

// Create the provider
export const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState<ReactNode>(null);

	const showModal = (content: ReactNode) => {
		setModalContent(content);
		setIsModalOpen(true);
		document.body.style.overflow = "hidden";
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setModalContent(null);
		document.body.style.overflow = "auto";
	};

	return (
		<ModalContext.Provider value={{ showModal }}>
			{children}
			{isModalOpen && (
				<ModalBackground onClick={closeModal}>
					<Modal>
						<ModalWrapper
							onClick={(e) => {
								//stop even bubbling
								e.stopPropagation();
							}}
						>
							{modalContent}
						</ModalWrapper>
					</Modal>
				</ModalBackground>
			)}
		</ModalContext.Provider>
	);
};

export default ModalContext;

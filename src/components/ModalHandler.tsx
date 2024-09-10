import React, { useEffect, useState } from 'react';
import { modalService, Modal } from '../services/ModalService';
import Button from './Button';

const ModalHandler: React.FC = () => {
  const [currentModal, setCurrentModal] = useState<Modal | null>(null);

  useEffect(() => {
    const handleModalChange = (modal: Modal | null) => {
      setCurrentModal(modal);
    };

    modalService.subscribe(handleModalChange);

    return () => {
      modalService.unsubscribe(handleModalChange);
    };
  }, []);

  if (!currentModal) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={() => {
        modalService.closeCurrent();
      }}
    >
      <div
        className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 m-4"
        onClick={(e) => {
          e.stopPropagation(); // Prevent click event from closing the modal
        }}
      >
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">{currentModal.title}</h2>
        </div>
        <div className="mb-4">
          {currentModal.children}
        </div>
        <div className="flex justify-end space-x-2">
          {currentModal.buttons.slice().reverse().map((button, index) => (
            <Button key={index} style={button.style} onClick={() => {
                modalService.closeCurrent(button);
            }}>
                {button.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalHandler;

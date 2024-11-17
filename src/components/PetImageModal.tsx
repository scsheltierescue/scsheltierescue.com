import React from 'react';
import 'src/styles/PetImageModal.css';

interface ModalProps {
  image: string;
  isOpen: boolean;
  onClose: () => void;
}

const PetImageModal: React.FC<ModalProps> = ({ image, isOpen, onClose }) => {
  return (
    <div
      id="petImageModal"
      onClick={onClose}
      className={`fixed z-[100] pt-[100px] w-full h-full top-0 left-0 overflow-auto bg-black bg-black/90 ${isOpen ? '' : 'hidden'}`}
    >
      {/* The Close Button */}
      <span id="modalClose" onClick={onClose} className="modal-close">&times;</span>

      {/* Modal Content (The Image) */}
      <img id="modalMainImage" onClick={(e) => e.stopPropagation()} src={image} className="modal-content" />
    </div>
  );
};

export default PetImageModal;
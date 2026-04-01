function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white rounded-2xl p-6 w-[400px] relative animate-fadeIn">
        
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500"
        >
          ✖
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
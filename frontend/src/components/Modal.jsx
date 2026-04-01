function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white rounded-2xl p-6 min-w-1/2 relative animate-fadeIn">
        
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 m-4 cursor-pointer"
        >
          ✖
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
import React, { useRef, useEffect } from 'react';

function Modal({ text, onClose }) {
  const modalRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); 
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      style={{
        position: 'fixed',inset: '0',display: 'flex',alignItems: 'center', justifyContent: 'center',
        backgroundColor: 'rgba(107, 114, 128, 0.5)', zIndex: 50,}}
    >
      <div
        ref={modalRef}
        style={{
          backgroundColor: '#6b7280', padding: '1.5rem', borderRadius: '0.375rem',width: '50%',
          height: '50%', position: 'relative', display: 'flex',alignItems: 'center',justifyContent: 'center',}}
      >
        <div
          style={{
            color: 'white',
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}

export default Modal;

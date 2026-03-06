import React, { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose, duration = 4000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'linear-gradient(135deg, #10b981, #059669)';
      case 'error':
        return 'linear-gradient(135deg, #ef4444, #dc2626)';
      case 'info':
        return 'linear-gradient(135deg, #3b82f6, #2563eb)';
      default:
        return 'linear-gradient(135deg, #10b981, #059669)';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'info':
        return 'ℹ';
      default:
        return '✓';
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: getBackgroundColor(),
      color: 'white',
      padding: '16px 24px',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      zIndex: 9999,
      minWidth: '300px',
      maxWidth: '500px',
      animation: 'slideIn 0.3s ease-out',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        fontWeight: 'bold'
      }}>
        {getIcon()}
      </div>
      
      <div style={{ flex: 1, fontSize: '14px', lineHeight: '1.5' }}>
        {message}
      </div>
      
      <button
        onClick={onClose}
        style={{
          background: 'rgba(255,255,255,0.2)',
          border: 'none',
          color: 'white',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          transition: 'background 0.2s'
        }}
        onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.3)'}
        onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
      >
        ×
      </button>

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Toast;
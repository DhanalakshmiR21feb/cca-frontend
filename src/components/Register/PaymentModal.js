import React from 'react';
import { useModal } from './ModalContext';
import './Modal.css'; // Ensure you have this CSS

const PaymentModal = () => {
  const { isPaymentModalOpen, closePaymentModal, selectedCourse } = useModal();

  if (!isPaymentModalOpen || !selectedCourse) return null;

  const handlePayment = async () => {
    try {
      const response = await fetch('http://localhost:5000/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ course: selectedCourse.name }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        closePaymentModal();
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={closePaymentModal}>X</button>
        {selectedCourse ? (
          <div>
            <h2>Payment</h2>
            <p><strong>{selectedCourse.name}</strong></p>
            <p>Price: ${selectedCourse.price}</p>
            <button onClick={handlePayment}>Make Payment Now</button>
          </div>
        ) : (
          <p>No course selected.</p>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;

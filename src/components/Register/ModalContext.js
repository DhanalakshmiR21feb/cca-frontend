import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [isUserFormModalOpen, setIsUserFormModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openUserFormModal = () => setIsUserFormModalOpen(true);
  const closeUserFormModal = () => setIsUserFormModalOpen(false);

  const registerUser = (course) => {
    setSelectedCourse(course);
    closeUserFormModal(); // Close the user form modal
    setIsPaymentModalOpen(true); // Open the payment modal
  };

  const closePaymentModal = () => setIsPaymentModalOpen(false);

  return (
    <ModalContext.Provider value={{
      isUserFormModalOpen,
      openUserFormModal,
      closeUserFormModal,
      registerUser,
      isPaymentModalOpen,
      closePaymentModal,
      selectedCourse,
    }}>
      {children}
    </ModalContext.Provider>
  );
};

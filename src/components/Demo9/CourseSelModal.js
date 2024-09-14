import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root');

const coursesList = [
  { id: 1, name: 'Web Designing', price: 100 },
  { id: 2, name: 'Full Stack Development', price: 200 },
  { id: 3, name: 'Python Programming', price: 150 },
  { id: 4, name: 'Java Programming', price: 150 },
];

const CourseSelModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let [selectedCourses, setSelectedCourses] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCourseSelection = (course) => {
    const alreadySelected = selectedCourses.find((item) => item.id === course.id);

    if (alreadySelected) {
      const filteredCourses = selectedCourses.filter((item) => item.id !== course.id);
      setSelectedCourses(filteredCourses);
      setTotalPrice(totalPrice - course.price);
    } else {
      setSelectedCourses([...selectedCourses, course]);
      setTotalPrice(totalPrice + course.price);
    }
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/payment', {
        courses: selectedCourses,
        total: totalPrice,
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Select Courses</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Select Your Courses</h2>
        <ul>
          {coursesList.map((course) => (
            <li key={course.id}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCourses.some((item) => item.id === course.id)}
                  onChange={() => handleCourseSelection(course)}
                />
                {course.name} - ${course.price}
              </label>
            </li>
          ))}
        </ul>
        <p>Total Price: ${totalPrice}</p>
        <button onClick={handlePayment}>Proceed to Payment</button>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default CourseSelModal;

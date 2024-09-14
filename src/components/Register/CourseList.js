import React from 'react';

const CourseList = () => {
  const courses = [
    { id: 'course1', name: 'Course 1', price: '$100' },
    { id: 'course2', name: 'Course 2', price: '$200' },
    { id: 'course3', name: 'Course 3', price: '$300' },
  ];

  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name} - {course.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;

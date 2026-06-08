import React from 'react'
import CourseCard from './CourseCard';
function Cainfo(){
  const handleEnroll = (course) => {
    alert(`Enrolled in ${course}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <CourseCard
        courseName="React JS"
        trainerName="John"
        price={2999}
        duration="6 Weeks"
        isLive={true}
        onEnroll={() => handleEnroll("React JS")}
      />

      <CourseCard
        courseName="Python"
        trainerName="David"
        price={2499}
        isLive={false}
        onEnroll={() => handleEnroll("Python")}
      />

      <CourseCard
        courseName="Django"
        trainerName="Alex"
        price={3499}
        duration="8 Weeks"
        isLive={true}
        onEnroll={() => handleEnroll("Django")}
      />

      <CourseCard
        courseName="Java"
        trainerName="Smith"
        price={1999}
        isLive={false}
        onEnroll={() => handleEnroll("Java")}
      />

      <CourseCard
        courseName="Node JS"
        trainerName="Robert"
        price={2799}
        duration="5 Weeks"
        isLive={true}
        onEnroll={() => handleEnroll("Node JS")}
      />

      <CourseCard
        courseName="MongoDB"
        trainerName="Kevin"
        price={1599}
        isLive={false}
        onEnroll={() => handleEnroll("MongoDB")}
      />
    </div>
  );
}


export default Cainfo

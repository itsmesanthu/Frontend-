import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  let company = "Infosys";
  let empName = "Sachin";
  let city='bengalur'
  let age = 25;
  let ex=10;

  return (
    <>
      <ChildComponent
        company={company}
        name={empName}
        city={city}
        age={age}
        exp={ex}
      />
    </>
  );
}

export default ParentComponent;
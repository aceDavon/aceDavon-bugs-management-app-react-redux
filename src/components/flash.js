import React from "react";

const Flash = (props) => {
  const { title } = props;
  console.log(title);

  return (
    <div className="flash-cont">
      {props.title} added successfully! wait while we redirect to your dashboard
    </div>
  );
};

export default Flash;

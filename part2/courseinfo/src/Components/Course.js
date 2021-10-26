import React from "react";

const Header = ({ course }) => (
  <>
    <h1>{course.name}</h1>
  </>
);

const Part = ({ name, exercises }) => (
  <>
    <p>
      {name} {exercises}
    </p>
  </>
);

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
    </>
  );
};

const Total = ({parts}) => {
    let exer = parts.map( part => part.exercises)
    let total = exer.reduce((sum, exer) => sum+exer, 0)
    return (
        <>
          <strong>
            Total of {total} exercises
          </strong>
        </>
    )
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;
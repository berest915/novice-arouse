import React from "react";
import { Wrapper } from "./TechStackStyles";

const TechStack = ({ title, techStackProps }) => {
  return (
    <>
      <Wrapper>
        <p className="title">{title}</p>
        <div className="stacks">
          {techStackProps.map((stack, index) => (
            <p className="stack" key={index}>
              <stack.StackIcon className="styled-icons" />
              <span>{stack.stackName}</span>
            </p>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default TechStack;

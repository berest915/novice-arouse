import React from "react";
import {Cards} from "./Cards";
import Card from "./Card"

const ProjectList = () => {
  return (
    <>
      <div className="projectlist">
        {Cards.map(card => (
          <Card key={card.title} card={card} />
        ))}
      </div>
    </>
  );
};

export default ProjectList;

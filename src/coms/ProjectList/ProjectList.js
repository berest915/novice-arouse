import React from "react";
import {Cards} from "./Cards";
import Card from "./Card"

const ProjectList = () => {
  return (
    <>
        {Cards.map(card => (
          <Card key={card.title} card={card} />
        ))}
    </>
  );
};

export default ProjectList;

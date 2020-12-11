import React from "react";
import { Wrapper } from "./MainMessageStyles";

const MainMessage = () => {
  return (
    <>
      <Wrapper>
        <div className="msg">
          <p>
            Hey there, I'm <span>San.</span>
          </p>
          <p>
            <span>Frontend React</span> Developer,
          </p>
          <p>
            Novice but <span>Notable.</span>
          </p>
        </div>
      </Wrapper>
    </>
  );
};

export default MainMessage;

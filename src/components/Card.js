import React, { useContext, useEffect } from "react";
import CardContainer from "./CardContainer";
import { Context } from "./Context";

const Card = () => {
  const { state, dispatch } = useContext(Context);
  console.log(state.movies);

  return (
    <div>
      {state?.movies?.map((item, idx) => (
        <CardContainer key={idx} item={item} />
      ))}
    </div>
  );
};

export default Card;

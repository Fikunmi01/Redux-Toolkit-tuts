import React, { useState } from "react";
import { ordered, restocked } from "./cakeSlice";
import { useDispatch, useSelector } from "react-redux";

export const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes- {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <button onClick={() => dispatch(restocked(2))}>Restock cakes</button>
    </div>
  );
};

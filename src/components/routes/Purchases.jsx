import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPurchasesThunk } from "../../store/slices/puchases.slice";
import getConfig from "../../utils/getConfig";

const Purchases = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);

  return (
    <div>
      <h1>Purchases</h1>
    </div>
  );
};

export default Purchases;


import React from "react";
import { useGlobalContext } from "../context";

const Buttons = () => {
  const { handlePage, isLoading, nbPages, page } = useGlobalContext();
  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={() => handlePage("decrease")}>
        Prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage("increase")}>
        Next
      </button>
    </div>
  );
};

export default Buttons;

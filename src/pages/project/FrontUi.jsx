import React from "react";
import { fetchPhotos } from "../../api/mediaApi";

const FrontUi = () => {
  return (
    <div>
      <button
        onClick={() => {
          fetchPhotos("batman");
        }}
      >
        Get
      </button>
    </div>
  );
};

export default FrontUi;

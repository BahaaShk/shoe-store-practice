import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <section className=" flex flex-col items-center justify-center ">
      <img
        src={imgURL}
        alt="customer"
        className="h-[120px] w-[120px] rounded-full object-cover"
      />
      <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>
      <div className="flex justify-center items-center mt-3 gap-2.5">
        <img
          src={star}
          alt="star-icon"
          width={24}
          height={24}
          className="m-0 object-contain"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
        <h3 className=" mt-1 font-palanquin text-center font-bold text-2xl">{customerName}</h3>
    </section>
  );
};

export default ReviewCard;

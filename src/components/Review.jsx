import React from "react";

import man from "../assets/man.png";

const Review = () => {
  return (
    <div className="flex flex-col items-center bg-background p-10 gap-5">
      <h1 className="text-lg font-bold text-center">
        A payments experience people love to talk about
      </h1>
      <div className="sm:max-w-5/6 flex flex-col items-center bg-white rounded-3xl p-5">
        <div className="flex flex-col items-center p-4 gap-5">
          <img src={man} alt="Reviewer Avatar" className="w-20 h-20" />
          <h1 className="text-sm font-thin italic text-center sm:max-w-xl">
            "Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts Separated they
            live."
          </h1>
          <p className="text-xs font-semibold">John Doe - CTO</p>
        </div>
      </div>
    </div>
  );
};

export default Review;

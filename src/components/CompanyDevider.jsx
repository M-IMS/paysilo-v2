import React from "react";

import cubico from "../assets/cubico.png";
import king from "../assets/king.png";
import hexagon from "../assets/hexagon.png";
import coffee from "../assets/coffee.png";
import mates from "../assets/mates.png";

const CompanyDevider = () => {
  return (
    <div className="bg-clr2 max-h-[92px] flex justify-items-center justify-evenly">
      <img src={cubico} alt="cubico" className="min-w-[80px]" />
      <img src={king} alt="king" className="min-w-[80px]" />
      <img src={hexagon} alt="hexagon" className="min-w-[80px]" />
      <img src={coffee} alt="coffee" className="min-w-[80px]" />
      <img src={mates} alt="mates" className="min-w-[80px]" />
    </div>
  );
};

export default CompanyDevider;

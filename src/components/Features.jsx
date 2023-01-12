import React from "react";

import chain from "../assets/chain.png";
import right_arrow from "../assets/right_arrow.png";
import doller from "../assets/doller.png";
import carancy from "../assets/carancy.png";
import growth from "../assets/growth.png";
import business from "../assets/business.png";
import manage_accounting from "../assets/manage_accounting.png";
import resolve_disputes from "../assets/resolve_disputes.png";
import global_support from "../assets/global_support.png";
import progress from "../assets/progress.png";
import data from "../assets/data.png";
import bank from "../assets/bank.png";

const Features = () => {
  return (
    <div className="max-w-[1440px] m-auto my-5  flex flex-col items-center">
      {/* Payment Gateway Works */}
      <div className="text-center flex flex-col items-center mt-10">
        <h1 className="text-darktext text-4xl font-bold ">
          How Paysilo Payment Gateway Works
        </h1>
        <p className="sm:w-3/5 py-4 px-5 text-sm text-center text-lighttext break-words">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
          optio dolorem facere nulla tempore deleniti officiis iusto esse
          corrupti provident, nemo error totam obcaecati sequi repellat illum
          modi consequuntur pariatur.
        </p>
      </div>

      {/* card link */}
      <div className="mb-10 py-10 flex flex-col sm:flex-row justify-center gap-12">
        <div className="h-[120px] bg-white shadow-xl rounded-b-3xl flex flex-col px-6">
          <div className="bg-accent w-12 h-12 rounded-b-3xl flex justify-center items-center">
            <img src={chain} alt="chain icon" className="w-5 h-6" />
          </div>
          <div className="pt-3 w-auto h-24 text-darktext text-lg font-bold">
            1. Create Payment Links
          </div>
        </div>
        <div className="h-[120px] bg-white shadow-xl rounded-b-3xl flex flex-col px-6">
          <div className="bg-accent w-12 h-12 rounded-b-3xl flex justify-center items-center">
            <img src={right_arrow} alt="right_arrow icon" className="w-5 h-6" />
          </div>
          <div className="pt-3 w-auto h-24 text-darktext text-lg font-bold">
            2. Share with Customers
          </div>
        </div>
        <div className="h-[120px] bg-white shadow-xl rounded-b-3xl flex flex-col px-6">
          <div className="bg-accent w-12 h-12 rounded-b-3xl flex justify-center items-center">
            <img src={doller} alt="doller icon" className="w-5 h-6" />
          </div>
          <div className="pt-3 w-auto h-24 text-darktext text-lg font-bold">
            3. Get Paid
          </div>
        </div>
      </div>

      {/* sign up devider */}
      <div className="bg-[url(./assets/dollerpic.png)] w-full h-full bg-cover bg-no-repeat backdrop-opacity-10">
        <div className="w-full bg-black bg-opacity-75 flex justify-around items-center p-10">
          <h1 className="text-white sm:text-3xl  font-bold">
            Over 30,000+ businesses using Paysilo
          </h1>
          <h2 className="p-5 bg-accent rounded-t-sm rounded-b-3xl text-white text-xs sm:text-base font-bold text-center py-3 hover:bg-primary">
            Sign Up Now
          </h2>
        </div>
      </div>

      {/*  Start, Manage and Grow your Business */}
      <div className="my-16 px-2 flex flex-col items-center">
        <div className="text-darktext flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl font-bold my-2">
            Start, Manage and Grow your Business
          </h1>
          <p className="text-sm font-sm w-4/5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus.
          </p>
        </div>

        <div className="flex justify-around py-20 gap-8">
          <div className="space-y-8 sm:h-auto flex flex-col items-center justify-evenly">
            <div className="text-right flex flex-col items-end gap-2">
              <img src={carancy} alt="carancy icon" className="w-auto h-auto" />
              <h1 className="text-lg font-semibold">Payment</h1>
              <p className="text-sm w-32 sm:w-48">
                Suspendisse nec lorem non porta iaculis odio dictum quis ac
                lorem.
              </p>
            </div>
            <div className="text-right flex flex-col items-end gap-2">
              <img src={growth} alt="growth icon" className="w-auto h-auto" />
              <h1 className="text-lg font-semibold">Growth</h1>
              <p className="text-sm w-32 sm:w-48">
                Suspendisse nec lorem non porta iaculis odio dictum quis ac
                lorem.
              </p>
            </div>
            <div className="text-right flex flex-col items-end gap-2">
              <img
                src={business}
                alt="business icon"
                className="w-auto h-auto"
              />
              <h1 className="text-lg font-semibold">Business</h1>
              <p className="text-sm w-32 sm:w-48">
                Suspendisse nec lorem non porta iaculis odio dictum quis ac
                lorem.
              </p>
            </div>
          </div>

          <img
            src={bank}
            alt="bank mobile icon"
            className="w-36 sm:w-auto h-auto"
          />

          <div className="space-y-8 sm:h-auto flex flex-col items-center justify-evenly">
            <div className="text-left flex flex-col items-start gap-2">
              <img
                src={manage_accounting}
                alt="manage_accounting icon"
                className="w-auto h-auto"
              />
              <h1 className="text-lg font-semibold">Manage Accounting</h1>
              <p className="text-sm w-32 sm:w-48">
                Suspendisse nec lorem non porta iaculis odio dictum quis ac
                lorem.
              </p>
            </div>
            <div className="text-left flex flex-col items-start gap-2">
              <img
                src={resolve_disputes}
                alt="resolve_disputes icon"
                className="w-auto h-auto"
              />
              <h1 className="text-lg font-semibold">Resolve Disputes</h1>
              <p className="text-sm w-32 sm:w-48">
                Suspendisse nec lorem non porta iaculis odio dictum quis ac
                lorem.
              </p>
            </div>
            <div className="text-left flex flex-col items-start gap-2">
              <img
                src={global_support}
                alt="global_support icon"
                className="w-auto h-auto"
              />
              <h1 className="text-lg font-semibold">Global Support</h1>
              <p className="text-sm w-32 sm:w-48">
                Suspendisse nec lorem non porta iaculis odio dictum quis ac
                lorem.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center px-auto my-16 gap-2 sm:gap-32 sm:px-20">
          <img src={progress} alt="progress icon" />
          <div className="sm:w-96 space-y-5">
            <h1 className="text-xl font-bold text-start">
              We even give you more solutions to grow your business.
            </h1>
            <p className="text-sm font-light text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus.
            </p>
          </div>
        </div>

        <div className="flex items-center px-auto my-16 gap-2 sm:gap-32 sm:px-20">
          <div className="sm:w-96 space-y-5">
            <h1 className="text-xl font-bold text-end">
              Business growth & insights with powerfull dashboards.
            </h1>
            <p className="text-sm font-light text-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Far far away,
              behind the word mountains, far from the countries Vokalia Mauris
              feugiat erat tellus.
            </p>
          </div>
          <img src={data} alt="data icon" />
        </div>
      </div>
    </div>
  );
};

export default Features;

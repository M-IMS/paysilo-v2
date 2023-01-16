import React from "react";

const Price = () => {
  return (
    <div className="bg-accent body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
            Paysilo Pricing
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-sm font-extralight text-white">
            No Setup Fee. No Maintenance Charges. No Minimum Commitment.
          </p>

          {/* Monthly & Annually Selection button */}
          {/* <div class="flex mx-auto border-2 border-red-500 rounded overflow-hidden mt-6">
            <button class="py-1 px-4 bg-red-500 text-white focus:outline-none">
              Monthly
            </button>
            <button class="py-1 px-4 text-gray-300 focus:outline-none">
              Annually
            </button>
          </div> */}
        </div>

        <div class="flex flex-wrap justify-center items-center -m-4">
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div class="h-full p-6 bg-white rounded-lg flex flex-col relative overflow-hidden">
              <h2 class="text-lg tracking-widest text-primary font-medium">
                NEFT / RTGS / Bank Transfer
              </h2>
              <p className="text-xs my-2">Perfect for small business</p>
              <h1 class="text-xl pb-4 my-4 border-b border-gray-800 leading-none">
                <span className="text-5xl font-bold">$0</span> / For All
                Transactions
              </h1>
              <p class="flex items-center text-gray-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Free Setup Fee
              </p>
              <p class="flex items-center text-gray-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Free Annual Maintenance
              </p>
              <p class="flex items-center text-gray-400 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                No Minimum Commitment
              </p>
              <button class="flex items-center mt-auto text-white bg-primary border-0 py-2 px-4 w-full focus:outline-none hover:bg-accent rounded">
                Get Started
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div class="h-full p-6 bg-white rounded-lg flex flex-col relative overflow-hidden">
              <span class="w-full text-center bg-clr3 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                All In One Solutions
              </span>
              <h2 class="mb-2 mt-5 text-lg tracking-widest text-primary font-medium">
                Debit Cards / Credit Cards / Netbanking / Wallets / UPI
              </h2>
              <p className="text-xs mb-4">Perfect for large enterprise</p>
              <h1 class="text-5xl leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                <span>$0.3 + 2%</span>
                <span class="text-lg ml-1 font-normal text-gray-400">
                  /Per Transaction
                </span>
              </h1>
              <p class="flex items-center text-gray-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Free Setup Fee
              </p>
              <p class="flex items-center text-gray-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Free Annual Maintenance
              </p>
              <p class="flex items-center text-gray-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                No Minimum Commitment
              </p>
              <p class="flex items-center text-gray-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Fraud Protection
              </p>
              <p class="flex items-center text-gray-400 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Digital File Hosting & Download
              </p>
              <p class="flex items-center text-gray-400 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Integration with SMS, WhatsApp & Social Media
              </p>
              <button class="flex items-center mt-auto text-white bg-primary border-0 py-2 px-4 w-full focus:outline-none hover:bg-accent rounded">
                Get Started
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;

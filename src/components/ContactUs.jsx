import React from "react";

const ContactUs = () => {
  return (
    <div class="relative py-10">
      <h1 className="text-3xl font-bold text-center my-5">Contact Us</h1>
      <p className="text-xs font-extralight text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat
        libero, bibendum in libero tempor, luctus volutpat ligula. Integer
        fringilla porttitor pretium.
      </p>
      <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div class="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0 contrast-125 opacity-80"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <div class="bg-background opacity-90 relative flex flex-wrap py-6 rounded shadow-md">
            <div class="lg:w-1/2 px-6">
              <h2 class="title-font font-semibold text-primary tracking-widest text-xs">
                ADDRESS
              </h2>
              <p class="mt-1">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 class="title-font font-semibold text-primary tracking-widest text-xs">
                EMAIL
              </h2>
              <a class="text-indigo-400 leading-relaxed" href="/">
                example@email.com
              </a>
              <h2 class="title-font font-semibold text-primary tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p class="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>

        {/* From Section */}
        <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 class="text-black text-2xl mb-2 font-medium title-font">
            Drop us message.
          </h2>

          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button class="text-white bg-accent border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg">
            Sand Massage
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

import React from "react";

import googleplay from "../assets/googleplay.png";
import appstore from "../assets/appstore.png";
import logowhite from "../assets/logo-white.png";

const Footer = () => {
  return (
    <div className="bg-accent items-center p-5">
      <div className="grid grid-cols-3 gap-10 justify-items-center p-5">
        <div>
          <h1 className="text-lg font-semibold text-clr3 mb-2">Products</h1>
          <div className="text-sm font-normal text-white cursor-pointer leading-6">
            <p>Payment Gateway</p>
            <p>Smart Links</p>
            <p>Online Store</p>
            <p>Payment Links</p>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold text-clr3 mb-2">Resources</h1>
          <div className="text-sm font-normal text-white cursor-pointer leading-6">
            <p>Blog</p>
            <p>Success Stories</p>
            <p>eBooks</p>
            <p>Fee Calculator</p>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold text-clr3 mb-2">Developers</h1>
          <div className="text-sm font-normal text-white cursor-pointer leading-6">
            <p>API & Plugins</p>
            <p>System Status</p>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold text-clr3 mb-2">Company</h1>
          <div className="text-sm font-normal text-white cursor-pointer leading-6">
            <p>About Us</p>
            <p>Meet the Team</p>
            <p>Careers</p>
            <p>In the Press</p>
            <p>Privacy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold text-clr3 mb-2">Features</h1>
          <div className="text-sm font-normal text-white cursor-pointer leading-6">
            <p>NEFT</p>
            <p>Convenience Fee</p>
            <p>App Store</p>
            <p>Webhooks</p>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold text-clr3 mb-2">OTHER LINKS</h1>
          <div className="text-sm font-normal text-white cursor-pointer leading-6">
            <p>Become a Partner</p>
            <p>Pricing</p>
            <p>Affiliate</p>
          </div>
        </div>
      </div>
      <img src={logowhite} alt="" />
      {/* <div>
        <div>
          <img src={googleplay} alt="" />
          <img src={appstore} alt="" />
        </div>
        <div>
          <img src={logowhite} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus.
          </p>
          <img alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default Footer;

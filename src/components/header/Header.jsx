import React from "react";
import Logo from "../../assets/images/logo.png";

function Header() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-black to-transparent via-transparent">
      <div className="relative container mx-auto py-4 ">
        <div className="w-full h-[103.75px] flex justify-between items-center px-6 ">
          <div className="w-[111px] h-[103.75px] bg-contain bg-no-repeat">
            <img src={Logo} alt="logo" />
          </div>

          <div className="flex justify-center">
            <div className="w-full flex justify-center space-x-6 py-2">
              <a
                href="#home"
                className="font-inter text-custom font-semibold leading-custom text-[#FD1640]"
              >
                Home
              </a>
              <a
                href="#about"
                className="font-inter text-custom font-semibold leading-custom text-white"
              >
                About
              </a>
              <a
                href="#artist"
                className="font-inter text-custom font-semibold leading-custom text-white"
              >
                Artist
              </a>
              <a
                href="#roadmap"
                className="font-inter text-custom font-semibold leading-custom text-white"
              >
               Staking
              </a>
              <a
                href="#team"
                className="font-inter text-custom font-semibold leading-custom text-white"
              >
                Roadmap
              </a>
              <a
                href="#marketplace"
                className="font-inter text-custom font-semibold leading-custom text-white"
              >
                Team
              </a>
              <a
                href="#staking"
                className="font-inter text-custom font-semibold leading-custom text-white"
              >
                Vesting
              </a>
              <a
                href="#vesting"
                className="font-inter text-custom font-semibold leading-custom text-white"
              >
                 Marketplace
              </a>
            </div>
            <button className="w-52 bg-gradient-to-r from-[#ED213A] to-[#FD1640] text-white text-[20px] leading-[24px] rounded-lg">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

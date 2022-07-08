// @author Manas

import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";

// Importing Assets
import HeaderLogo from "../../assets/logoGreenbuilt.png";
import FooterLogo from "../../assets/greenbuiltpurple.png";
import MobileScreen from "../../assets/mobile.png";
import Coupon from "../../assets/price.png";
import Offers from "../../assets/OFF.png";
import Reward from "../../assets/REWARD.png";
import Blueprint from "../../assets/bp2.png";
import axios from "../../appConfig/httpHelper";
import { useSelector } from "react-redux";

export const Home = () => {
  const [actions, setActions] = useReducer(
    (state, diff) => ({ ...state, ...diff }),
    {
      data: {},
    }
  );
  const { data } = actions;

  const requestsCaller = () => {
    axios
      .get(`/plugin/get/60`, {})
      .then((res) => {
        console.log(res.data)
        setActions({
          data: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    requestsCaller();
  }, []);

  return (
    <div className="font-montserrat">
      <div className="bg-heroBg bg-no-repeat bg-cover bg-center">
        <div className="min-h-screen bg-gradient-to-br from-dark to-transparent">
          {/* Header */}
          <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
              <div>
                <img src={HeaderLogo} alt="" className="w-5/12" />
              </div>
              <div>
                <Link to="/login">
                  <button class="inline-flex items-center bg-transparent border-2 py-1 px-3 focus:outline-none hover:bg-greenMain hover:border-greenMain rounded text-base mt-4 md:mt-0 text-white hover:text-dark duration-500">
                    LogIn
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </header>

          {/* Hero Section */}

          <div className="flex flex-row items-center justify-around container mx-auto">
            <div className="mt-12 sm:mt-32 md:mt-56 flex-1 ml-4 md:ml-20">
              <h1 className="text-6xl font-light text-white leading-snug">
                Let's Save the <br />
                <span className="font-semibold text-transparent bg-clip-text bg-secondary">
                  Planet Together
                </span>
              </h1>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>

      {/* Section 2 */}

      <div className="py-24 px-4 lg:px-12 container mx-auto">
        <h1 className="text-5xl md:text-6xl text-center leading-normal text-dark">
          Greener, Cleaner
          <br />
          <span className="font-semibold">Future Awaits</span>
        </h1>
        <div className="pt-20 flex flex-col md:flex-row justify-between items-center">
          <div className="border-4 border-green-1 w-10/12 md:w-1/2 pb-10 rounded-lg">
            <div className="bg-section2 bg-no-repeat bg-cover bg-center w-full h-96 -mt-8 -ml-8 rounded-lg"></div>
          </div>
          <div className="md:w-1/2">
            <p className="text-xl md:text-2xl pt-10 md:p-8">
              Climate change is the greatest long term threat of our time, but
              we together can stop it from threatening the existence of the
              Human race. At GreenBuilt we try and find Innovative solutions to
              the problems of tomorrow and solving them today. We understand
              that all of us together can bring about a positive change to fight
              against this global threat.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}

      <div className="bg-dark">
        <div className="py-24 px-4 lg:px-12 container mx-auto">
          <img src={HeaderLogo} className="w-72 mx-auto mb-8"/>
          <h1 className="text-5xl md:text-6xl text-center leading-normal text-white font-light">
            Impact We Have Created so Far
          </h1>
          <p className="text-xl text-center leading-normal text-white font-light md:w-1/3 mx-auto py-4">
            We show our love and affection when you support a green energy
            powered industry.
          </p>
          <div className="pt-8 flex flex-col md:flex-row justify-evenly items-center">
            <div className="bg-white p-4 rounded-lg w-10/12 md:w-1/4 m-4">
              <h2 className="text-2xl font-medium text-center">
                Total Green Energy Consumed
              </h2>
              <h2 className="text-5xl font-bold text-center">
                {data.data?.greenEnergyUsed}
              </h2>
            </div>
            <div className="bg-white p-4 rounded-lg w-10/12 md:w-1/4 m-4">
            <h2 className="text-2xl font-medium text-center">
                Total Co2 Offset
              </h2>
              <h2 className="text-5xl font-bold text-center">
                {data.data?.co2Offset}
              </h2>
            </div>
            <div className="bg-white p-4 rounded-lg w-10/12 md:w-1/4 m-4">
            <h2 className="text-2xl font-medium text-center">
                Total Water Saved
              </h2>
              <h2 className="text-5xl font-bold text-center">
                {data.data?.waterSaved}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}

      <div className="py-24 px-4 lg:px-12 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/3">
            <p className="text-xl text-green-1 font-bold">We know our duty</p>
            <p className="text-xl md:text-2xl text-dark pr-12">
              We want to contribute to the the betterment of the planet. Helping
              in making this planet a better place to live.
            </p>
          </div>
          <div className="w-10/12 md:w-2/3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-left text-dark">
              <span className="leading-relaxed">
                Save the Planet By Buying Products Manufactured using Green
                Energy and{" "}
                <span className="font-semibold">
                  Get Rewarded for Each Purchase
                </span>
                .
              </span>
            </h1>
            <Link
              to="/signup"
              class="inline-flex items-center bg-transparent border-2 border-dark py-1 px-3 focus:outline-none hover:bg-green-1 hover:border-green-1 rounded text-base mt-8 text-dark hover:text-dark duration-500"
            >
              SignUp
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Section 6 */}

      <div className="lg:pl-12 container bg-dark">
        <div className="pt-20 flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-6xl text-left leading-normal text-white font-light pb-8">
              How it
              <span className="font-semibold text-green-1"> Works</span>
            </h1>
            <p className="text-white font-xl pb-4">1. Buy a Green Product.</p>
            <p className="text-white font-xl pb-4">
              2. Scan the QR code on it.
            </p>
            <p className="text-white font-xl pb-4">3. Earn the Points.</p>
            <p className="text-white font-xl pb-4">
              4. Redeem the Points on future offers.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={Blueprint} alt="" className="" />
          </div>
        </div>
      </div>

      {/* Section 7 */}

      <div className="py-24 px-4 lg:px-12 bg-white">
        <div className="bg-white mx-auto container">
          <h1 className="text-7xl sm:text-9xl font-semibold text-left leading-normal text-green-1 w-2/3 opacity-50">
            Clean and Green is the New Cool.
          </h1>
        </div>
      </div>

      {/* Section 8 */}

      <div className="py-24 px-4 lg:px-12 bg-dark">
        <div className="pt-8 container mx-auto flex flex-col-reverse md:flex-row items-center justify-evenly">
          <div className="">
            <img src={MobileScreen} alt="" className="w-56 h-96" />
          </div>
          <div className="">
            <h1 className="text-6xl text-left leading-normal text-white">
              Hop on <br />
              <span className="text-green-1 font-semibold">board!</span>
            </h1>
            <Link
              to="signup"
              class="inline-flex items-center bg-transparent border-2 py-1 px-3 focus:outline-none hover:bg-green-1 hover:border-green-1 rounded text-base mt-8 text-white hover:text-dark duration-500"
            >
              SignUp
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>

            <p className="mt-8 text-white font-semibold">
              Download the Mobile App
            </p>
            <div className="flex flex-row items-center justify-between">
              <button class="inline-flex items-center bg-transparent border-2 py-1 px-3 focus:outline-none hover:bg-green-1 hover:border-green-1 rounded text-base mt-8 text-white hover:text-dark duration-500">
                iOS
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <button class="inline-flex items-center bg-transparent border-2 py-1 px-3 focus:outline-none hover:bg-green-1 hover:border-green-1 rounded text-base mt-8 text-white hover:text-dark duration-500">
                Android
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

      <footer className="pt-16 px-12">
        <div className="container mx-auto border-b-2 border-dark pb-8">
          <div className="flex items-start justify-evenly">
            <div>
              <nav className="flex flex-col">
                <a>Careers</a>
                <a>About</a>
                <a>Investors</a>
              </nav>
            </div>
            <div>
              <img src={FooterLogo} alt="" className="w-24 h-24" />
            </div>
            <div>
              <nav className="flex flex-col">
                <a>Careers</a>
                <a>About</a>
                <a>Investors</a>
              </nav>
            </div>
          </div>
        </div>
        <p className="text-center text-sm py-3">
          © 2022 GreenBuilt - All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

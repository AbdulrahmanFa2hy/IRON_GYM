import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BMICalculatorSection = ({ calculatorImg }) => {
  return (
    <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#0F0F17] to-[#320D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 ">
              CALCULATE
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#DC2626] mb-4 sm:mb-6 ">
              YOUR BMI
            </h1>
            <p className="text-sm sm:text-base text-[#9CA3AF] mb-6 sm:mb-8 ">
              Take the first step toward better health by calculating your Body
              Mass Index (BMI). This simple measurement helps evaluate your body
              composition and overall health risk factors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 ">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  className="w-full p-2 rounded-md bg-[#1F2937] text-white border border-[#4B5563]"
                  placeholder="175"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  className="w-full p-2 rounded-md bg-[#1F2937] text-white border border-[#4B5563]"
                  placeholder="70"
                />
              </div>
            </div>

            <Link
              to="/calculator"
              className="bg-[#DC2626] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md  font-bold hover:bg-[#B91C1C] transition duration-300 inline-flex items-center"
            >
              <span className="mr-2">Calculate Now</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

          <div className="hidden md:block">
            <img
              src={calculatorImg}
              alt="Fitness Model"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

BMICalculatorSection.propTypes = {
  calculatorImg: PropTypes.string.isRequired,
};

export default BMICalculatorSection;

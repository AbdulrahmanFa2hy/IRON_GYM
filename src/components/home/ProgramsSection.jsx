import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProgramsSection = ({ muscleImg, yogaImg, weightliftingImg }) => {
  return (
    <div id="programs" className="py-12 sm:py-16 md:py-20 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-1 ">
            OUR PROGRAM
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#DC2626] mb-4 sm:mb-8 ">
            BUILD YOUR BEST BODY
          </h1>
          <p className="text-base sm:text-lg text-[#9CA3AF] max-w-3xl mx-auto ">
            Looking to start a new routine at the gym? Try our specially
            designed workouts led by expert trainers to build strength and
            confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Program 1 */}
          <div className="bg-[#1F2937] rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 shadow-xl">
            <div className="h-48 overflow-hidden">
              <img
                src={muscleImg}
                alt="Flex Muscle"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#DC2626] mb-2 ">
                FLEX MUSCLE
              </h3>
              <p className="text-sm sm:text-base text-[#9CA3AF] mb-4 sm:mb-6 ">
                Create a foundation of strength with our dynamic training
                program focused on building muscle and functional strength.
              </p>
              <Link
                to=""
                className="flex items-center text-white hover:text-[#DC2626] transition duration-300 "
              >
                <span className="mr-2 text-sm sm:text-base">LEARN MORE</span>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Program 2 */}
          <div className="bg-[#1F2937] rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 shadow-xl">
            <div className="h-48 overflow-hidden">
              <img
                src={yogaImg}
                alt="Basic Yoga"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#DC2626] mb-2 ">
                BASIC YOGA
              </h3>
              <p className="text-sm sm:text-base text-[#9CA3AF] mb-4 sm:mb-6 ">
                Improve flexibility, balance and mental clarity with our
                foundational yoga classes suitable for all experience levels.
              </p>
              <Link
                to=""
                className="flex items-center text-white hover:text-[#DC2626] transition duration-300 "
              >
                <span className="mr-2 text-sm sm:text-base">LEARN MORE</span>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Program 3 */}
          <div className="bg-[#1F2937] rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 shadow-xl sm:col-span-2 md:col-span-1">
            <div className="h-48 overflow-hidden">
              <img
                src={weightliftingImg}
                alt="Weightlifting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#DC2626] mb-2 ">
                WEIGHTLIFTING
              </h3>
              <p className="text-sm sm:text-base text-[#9CA3AF] mb-4 sm:mb-6 ">
                Master the fundamentals of weightlifting with proper form and
                technique to build strength and power safely.
              </p>
              <Link
                to=""
                className="flex items-center text-white hover:text-[#DC2626] transition duration-300 "
              >
                <span className="mr-2 text-sm sm:text-base">LEARN MORE</span>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProgramsSection.propTypes = {
  muscleImg: PropTypes.string.isRequired,
  yogaImg: PropTypes.string.isRequired,
  weightliftingImg: PropTypes.string.isRequired,
};

export default ProgramsSection;

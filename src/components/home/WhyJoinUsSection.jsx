import PropTypes from "prop-types";

const WhyJoinUsSection = ({ trainerImg }) => {
  return (
    <div className="py-12 sm:py-16 md:py-20 bg-[#0F1420]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="relative order-2 md:order-1">
            <img
              src={trainerImg}
              alt="Professional Trainer"
              className="rounded-lg object-cover w-full h-64 md:h-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 ">
              WHY <span className="text-[#DC2626]">JOIN US?</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-[#DC2626] mb-6 sm:mb-8"></div>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#DC2626] mb-2 ">
                  PROFESSIONAL TRAINER
                </h3>
                <p className="text-sm sm:text-base text-[#9CA3AF] ">
                  Our certified personal trainers create customized workout
                  plans tailored to your specific goals, ensuring you maximize
                  every session.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#DC2626] mb-2 ">
                  GOOD MANAGEMENT
                </h3>
                <p className="text-sm sm:text-base text-[#9CA3AF] ">
                  Our dedicated staff ensures all equipment is well-maintained,
                  facilities are clean, and your experience is seamless from
                  check-in to check-out.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#DC2626] mb-2 ">
                  PRACTICE VIDEOS
                </h3>
                <p className="text-sm sm:text-base text-[#9CA3AF] ">
                  Access our extensive library of instructional videos to
                  perfect your form and technique even when you're not at the
                  gym.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WhyJoinUsSection.propTypes = {
  trainerImg: PropTypes.string.isRequired,
};

export default WhyJoinUsSection;

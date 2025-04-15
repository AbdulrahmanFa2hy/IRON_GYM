import PropTypes from "prop-types";

const TestimonialSection = ({ testimonialAvatar, testimonialImg }) => {
  return (
    <div className="py-12 sm:py-16 md:py-20 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 ">
            TESTIMONIAL
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#DC2626] mb-4 sm:mb-8 ">
            CLIENT FEEDBACK
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="bg-[#1F2937] p-4 sm:p-6 md:p-8 rounded-lg relative shadow-xl">
              <div className="absolute -right-2 sm:-right-4 top-1/4 text-[#DC2626] text-6xl sm:text-9xl opacity-30 transform -translate-y-1/2 ">
                "
              </div>
              <p className="text-[#9CA3AF] text-sm sm:text-base md:text-lg mb-4 sm:mb-6 relative z-10 ">
                "IRONGYM has completely changed my life. The trainers are
                exceptional, providing personalized attention that helped me
                achieve results I never thought possible. In just six months,
                I've transformed both physically and mentally."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden mr-3 sm:mr-4">
                  <img
                    src={testimonialAvatar}
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white text-base sm:text-lg md:text-xl font-medium ">
                    ALEX MORGAN
                  </h4>
                  <p className="text-[#DC2626] text-sm ">Premium Member</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src={testimonialImg}
              alt="Happy Client"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialSection.propTypes = {
  testimonialAvatar: PropTypes.string.isRequired,
  testimonialImg: PropTypes.string.isRequired,
};

export default TestimonialSection;

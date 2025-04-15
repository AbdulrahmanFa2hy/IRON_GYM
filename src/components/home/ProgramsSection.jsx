import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import bulkingImg from "../../assets/bulking.jpg";
import cardioImg from "../../assets/cardio.jpg";
import cuttingImg from "../../assets/gym-img-4.jpg";

const ProgramsSection = () => {
  const { t } = useTranslation();

  return (
    <div id="programs" className="py-12 sm:py-16 md:py-20 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-1">
            {t("programs.title")}
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#DC2626] mb-4 sm:mb-8">
            {t("programs.subtitle")}
          </h1>
          <p className="text-base sm:text-lg text-[#9CA3AF] max-w-3xl mx-auto">
            {t("programs.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Program 1 - Cutting */}
          <div className="bg-[#1F2937] rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 shadow-xl">
            <div className="h-48 overflow-hidden">
              <img
                src={cuttingImg}
                alt="Cutting Program"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#DC2626] mb-2">
                {t("programs.cutting.title")}
              </h3>
              <p className="text-sm sm:text-base text-[#9CA3AF] mb-4 sm:mb-6">
                {t("programs.cutting.description")}
              </p>
              <Link
                to=""
                className="flex items-center text-white hover:text-[#DC2626] transition duration-300"
              >
                <span className="mr-2 text-sm sm:text-base">
                  {t("programs.cutting.learnMore")}
                </span>
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

          {/* Program 2 - Bulking */}
          <div className="bg-[#1F2937] rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 shadow-xl">
            <div className="h-48 overflow-hidden">
              <img
                src={bulkingImg}
                alt="Bulking Program"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#DC2626] mb-2">
                {t("programs.bulking.title")}
              </h3>
              <p className="text-sm sm:text-base text-[#9CA3AF] mb-4 sm:mb-6">
                {t("programs.bulking.description")}
              </p>
              <Link
                to=""
                className="flex items-center text-white hover:text-[#DC2626] transition duration-300"
              >
                <span className="mr-2 text-sm sm:text-base">
                  {t("programs.bulking.learnMore")}
                </span>
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

          {/* Program 3 - Cardio */}
          <div className="bg-[#1F2937] rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 shadow-xl sm:col-span-2 md:col-span-1">
            <div className="h-48 overflow-hidden">
              <img
                src={cardioImg}
                alt="Cardio Program"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#DC2626] mb-2">
                {t("programs.cardio.title")}
              </h3>
              <p className="text-sm sm:text-base text-[#9CA3AF] mb-4 sm:mb-6">
                {t("programs.cardio.description")}
              </p>
              <Link
                to=""
                className="flex items-center text-white hover:text-[#DC2626] transition duration-300"
              >
                <span className="mr-2 text-sm sm:text-base">
                  {t("programs.cardio.learnMore")}
                </span>
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

export default ProgramsSection;

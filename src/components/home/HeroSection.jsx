import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const HeroSection = ({ heroImg, scrollY, isVisible }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image with animated gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center sm:bg-top bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${heroImg})`,
          transform: `scale(${1 + scrollY * 0.0005})`,
        }}
      />

      {/* Animated gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${
          isRTL
            ? "from-[#320D0D]/75 via-[#111827]/85 to-[#0F0F17]/95"
            : "from-[#0F0F17]/95 via-[#111827]/85 to-[#320D0D]/75"
        } z-10`}
      />

      {/* Content container */}
      <div className="relative z-20 h-screen pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div
            className={`max-w-3xl ${
              isRTL ? "text-right" : "text-left"
            } transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div
              className={`inline-block mb-3 bg-gradient-to-r ${
                isRTL
                  ? "from-[#B91C1C] to-[#DC2626]"
                  : "from-[#DC2626] to-[#B91C1C]"
              } p-1 rounded-md`}
            >
              <h3 className="text-white text-xs sm:text-sm md:text-md font-semibold uppercase tracking-widest px-3 py-1">
                {t("hero.badge")}
              </h3>
            </div>

            <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              {t("hero.title")}
              <br />
              <span
                className={`text-gradient bg-gradient-to-r ${
                  isRTL
                    ? "from-[#FF4500] to-[#DC2626]"
                    : "from-[#DC2626] to-[#FF4500]"
                }`}
              >
                {isRTL ? "في آيرون جيم" : "AT IRON GYM"}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#D1D5DB] mb-8 max-w-2xl">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to=""
                className={`bg-gradient-to-r ${
                  isRTL
                    ? "from-[#B91C1C] to-[#DC2626]"
                    : "from-[#DC2626] to-[#B91C1C]"
                } text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold transition duration-300 text-center flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-[#DC2626]/20 transform hover:translate-y-[-2px]`}
              >
                <span>{t("hero.joinButton")}</span>
                <svg
                  className={`w-5 h-5 ${
                    isRTL ? "mr-2 rotate-180" : "ml-2"
                  } transform transition-transform duration-300 ${
                    isRTL
                      ? "group-hover:-translate-x-1"
                      : "group-hover:translate-x-1"
                  }`}
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

              <Link
                to=""
                className="flex items-center justify-center text-white group gap-2"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#DC2626] flex items-center justify-center ${
                    isRTL ? "ml-2" : "mr-2"
                  } group-hover:bg-[#DC2626]/20 transition-all duration-300`}
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[#DC2626] group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm sm:text-base group-hover:text-[#DC2626] transition-colors duration-300">
                  {t("hero.watchButton")}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  heroImg: PropTypes.string.isRequired,
  scrollY: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default HeroSection;

import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { FaUserTie, FaUsersCog, FaClock } from "react-icons/fa";
import { GiStrong, GiStrongMan } from "react-icons/gi";

const WhyJoinUsSection = ({ trainerImg }) => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <GiStrongMan className="w-8 h-8 text-primary" />,
      title: t("whyJoinUs.professionalTrainer.title"),
      description: t("whyJoinUs.professionalTrainer.description"),
    },
    {
      icon: <FaUsersCog className="w-6 h-6 text-primary" />,
      title: t("whyJoinUs.goodManagement.title"),
      description: t("whyJoinUs.goodManagement.description"),
    },
    {
      icon: <FaClock className="w-6 h-6 text-primary" />,
      title: t("whyJoinUs.open247.title"),
      description: t("whyJoinUs.open247.description"),
    },
  ];

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
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2">
              {t("whyJoinUs.title")}{" "}
              <span className="text-[#DC2626]">{t("whyJoinUs.joinUs")}</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-[#DC2626] mb-6 sm:mb-8"></div>

            <div className="space-y-6 sm:space-y-8">
              {features.map((feature, index) => (
                <div key={index}>
                  <h3 className="text-lg sm:text-xl font-bold text-[#DC2626] mb-2 flex gap-2 items-center">
                    {feature.title}
                    {feature.icon}
                  </h3>
                  <p className="text-sm sm:text-base text-[#9CA3AF]">
                    {feature.description}
                  </p>
                </div>
              ))}
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

import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import InputField from "../common/InputField";

const BMICalculatorSection = ({ calculatorImg }) => {
  const { t } = useTranslation();
  const [bmiHeight, setBmiHeight] = useState("");
  const [bmiWeight, setBmiWeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!bmiHeight || !bmiWeight) return;

    const heightInMeters = bmiHeight / 100;
    const bmi = (bmiWeight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmiResult(bmi);

    // BMI Categories
    if (bmi < 18.5) {
      setBmiCategory("underweight");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setBmiCategory("normal");
    } else if (bmi >= 25 && bmi < 29.9) {
      setBmiCategory("overweight");
    } else {
      setBmiCategory("obesity");
    }
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 pb-4 bg-gradient-to-r from-[#0F0F17] to-[#320D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              {t("bmiCalculator.title")}
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#DC2626] mb-4 sm:mb-6">
              {t("bmiCalculator.subtitle")}
            </h1>
            <p className="text-sm sm:text-base text-[#9CA3AF] mb-6 sm:mb-8">
              {t("bmiCalculator.description")}
            </p>

            <form onSubmit={calculateBMI} className="space-y-4 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <InputField
                  label={t("bmiCalculator.height")}
                  placeholder="175"
                  value={bmiHeight}
                  onChange={(e) => setBmiHeight(e.target.value)}
                  className="bg-[#1F2937] text-white border border-[#4B5563]"
                />
                <InputField
                  label={t("bmiCalculator.weight")}
                  placeholder="70"
                  value={bmiWeight}
                  onChange={(e) => setBmiWeight(e.target.value)}
                  className="bg-[#1F2937] text-white border border-[#4B5563]"
                />
              </div>
              <button
                type="submit"
                className="w-2/5 bg-[#DC2626] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-[#B91C1C] transition duration-300 font-bold"
              >
                {t("bmiCalculator.calculateButton")}
              </button>
            </form>

            <div
              className={`${
                bmiResult ? "opacity-100" : "opacity-0"
              } mt-6 p-4 bg-[#1F2937] rounded-md`}
            >
              <p className="text-white text-center">
                {t("calculator.bmi.result")}{" "}
                <span className="font-bold text-xl">{bmiResult}</span>
              </p>
              <p className="text-[#9CA3AF] text-center mt-1">
                {t("calculator.bmi.category")}{" "}
                {t(`calculator.bmi.categories.${bmiCategory}`)}
              </p>
            </div>
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

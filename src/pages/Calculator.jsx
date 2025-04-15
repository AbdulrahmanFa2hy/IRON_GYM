import { useState } from "react";
import { useTranslation } from "react-i18next";
import InputField from "../components/common/InputField";

const Calculator = () => {
  const { t } = useTranslation();
  // BMI Calculator State
  const [bmiHeight, setBmiHeight] = useState("");
  const [bmiWeight, setBmiWeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");

  // TDEE Calculator State
  const [tdeeWeight, setTdeeWeight] = useState("");
  const [tdeeHeight, setTdeeHeight] = useState("");
  const [tdeeAge, setTdeeAge] = useState("");
  const [tdeeGender, setTdeeGender] = useState("male");
  const [tdeeActivity, setTdeeActivity] = useState("sedentary");
  const [tdeeResult, setTdeeResult] = useState(null);

  // One-Rep Max Calculator State
  const [ormWeight, setOrmWeight] = useState("");
  const [ormReps, setOrmReps] = useState("");
  const [ormResult, setOrmResult] = useState(null);

  // BMI Calculation
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

  // TDEE Calculation
  const calculateTDEE = (e) => {
    e.preventDefault();

    if (!tdeeWeight || !tdeeHeight || !tdeeAge) return;

    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr;
    if (tdeeGender === "male") {
      bmr = 10 * tdeeWeight + 6.25 * tdeeHeight - 5 * tdeeAge + 5;
    } else {
      bmr = 10 * tdeeWeight + 6.25 * tdeeHeight - 5 * tdeeAge - 161;
    }

    // Activity Multiplier
    let activityMultiplier;
    switch (tdeeActivity) {
      case "sedentary":
        activityMultiplier = 1.2;
        break;
      case "light":
        activityMultiplier = 1.375;
        break;
      case "moderate":
        activityMultiplier = 1.55;
        break;
      case "active":
        activityMultiplier = 1.725;
        break;
      case "very":
        activityMultiplier = 1.9;
        break;
      default:
        activityMultiplier = 1.2;
    }

    const tdee = Math.round(bmr * activityMultiplier);
    setTdeeResult(tdee);
  };

  // One-Rep Max Calculation
  const calculateORM = (e) => {
    e.preventDefault();

    if (!ormWeight || !ormReps) return;

    // Brzycki Formula: 1RM = Weight × (36 / (37 - Reps))
    const orm = Math.round(ormWeight * (36 / (37 - ormReps)));
    setOrmResult(orm);
  };

  return (
    <div className="min-h-screen bg-[#111827] pt-20 pb-12 px-4 sm:px-6 md:px-8 lg:pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
            {t("calculator.title")}{" "}
            <span className="text-[#DC2626]">{t("calculator.subtitle")}</span>
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-[#DC2626] mx-auto mb-4 md:mb-6"></div>
          <p className="text-[#9CA3AF] text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            {t("calculator.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* BMI Calculator */}
          <div className="bg-[#1F2937] rounded-lg p-4 sm:p-6 shadow-xl transition-transform hover:shadow-2xl hover:-translate-y-1 duration-300">
            <h2
              className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center group relative"
              title={t("calculator.tooltips.bmi")}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-[#DC2626]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              {t("calculator.bmi.title")}
            </h2>
            <form onSubmit={calculateBMI}>
              <InputField
                label={t("calculator.bmi.height")}
                placeholder="e.g. 175"
                value={bmiHeight}
                onChange={(e) => setBmiHeight(e.target.value)}
              />
              <InputField
                label={t("calculator.bmi.weight")}
                placeholder="e.g. 70"
                value={bmiWeight}
                onChange={(e) => setBmiWeight(e.target.value)}
                className="mb-6"
              />
              <button
                type="submit"
                className="w-full bg-[#DC2626] text-white py-2 px-4 rounded-md hover:bg-[#B91C1C] transition duration-300 font-bold"
              >
                {t("calculator.bmi.calculateButton")}
              </button>
            </form>

            {bmiResult && (
              <div className="mt-6 p-4 bg-[#111827] rounded-md">
                <p className="text-white text-center">
                  {t("calculator.bmi.result")}{" "}
                  <span className="font-bold text-xl">{bmiResult}</span>
                </p>
                <p className="text-[#9CA3AF] text-center mt-1">
                  {t("calculator.bmi.category")}{" "}
                  {t(`calculator.bmi.categories.${bmiCategory}`)}
                </p>
              </div>
            )}
          </div>

          {/* TDEE Calculator */}
          <div className="bg-[#1F2937] rounded-lg p-4 sm:p-6 shadow-xl transition-transform hover:shadow-2xl hover:-translate-y-1 duration-300">
            <h2
              className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center group relative"
              title={t("calculator.tooltips.tdee")}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-[#DC2626]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              {t("calculator.tdee.title")}
            </h2>
            <form onSubmit={calculateTDEE} className="space-y-3 sm:space-y-4">
              <InputField
                label={t("calculator.tdee.weight")}
                placeholder="e.g. 70"
                value={tdeeWeight}
                onChange={(e) => setTdeeWeight(e.target.value)}
              />
              <InputField
                label={t("calculator.tdee.height")}
                placeholder="e.g. 175"
                value={tdeeHeight}
                onChange={(e) => setTdeeHeight(e.target.value)}
              />
              <InputField
                label={t("calculator.tdee.age")}
                placeholder="e.g. 30"
                value={tdeeAge}
                onChange={(e) => setTdeeAge(e.target.value)}
              />
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  {t("calculator.tdee.gender")}
                </label>
                <select
                  value={tdeeGender}
                  onChange={(e) => setTdeeGender(e.target.value)}
                  className="w-full p-2 rounded-md bg-[#374151] text-white border border-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                >
                  <option value="male">
                    {t("calculator.tdee.genders.male")}
                  </option>
                  <option value="female">
                    {t("calculator.tdee.genders.female")}
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  {t("calculator.tdee.activity")}
                </label>
                <select
                  value={tdeeActivity}
                  onChange={(e) => setTdeeActivity(e.target.value)}
                  className="w-full p-2 rounded-md bg-[#374151] text-white border border-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                >
                  <option value="sedentary">
                    {t("calculator.tdee.activities.sedentary")}
                  </option>
                  <option value="light">
                    {t("calculator.tdee.activities.light")}
                  </option>
                  <option value="moderate">
                    {t("calculator.tdee.activities.moderate")}
                  </option>
                  <option value="active">
                    {t("calculator.tdee.activities.active")}
                  </option>
                  <option value="very">
                    {t("calculator.tdee.activities.very")}
                  </option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#DC2626] text-white py-2 px-4 rounded-md hover:bg-[#B91C1C] transition duration-300 mt-4 sm:mt-6 font-bold"
              >
                {t("calculator.tdee.calculateButton")}
              </button>
            </form>

            {tdeeResult && (
              <div className="mt-6 p-4 bg-[#111827] rounded-md">
                <p className="text-white text-center">
                  {t("calculator.tdee.result")}{" "}
                  <span className="font-bold text-xl">{tdeeResult}</span>{" "}
                  {t("calculator.tdee.calories")}
                </p>
                <p className="text-[#9CA3AF] text-center text-sm mt-1">
                  {t("calculator.tdee.maintenance")}
                </p>
              </div>
            )}
          </div>

          {/* One-Rep Max Calculator */}
          <div className="bg-[#1F2937] rounded-lg p-4 sm:p-6 shadow-xl transition-transform hover:shadow-2xl hover:-translate-y-1 duration-300 sm:col-span-2 lg:col-span-1">
            <h2
              className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center group relative"
              title={t("calculator.tooltips.orm")}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-[#DC2626]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              {t("calculator.orm.title")}
            </h2>
            <form onSubmit={calculateORM}>
              <InputField
                label={t("calculator.orm.weight")}
                placeholder="e.g. 100"
                value={ormWeight}
                onChange={(e) => setOrmWeight(e.target.value)}
              />
              <InputField
                label={t("calculator.orm.reps")}
                placeholder="e.g. 8"
                value={ormReps}
                onChange={(e) => setOrmReps(e.target.value)}
                max={36}
                className="mb-6"
              />
              <button
                type="submit"
                className="w-full bg-[#DC2626] text-white py-2 px-4 rounded-md hover:bg-[#B91C1C] transition duration-300 font-bold"
              >
                {t("calculator.orm.calculateButton")}
              </button>
            </form>

            {ormResult && (
              <div className="mt-6 p-4 bg-[#111827] rounded-md">
                <p className="text-white text-center">
                  {t("calculator.orm.result")}{" "}
                  <span className="font-bold text-xl">{ormResult} kg</span>
                </p>
                <p className="text-[#9CA3AF] text-center text-sm mt-1">
                  {t("calculator.orm.maxWeight")}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Explanation Section */}
        <div className="mt-10 sm:mt-12 lg:mt-16 bg-[#1F2937] rounded-lg p-4 sm:p-6 md:p-8 shadow-xl">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 md:mb-6">
            {t("calculator.explanation.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-[#111827]/50 p-4 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold text-[#DC2626] mb-2">
                {t("calculator.explanation.bmi.title")}
              </h3>
              <p className="text-[#9CA3AF] text-sm sm:text-base">
                {t("calculator.explanation.bmi.description")}
              </p>
            </div>

            <div className="bg-[#111827]/50 p-4 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold text-[#DC2626] mb-2">
                {t("calculator.explanation.tdee.title")}
              </h3>
              <p className="text-[#9CA3AF] text-sm sm:text-base">
                {t("calculator.explanation.tdee.description")}
              </p>
            </div>

            <div className="bg-[#111827]/50 p-4 rounded-lg md:col-span-2 lg:col-span-1">
              <h3 className="text-lg md:text-xl font-semibold text-[#DC2626] mb-2">
                {t("calculator.explanation.orm.title")}
              </h3>
              <p className="text-[#9CA3AF] text-sm sm:text-base">
                {t("calculator.explanation.orm.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

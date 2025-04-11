import { useState } from "react";

const Calculator = () => {
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
      setBmiCategory("Underweight");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setBmiCategory("Normal weight");
    } else if (bmi >= 25 && bmi < 29.9) {
      setBmiCategory("Overweight");
    } else {
      setBmiCategory("Obesity");
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
    <div className="min-h-screen bg-[#111827] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Fitness <span className="text-[#DC2626]">Calculators</span>
          </h1>
          <div className="w-24 h-1 bg-[#DC2626] mx-auto mb-6"></div>
          <p className="text-[#9CA3AF] text-lg max-w-3xl mx-auto">
            Use our fitness calculators to track your progress and optimize your
            training
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* BMI Calculator */}
          <div className="bg-[#1F2937] rounded-lg p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-[#DC2626]"
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
              BMI Calculator
            </h2>
            <form onSubmit={calculateBMI}>
              <div className="mb-4">
                <label className="block text-white text-sm font-medium mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={bmiHeight}
                  onChange={(e) => setBmiHeight(e.target.value)}
                  className="w-full p-2 rounded-md bg-[#374151] text-white border border-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                  placeholder="e.g. 175"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-white text-sm font-medium mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={bmiWeight}
                  onChange={(e) => setBmiWeight(e.target.value)}
                  className="w-full p-2 rounded-md bg-[#374151] text-white border border-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                  placeholder="e.g. 70"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#DC2626] text-white py-2 px-4 rounded-md hover:bg-[#B91C1C] transition duration-300"
              >
                Calculate BMI
              </button>
            </form>

            {bmiResult && (
              <div className="mt-6 p-4 bg-[#111827] rounded-md">
                <p className="text-white text-center">
                  Your BMI:{" "}
                  <span className="font-bold text-xl">{bmiResult}</span>
                </p>
                <p className="text-[#9CA3AF] text-center mt-1">
                  Category: {bmiCategory}
                </p>
              </div>
            )}
          </div>

          {/* TDEE Calculator */}
          <div className="bg-[#1F2937] rounded-lg p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-[#DC2626]"
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
              TDEE Calculator
            </h2>
            <form onSubmit={calculateTDEE} className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={tdeeWeight}
                  onChange={(e) => setTdeeWeight(e.target.value)}
                  className="w-full p-2 rounded-md bg-[#374151] text-white border border-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                  placeholder="e.g. 70"
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={tdeeHeight}
                  onChange={(e) => setTdeeHeight(e.target.value)}
                  className="w-full p-2 rounded-md bg-[#374151] text-white border border-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                  placeholder="e.g. 175"
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Age
                </label>
                <input
                  type="number"
                  value={tdeeAge}
                  onChange={(e) => setTdeeAge(e.target.value)}
                  className="w-full p-2 rounded-md bg-[#374151] text-white border border-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                  placeholder="e.g. 30"
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Gender
                </label>
                <select
                  value={tdeeGender}
                  onChange={(e) => setTdeeGender(e.target.value)}
                  className="w-full p-2 rounded-md bg-[#374151] text-white border border-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Activity Level
                </label>
                <select
                  value={tdeeActivity}
                  onChange={(e) => setTdeeActivity(e.target.value)}
                  className="w-full p-2 rounded-md bg-[#374151] text-white border border-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                >
                  <option value="sedentary">Sedentary (office job)</option>
                  <option value="light">Light Exercise (1-2 days/week)</option>
                  <option value="moderate">
                    Moderate Exercise (3-5 days/week)
                  </option>
                  <option value="active">Heavy Exercise (6-7 days/week)</option>
                  <option value="very">Athlete (2x per day)</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#DC2626] text-white py-2 px-4 rounded-md hover:bg-[#B91C1C] transition duration-300 mt-6"
              >
                Calculate TDEE
              </button>
            </form>

            {tdeeResult && (
              <div className="mt-6 p-4 bg-[#111827] rounded-md">
                <p className="text-white text-center">
                  Your TDEE:{" "}
                  <span className="font-bold text-xl">{tdeeResult}</span>{" "}
                  calories/day
                </p>
                <p className="text-[#9CA3AF] text-center text-sm mt-1">
                  This is your maintenance calorie intake
                </p>
              </div>
            )}
          </div>

          {/* One-Rep Max Calculator */}
          <div className="bg-[#1F2937] rounded-lg p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-[#DC2626]"
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
              1RM Calculator
            </h2>
            <form onSubmit={calculateORM}>
              <div className="mb-4">
                <label className="block text-white text-sm font-medium mb-2">
                  Weight Lifted (kg)
                </label>
                <input
                  type="number"
                  value={ormWeight}
                  onChange={(e) => setOrmWeight(e.target.value)}
                  className="w-full p-2 rounded-md bg-[#374151] text-white border border-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                  placeholder="e.g. 100"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-white text-sm font-medium mb-2">
                  Reps Performed
                </label>
                <input
                  type="number"
                  value={ormReps}
                  onChange={(e) => setOrmReps(e.target.value)}
                  className="w-full p-2 rounded-md bg-[#374151] text-white border border-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                  placeholder="e.g. 8"
                  max="36"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#DC2626] text-white py-2 px-4 rounded-md hover:bg-[#B91C1C] transition duration-300"
              >
                Calculate 1RM
              </button>
            </form>

            {ormResult && (
              <div className="mt-6 p-4 bg-[#111827] rounded-md">
                <p className="text-white text-center">
                  Your estimated 1RM:{" "}
                  <span className="font-bold text-xl">{ormResult} kg</span>
                </p>
                <p className="text-[#9CA3AF] text-center text-sm mt-1">
                  Maximum weight you can lift for one rep
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Explanation Section */}
        <div className="mt-16 bg-[#1F2937] rounded-lg p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-6">
            Understanding the Calculators
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#DC2626] mb-2">
                BMI Calculator
              </h3>
              <p className="text-[#9CA3AF]">
                Body Mass Index (BMI) is a measure of body fat based on height
                and weight. It's a screening tool that can indicate whether you
                are underweight, normal weight, overweight, or obese.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#DC2626] mb-2">
                TDEE Calculator
              </h3>
              <p className="text-[#9CA3AF]">
                Total Daily Energy Expenditure (TDEE) estimates how many
                calories you burn per day. It accounts for your basal metabolic
                rate and physical activity level to determine your maintenance
                calories.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#DC2626] mb-2">
                1RM Calculator
              </h3>
              <p className="text-[#9CA3AF]">
                One Repetition Maximum (1RM) estimates the maximum weight you
                can lift for a single repetition of an exercise. This helps
                track strength progress and determine appropriate training
                weights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

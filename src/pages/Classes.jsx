const Classes = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Our Classes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Class Card 1 */}
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-800"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Strength Training
              </h3>
              <p className="text-gray-400 mb-4">
                Build muscle and increase your strength with our expert-led
                strength training classes.
              </p>
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Class Card 2 */}
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-800"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Cardio Blast
              </h3>
              <p className="text-gray-400 mb-4">
                High-intensity cardio workouts to improve your endurance and
                burn calories.
              </p>
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Class Card 3 */}
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-800"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">CrossFit</h3>
              <p className="text-gray-400 mb-4">
                Challenge yourself with our high-intensity functional training
                program.
              </p>
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;

const Membership = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Membership Plans
          </h1>
          <p className="text-xl text-gray-400">
            Choose the plan that fits your goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-xl font-bold text-white mb-4">Basic</h3>
            <div className="text-4xl font-bold text-red-600 mb-4">
              $29<span className="text-lg text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-400">
                <svg
                  className="h-5 w-5 text-red-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Access to gym equipment
              </li>
              <li className="flex items-center text-gray-400">
                <svg
                  className="h-5 w-5 text-red-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Locker room access
              </li>
              <li className="flex items-center text-gray-400">
                <svg
                  className="h-5 w-5 text-red-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Basic fitness assessment
              </li>
            </ul>
            <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition duration-300">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gray-900 rounded-lg p-8 transform scale-105 border-2 border-red-600">
            <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 rounded-bl-lg text-sm">
              Popular
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Premium</h3>
            <div className="text-4xl font-bold text-red-600 mb-4">
              $49<span className="text-lg text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-400">
                <svg
                  className="h-5 w-5 text-red-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                All Basic features
              </li>
              <li className="flex items-center text-gray-400">
                <svg
                  className="h-5 w-5 text-red-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Group classes included
              </li>
              <li className="flex items-center text-gray-400">
                <svg
                  className="h-5 w-5 text-red-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Personal trainer (2x/month)
              </li>
            </ul>
            <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition duration-300">
              Get Started
            </button>
          </div>

          {/* Elite Plan */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-xl font-bold text-white mb-4">Elite</h3>
            <div className="text-4xl font-bold text-red-600 mb-4">
              $99<span className="text-lg text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-400">
                <svg
                  className="h-5 w-5 text-red-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                All Premium features
              </li>
              <li className="flex items-center text-gray-400">
                <svg
                  className="h-5 w-5 text-red-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Unlimited personal training
              </li>
              <li className="flex items-center text-gray-400">
                <svg
                  className="h-5 w-5 text-red-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Nutrition consultation
              </li>
            </ul>
            <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;

import { Link } from "react-router-dom";

const Classes = () => {
  const classes = [
    {
      id: 1,
      name: "Strength Training",
      description:
        "Build muscle and increase strength with our comprehensive strength training program.",
      image: "/images/strength.jpg",
      schedule: "Mon, Wed, Fri - 6:00 AM, 10:00 AM, 6:00 PM",
      trainer: "Alex Johnson",
    },
    {
      id: 2,
      name: "Cardio Blast",
      description:
        "Improve cardiovascular health and burn calories with our high-intensity cardio workouts.",
      image: "/images/cardio.jpg",
      schedule: "Tue, Thu - 7:00 AM, 5:00 PM, 7:00 PM",
      trainer: "Sarah Williams",
    },
    {
      id: 3,
      name: "Yoga & Flexibility",
      description:
        "Enhance flexibility, balance, and mental well-being with our yoga and stretching classes.",
      image: "/images/yoga.jpg",
      schedule: "Mon, Wed, Fri - 8:00 AM, 4:00 PM",
      trainer: "Michael Chen",
    },
    {
      id: 4,
      name: "HIIT",
      description:
        "Maximize your workout efficiency with our High-Intensity Interval Training sessions.",
      image: "/images/hiit.jpg",
      schedule: "Tue, Thu, Sat - 6:00 AM, 6:00 PM",
      trainer: "Emily Rodriguez",
    },
    {
      id: 5,
      name: "CrossFit",
      description:
        "Challenge yourself with varied functional movements performed at high intensity.",
      image: "/images/crossfit.jpg",
      schedule: "Mon, Wed, Fri - 7:00 AM, 5:00 PM",
      trainer: "David Miller",
    },
    {
      id: 6,
      name: "Spin Class",
      description:
        "Get your heart pumping with our energetic indoor cycling sessions led by expert instructors.",
      image: "/images/spin.jpg",
      schedule: "Tue, Thu, Sat - 8:00 AM, 7:00 PM",
      trainer: "Lisa Thompson",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Our <span className="text-[#DC2626]">Classes</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#9CA3AF]">
            Discover our wide range of fitness classes designed to help you
            achieve your fitness goals, whether you're looking to build
            strength, improve cardio, or enhance flexibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {classes.map((fitnessClass) => (
            <div
              key={fitnessClass.id}
              className="bg-[#1F2937] rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            >
              <div className="h-48 bg-[#111827] flex items-center justify-center">
                <img
                  src={fitnessClass.image || "/images/placeholder.jpg"}
                  alt={fitnessClass.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                  {fitnessClass.name}
                </h3>
                <p className="text-sm sm:text-base text-[#9CA3AF] mb-4">
                  {fitnessClass.description}
                </p>
                <div className="mt-4 space-y-2 text-sm sm:text-base">
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#DC2626] mt-0.5 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="text-[#9CA3AF] text-sm sm:text-base">
                      {fitnessClass.schedule}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#DC2626] mt-0.5 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                    <span className="text-[#9CA3AF] text-sm sm:text-base">
                      {fitnessClass.trainer}
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    to="/membership"
                    className="inline-block w-full py-2 px-4 bg-[#DC2626] text-white text-center font-medium rounded-lg hover:bg-[#B91C1C] transition duration-300"
                  >
                    Join This Class
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/membership"
            className="inline-block py-3 px-8 bg-[#111827] border-2 border-[#DC2626] text-[#DC2626] font-bold rounded-lg hover:bg-[#DC2626] hover:text-white transition duration-300"
          >
            View All Classes & Schedule
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Classes;

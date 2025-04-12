import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Import images from assets
import heroImg from "../assets/gym-img-1.jpg";
import muscleImg from "../assets/gym-img-2.jpg";
import yogaImg from "../assets/gym-img-3.jpg";
import weightliftingImg from "../assets/gym-img-4.jpg";
import trainerImg from "../assets/gym-img-5.jpg";
import calculatorImg from "../assets/gym-img-6.jpg";
import testimonialAvatar from "../assets/gym-img-7.jpg";
import testimonialImg from "../assets/gym-img-8.jpg";

// Import product images from the products directory
import product1Img from "../assets/products/product-1.jpeg";
import product2Img from "../assets/products/product-2.jpeg";
import product3Img from "../assets/products/product-3.jpeg";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Show elements after a small delay for entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Animated stat counters
  const stats = [
    { value: 3000, label: "HAPPY CLIENTS", symbol: "+" },
    { value: 200, label: "EXPERIENCED TRAINERS", symbol: "+" },
    { value: 5000, label: "FITNESS PROGRAMS", symbol: "+" },
  ];

  // Products data
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Protein Powder",
      description:
        "High-quality whey protein for maximum muscle recovery and growth.",
      price: 49.99,
      image: product1Img,
      category: "Supplements",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Adjustable Dumbbell Set",
      description:
        "Space-saving adjustable dumbbells perfect for home workouts.",
      price: 299.99,
      image: product2Img,
      category: "Equipment",
      badge: "New",
    },
    {
      id: 3,
      name: "Performance Gym Gloves",
      description:
        "Premium gloves for better grip and hand protection during workouts.",
      price: 34.99,
      image: product3Img,
      category: "Accessories",
      badge: "",
    },
  ];

  return (
    <div className="bg-[#111827]">
      {/* Hero Section with Animated Gradient */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F17]/95 via-[#111827]/85 to-[#320D0D]/75 z-10" />

        {/* Content container */}
        <div className="relative z-20 h-screen pt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <div
              className={`max-w-3xl transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-block mb-3 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] p-1 rounded-md">
                <h3 className="text-white text-xs sm:text-sm md:text-md  font-semibold uppercase tracking-widest px-3 py-1">
                  Transform Your Body
                </h3>
              </div>

              <h1 className="hero-heading text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
                MAKE YOUR{" "}
                <span className="text-gradient bg-gradient-to-r from-[#DC2626] to-[#FF4500]">
                  BODY SHAPE
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl  text-[#D1D5DB] mb-8 max-w-2xl">
                We are specialists in athletic improvement and performance.
                Working to help improve the human potential in a safe, healthy
                and natural way.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to=""
                  className="bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md  font-bold transition duration-300 text-center flex items-center justify-center group hover:shadow-lg hover:shadow-[#DC2626]/20 transform hover:translate-y-[-2px]"
                >
                  <span>Join Us Now</span>
                  <svg
                    className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
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
                  to="/#programs"
                  className="flex items-center justify-center text-white group "
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#DC2626] flex items-center justify-center mr-2 group-hover:bg-[#DC2626]/20 transition-all duration-300">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#DC2626] group-hover:text-white transition-colors duration-300"
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
                    Watch Video
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Section - Modern Floating Cards */}
          <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-30">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div
                className={`flex flex-wrap justify-between backdrop-blur-md bg-[#111827]/40 rounded-xl shadow-2xl p-2 sm:p-3 md:p-6 border border-gray-700/50 transition-all duration-1000 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }`}
              >
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`w-1/3 text-center p-1 sm:p-2 md:p-4 transition-all duration-700 transform ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <div className="flex items-center justify-center">
                      <div className="text-[#DC2626] text-xl sm:text-2xl md:text-5xl font-bold ">
                        {stat.value.toLocaleString()}
                      </div>
                      <div className="text-[#DC2626] text-lg sm:text-xl md:text-3xl font-bold animate-pulse ">
                        {stat.symbol}
                      </div>
                    </div>
                    <div className="text-white text-[10px] xs:text-xs md:text-sm mt-1 tracking-wider  uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Program Section */}
      <div id="programs" className="py-12 sm:py-16 md:py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-1 ">
              OUR PROGRAM
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#DC2626] mb-4 sm:mb-8 ">
              BUILD YOUR BEST BODY
            </h1>
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-3xl mx-auto ">
              Looking to start a new routine at the gym? Try our specially
              designed workouts led by expert trainers to build strength and
              confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Program 1 */}
            <div className="bg-[#1F2937] rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 shadow-xl">
              <div className="h-48 overflow-hidden">
                <img
                  src={muscleImg}
                  alt="Flex Muscle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#DC2626] mb-2 ">
                  FLEX MUSCLE
                </h3>
                <p className="text-sm sm:text-base text-[#9CA3AF] mb-4 sm:mb-6 ">
                  Create a foundation of strength with our dynamic training
                  program focused on building muscle and functional strength.
                </p>
                <Link
                  to=""
                  className="flex items-center text-white hover:text-[#DC2626] transition duration-300 "
                >
                  <span className="mr-2 text-sm sm:text-base">LEARN MORE</span>
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

            {/* Program 2 */}
            <div className="bg-[#1F2937] rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 shadow-xl">
              <div className="h-48 overflow-hidden">
                <img
                  src={yogaImg}
                  alt="Basic Yoga"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#DC2626] mb-2 ">
                  BASIC YOGA
                </h3>
                <p className="text-sm sm:text-base text-[#9CA3AF] mb-4 sm:mb-6 ">
                  Improve flexibility, balance and mental clarity with our
                  foundational yoga classes suitable for all experience levels.
                </p>
                <Link
                  to=""
                  className="flex items-center text-white hover:text-[#DC2626] transition duration-300 "
                >
                  <span className="mr-2 text-sm sm:text-base">LEARN MORE</span>
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

            {/* Program 3 */}
            <div className="bg-[#1F2937] rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 shadow-xl sm:col-span-2 md:col-span-1">
              <div className="h-48 overflow-hidden">
                <img
                  src={weightliftingImg}
                  alt="Weightlifting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#DC2626] mb-2 ">
                  WEIGHTLIFTING
                </h3>
                <p className="text-sm sm:text-base text-[#9CA3AF] mb-4 sm:mb-6 ">
                  Master the fundamentals of weightlifting with proper form and
                  technique to build strength and power safely.
                </p>
                <Link
                  to=""
                  className="flex items-center text-white hover:text-[#DC2626] transition duration-300 "
                >
                  <span className="mr-2 text-sm sm:text-base">LEARN MORE</span>
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

      {/* Why Join Us Section */}
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
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 ">
                WHY <span className="text-[#DC2626]">JOIN US?</span>
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-[#DC2626] mb-6 sm:mb-8"></div>

              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#DC2626] mb-2 ">
                    PROFESSIONAL TRAINER
                  </h3>
                  <p className="text-sm sm:text-base text-[#9CA3AF] ">
                    Our certified personal trainers create customized workout
                    plans tailored to your specific goals, ensuring you maximize
                    every session.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#DC2626] mb-2 ">
                    GOOD MANAGEMENT
                  </h3>
                  <p className="text-sm sm:text-base text-[#9CA3AF] ">
                    Our dedicated staff ensures all equipment is
                    well-maintained, facilities are clean, and your experience
                    is seamless from check-in to check-out.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#DC2626] mb-2 ">
                    PRACTICE VIDEOS
                  </h3>
                  <p className="text-sm sm:text-base text-[#9CA3AF] ">
                    Access our extensive library of instructional videos to
                    perfect your form and technique even when you're not at the
                    gym.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BMI Calculator Section */}
      <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#0F0F17] to-[#320D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 ">
                CALCULATE
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#DC2626] mb-4 sm:mb-6 ">
                YOUR BMI
              </h1>
              <p className="text-sm sm:text-base text-[#9CA3AF] mb-6 sm:mb-8 ">
                Take the first step toward better health by calculating your
                Body Mass Index (BMI). This simple measurement helps evaluate
                your body composition and overall health risk factors.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 ">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    className="w-full p-2 rounded-md bg-[#1F2937] text-white border border-[#4B5563]"
                    placeholder="175"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    className="w-full p-2 rounded-md bg-[#1F2937] text-white border border-[#4B5563]"
                    placeholder="70"
                  />
                </div>
              </div>

              <Link
                to="/calculator"
                className="bg-[#DC2626] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md  font-bold hover:bg-[#B91C1C] transition duration-300 inline-flex items-center"
              >
                <span className="mr-2">Calculate Now</span>
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
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

      {/* Products Section */}
      <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#111827] to-[#1a202c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 ">
              PREMIUM QUALITY
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#DC2626] mb-4 sm:mb-8 ">
              FEATURED PRODUCTS
            </h1>
            <p className="text-sm sm:text-base text-[#9CA3AF] max-w-3xl mx-auto mb-10 ">
              We offer only the best quality fitness equipment, supplements, and
              accessories to help you reach your fitness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-[#1F2937] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-8px]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#DC2626] transition-colors duration-300 ">
                      {product.name}
                    </h3>
                    <span className="text-lg font-bold text-[#DC2626]">
                      ${product.price}
                    </span>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block text-xs font-semibold text-[#9CA3AF] px-2 py-1 bg-[#111827] rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-sm text-[#9CA3AF] mb-5 ">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <button className="text-white bg-[#111827] hover:bg-[#DC2626] px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-bold">
                      Add to Cart
                    </button>
                    <Link
                      to={`/products/${product.id}`}
                      className="text-[#DC2626] hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-1 text-sm">Details</span>
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
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center bg-transparent text-white border-2 border-[#DC2626] hover:bg-[#DC2626] px-8 py-3 rounded-lg transition-colors duration-300 font-bold text-lg group"
            >
              <span className="mr-2">View All Products</span>
              <svg
                className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
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
    </div>
  );
};

export default Home;

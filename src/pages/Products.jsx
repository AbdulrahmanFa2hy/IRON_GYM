import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import product images from the products directory
import product1Img from "../assets/products/product-1.jpeg";
import product2Img from "../assets/products/product-2.jpeg";
import product3Img from "../assets/products/product-3.jpeg";
import product4Img from "../assets/products/product-4.jpeg";
import product5Img from "../assets/products/product-5.jpeg";
import product6Img from "../assets/products/product-6.jpeg";
import product7Img from "../assets/products/product-7.jpeg";
import product8Img from "../assets/products/product-8.jpeg";
import product9Img from "../assets/products/product-9.jpeg";

const Products = () => {
  // State for filter and sort
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilters, setActiveFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Animation effect on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Check window width on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setActiveFilters(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on component mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Products data
  const products = [
    {
      id: 1,
      name: "Premium Protein Powder",
      description:
        "High-quality whey protein for maximum muscle recovery and growth.",
      price: 49.99,
      image: product1Img,
      category: "supplements",
      badge: "Best Seller",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 2,
      name: "Adjustable Dumbbell Set",
      description:
        "Space-saving adjustable dumbbells perfect for home workouts.",
      price: 299.99,
      image: product2Img,
      category: "equipment",
      badge: "New",
      rating: 4.9,
      inStock: true,
    },
    {
      id: 3,
      name: "Performance Gym Gloves",
      description:
        "Premium gloves for better grip and hand protection during workouts.",
      price: 34.99,
      image: product3Img,
      category: "accessories",
      badge: "",
      rating: 4.5,
      inStock: true,
    },
    {
      id: 4,
      name: "Olympic Barbell",
      description:
        "Professional grade Olympic barbell for serious weightlifting.",
      price: 199.99,
      image: product4Img,
      category: "equipment",
      badge: "",
      rating: 4.7,
      inStock: true,
    },
    {
      id: 5,
      name: "BCAA Amino Acids",
      description:
        "Essential amino acids to support muscle recovery and growth.",
      price: 29.99,
      image: product5Img,
      category: "supplements",
      badge: "20% OFF",
      rating: 4.6,
      inStock: true,
    },
    {
      id: 6,
      name: "Smart Fitness Tracker",
      description:
        "Track your workouts, heart rate, and progress with this advanced fitness tracker.",
      price: 129.99,
      image: product6Img,
      category: "accessories",
      badge: "",
      rating: 4.4,
      inStock: true,
    },
    {
      id: 7,
      name: "Pre-Workout Energy Booster",
      description:
        "Maximize your workout intensity with our powerful pre-workout formula.",
      price: 39.99,
      image: product7Img,
      category: "supplements",
      badge: "Popular",
      rating: 4.7,
      inStock: true,
    },
    {
      id: 8,
      name: "Compression Workout Shorts",
      description:
        "High-performance compression shorts for enhanced muscle support and recovery.",
      price: 45.99,
      image: product8Img,
      category: "accessories",
      badge: "",
      rating: 4.3,
      inStock: true,
    },
    {
      id: 9,
      name: "Resistance Bands Set",
      description:
        "Versatile resistance bands for full-body workouts anywhere, anytime.",
      price: 24.99,
      image: product9Img,
      category: "equipment",
      badge: "Best Value",
      rating: 4.8,
      inStock: true,
    },
  ];

  // Filter products based on category and search
  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "all" || product.category === category;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0; // featured
    }
  });

  // Toggle mobile filters
  const toggleFilters = () => {
    setActiveFilters(!activeFilters);
  };

  // Reset all filters
  const resetFilters = () => {
    setCategory("all");
    setSortBy("featured");
    setSearchQuery("");
  };

  return (
    <div className="bg-[#111827] min-h-screen pt-20 pb-12 px-4 sm:px-6 md:px-8 lg:pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div
          className={`text-center mb-8 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 ">
            OUR <span className="text-[#DC2626]">PRODUCTS</span>
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-[#DC2626] mx-auto mb-4 md:mb-6"></div>
          <p className="text-[#9CA3AF] text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Browse our premium selection of fitness equipment, supplements, and
            accessories to help you reach your goals faster.
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={toggleFilters}
            className="w-full bg-[#1F2937] text-white py-3 px-4 rounded-md flex items-center justify-between"
            aria-expanded={activeFilters}
          >
            <span className="font-medium">
              {activeFilters ? "Hide Filter & Sort" : "Show Filter & Sort"}
            </span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                activeFilters ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Filters and Search */}
        <div
          className={`bg-[#1F2937] rounded-xl mb-6 sm:mb-8 shadow-lg md:block ${
            activeFilters ? "block" : "hidden"
          } ${
            isVisible
              ? "opacity-100 transition-opacity duration-300"
              : "opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                {/* Search */}
                <div className="relative w-full sm:w-auto sm:flex-1 md:w-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-[#9CA3AF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#374151] bg-[#111827] text-white placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Category Filter */}
                <div className="w-full sm:w-auto sm:flex-1 md:max-w-xs">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 rounded-lg border border-[#374151] bg-[#111827] text-white focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                  >
                    <option value="all">All Categories</option>
                    <option value="supplements">Supplements</option>
                    <option value="equipment">Equipment</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>
              </div>

              {/* Sort */}
              <div className="w-full sm:flex-1 lg:w-auto lg:max-w-xs">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 rounded-lg border border-[#374151] bg-[#111827] text-white focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Active Filters Display & Reset Button */}
            {(category !== "all" || sortBy !== "featured" || searchQuery) && (
              <div className="mt-4 pt-4 border-t border-[#374151] flex flex-wrap items-center justify-between">
                <div className="flex flex-wrap gap-2 mb-2 sm:mb-0">
                  {category !== "all" && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#374151] text-white">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                      <button
                        onClick={() => setCategory("all")}
                        className="ml-1 text-[#9CA3AF] hover:text-white"
                      >
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </span>
                  )}
                  {sortBy !== "featured" && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#374151] text-white">
                      {sortBy === "price-low"
                        ? "Price: Low to High"
                        : sortBy === "price-high"
                        ? "Price: High to Low"
                        : "Highest Rated"}
                      <button
                        onClick={() => setSortBy("featured")}
                        className="ml-1 text-[#9CA3AF] hover:text-white"
                      >
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </span>
                  )}
                  {searchQuery && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#374151] text-white">
                      Search: "{searchQuery}"
                      <button
                        onClick={() => setSearchQuery("")}
                        className="ml-1 text-[#9CA3AF] hover:text-white"
                      >
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </span>
                  )}
                </div>
                <button
                  onClick={resetFilters}
                  className="text-sm text-[#DC2626] hover:text-white transition-colors duration-300"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {sortedProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-[#1F2937] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{
                transitionDelay: `${150 + index * 50}ms`,
                transitionDuration: "1000ms",
              }}
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
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
                {!product.inStock && (
                  <div className="absolute inset-0 bg-[#111827]/70 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      Out of Stock
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-[#DC2626] transition-colors duration-300 ">
                    {product.name}
                  </h3>
                  <span className="text-base sm:text-lg font-bold text-[#DC2626]">
                    ${product.price}
                  </span>
                </div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-block text-xs font-semibold text-[#9CA3AF] px-2 py-1 bg-[#111827] rounded-full">
                    {product.category.charAt(0).toUpperCase() +
                      product.category.slice(1)}
                  </span>

                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-500"
                              : "text-gray-500"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-[#9CA3AF] ml-1">
                      ({product.rating})
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#9CA3AF] mb-4 sm:mb-5 line-clamp-2 sm:line-clamp-3">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <button
                    className={`text-white ${
                      product.inStock
                        ? "bg-[#111827] hover:bg-[#DC2626]"
                        : "bg-gray-700 cursor-not-allowed"
                    } px-3 sm:px-4 py-2 rounded-lg transition-colors duration-300 text-xs sm:text-sm font-bold`}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </button>
                  <Link
                    to={`/products/${product.id}`}
                    className="text-[#DC2626] hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-1 text-xs sm:text-sm">Details</span>
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
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

        {/* Empty state */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-10 px-4 sm:py-16 bg-[#1F2937] rounded-xl mt-6">
            <svg
              className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-[#4B5563]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-4 text-lg sm:text-xl font-medium text-white">
              No products found
            </h3>
            <p className="mt-2 text-[#9CA3AF] text-sm sm:text-base max-w-md mx-auto">
              Try adjusting your search or filters to find what you're looking
              for.
            </p>
            <div className="mt-6">
              <button
                onClick={resetFilters}
                className="inline-flex items-center px-6 py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-[#DC2626] hover:bg-[#B91C1C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DC2626] transition-colors duration-300"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}

        {/* Pagination - only show if there are products */}
        {sortedProducts.length > 0 && (
          <div className="mt-8 sm:mt-12 flex justify-center">
            <nav className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md bg-[#1F2937] text-sm font-medium text-[#9CA3AF] hover:bg-[#374151] transition-colors duration-300"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 bg-[#DC2626] text-sm font-medium text-white transition-colors duration-300"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 bg-[#1F2937] text-sm font-medium text-[#9CA3AF] hover:bg-[#374151] transition-colors duration-300"
              >
                2
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md bg-[#1F2937] text-sm font-medium text-[#9CA3AF] hover:bg-[#374151] transition-colors duration-300"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

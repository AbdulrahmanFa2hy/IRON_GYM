import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const ProductsSection = ({ featuredProducts }) => {
  const { t } = useTranslation();

  return (
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
                    to={``}
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
            <span className="mr-2">{t("featured.viewAll")}</span>
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
  );
};

ProductsSection.propTypes = {
  featuredProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      badge: PropTypes.string,
    })
  ).isRequired,
};

export default ProductsSection;

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  // Track scroll position to change navbar style and visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Change background when scrolled
      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111827]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              {/* Logo image */}
              <img
                src="/android-chrome-192x192.png"
                alt="IRON GYM"
                className="h-8 sm:h-10 w-auto mr-2"
              />
              {/* IRON GYM text - Always LTR */}
              <div className="ltr">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#DC2626] tracking-tighter font-['Oswald']">
                  IRON{" "}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-white transition-colors duration-300 font-['Oswald']">
                  GYM
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div
              className={`ml-4 lg:ml-10 flex items-baseline ${
                isRTL ? "space-s-1" : "space-x-1"
              }`}
            >
              {[
                { name: t("navbar.home"), path: "/" },
                { name: t("navbar.products"), path: "/products" },
                { name: t("navbar.calculators"), path: "/calculator" },
                { name: t("navbar.contact"), path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link px-3 lg:px-4 py-2 rounded-md text-sm lg:text-md transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-[#DC2626] font-bold"
                      : "text-white hover:text-[#DC2626] hover:bg-[#1F2937]/40"
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <div className="h-1 bg-[#DC2626] rounded-full mt-1 transform transition-transform duration-300 ease-out"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Join button and Language Switcher (desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link
              to=""
              className="bg-[#DC2626] text-white px-4 lg:px-5 py-2 rounded-md font-['Cairo'] text-sm lg:text-base font-bold hover:bg-[#B91C1C] transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              {t("hero.joinButton")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#9CA3AF] hover:text-white hover:bg-[#1F2937] focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{t("navbar.openMenu")}</span>
              <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <span
                  className={`absolute h-0.5 w-5 sm:w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute h-0.5 bg-current transform transition-opacity duration-300 ease-in-out ${
                    isOpen ? "opacity-0 w-0" : "opacity-100 w-5 sm:w-6"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-5 sm:w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 max-h-screen"
            : "opacity-0 -translate-y-10 max-h-0 overflow-hidden pointer-events-none"
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 bg-[#111827] shadow-lg rounded-b-lg">
          {[
            { name: t("navbar.home"), path: "/" },
            { name: t("navbar.products"), path: "/products" },
            { name: t("navbar.calculators"), path: "/calculator" },
            { name: t("navbar.contact"), path: "/contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link block px-4 py-2 sm:py-3 rounded-md transition-all duration-300 text-sm sm:text-base ${
                isActive(item.path)
                  ? "bg-[#1F2937] text-[#DC2626] font-bold"
                  : "text-white hover:bg-[#1F2937]/60 hover:text-[#DC2626]"
              }`}
            >
              {item.name}
            </Link>
          ))}
          {/* Language Switcher (mobile) */}
          <div className="px-4 py-2">
            <LanguageSwitcher />
          </div>
          <div className="pt-2 pb-1">
            <Link
              to=""
              className="block w-full bg-[#DC2626] text-white text-center py-2 sm:py-3 rounded-md font-['Cairo'] text-sm sm:text-base font-bold hover:bg-[#B91C1C] transition-colors duration-300"
            >
              {t("hero.joinButton")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

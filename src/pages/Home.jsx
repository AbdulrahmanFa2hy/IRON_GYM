import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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

// Import Home page section components
import {
  HeroSection,
  ProgramsSection,
  WhyJoinUsSection,
  BMICalculatorSection,
  TestimonialSection,
  ProductsSection,
} from "../components/home";

const Home = () => {
  const { t } = useTranslation();
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

  // Products data
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Protein Powder",
      description:
        "High-quality whey protein for maximum muscle recovery and growth.",
      price: 49.99,
      image: product1Img,
      category: t("products.supplements"),
      badge: t("featured.bestSeller"),
    },
    {
      id: 2,
      name: "Adjustable Dumbbell Set",
      description:
        "Space-saving adjustable dumbbells perfect for home workouts.",
      price: 299.99,
      image: product2Img,
      category: t("products.equipment"),
      badge: t("featured.new"),
    },
    {
      id: 3,
      name: "Performance Gym Gloves",
      description:
        "Premium gloves for better grip and hand protection during workouts.",
      price: 34.99,
      image: product3Img,
      category: t("products.accessories"),
      badge: "",
    },
  ];

  return (
    <div className="bg-[#111827]">
      {/* Hero Section */}
      <HeroSection heroImg={heroImg} scrollY={scrollY} isVisible={isVisible} />

      {/* Programs Section */}
      <ProgramsSection
        muscleImg={muscleImg}
        yogaImg={yogaImg}
        weightliftingImg={weightliftingImg}
      />

      {/* Why Join Us Section */}
      <WhyJoinUsSection trainerImg={trainerImg} />

      {/* BMI Calculator Section */}
      <BMICalculatorSection calculatorImg={calculatorImg} />

      {/* Testimonial Section */}
      <TestimonialSection
        testimonialAvatar={testimonialAvatar}
        testimonialImg={testimonialImg}
      />

      {/* Products Section */}
      <ProductsSection featuredProducts={featuredProducts} />
    </div>
  );
};

export default Home;

// By Von Jared Castillo
// Bachelor of Science in Computer Engineering - Major in System and Network Administration
// Pangasinan State University - Urdaneta City Campus (Year Graduated - 2025)


import React, { useState, useEffect } from "react";
const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroSlides = [
    {
      title: "New Year Special",
      subtitle: "30% OFF",
      description: "Get your favorite donuts and beverages",
      image: "./assets/slider1.jpg",
    },
    {
      title: "Fresh Daily",
      subtitle: "Made with Love",
      description: "Premium coffee and fresh baked goods",
      image: "./assets/slider2.jpg",
    },
  ];
  const categories = [
    {
      name: "Donuts",
      icon: "fas fa-circle",
      image: "./assets/Donuts.jpg",
    },
    {
      name: "Beverages",
      icon: "fas fa-coffee",
      image: "./assets/Beverages.jpg",
    },
    {
      name: "Breakfast",
      icon: "fas fa-egg",
      image: "./assets/Breakfast.jpg",
    },
    {
      name: "Sandwiches",
      icon: "fas fa-hamburger",
      image: "./assets/Sandwiches.jpg",
    },
  ];
  const featuredProducts = [
    {
      name: "Glazed Donut",
      price: "P50.00",
      image: "./assets/Glazed Donut.jpg",
      rating: 4.8,
      calories: 260,
    },
    {
      name: "Iced Coffee",
      price: "P80.00",
      image: "./assets/Iced Coffee.jpg",
      rating: 4.6,
      calories: 120,
    },
    {
      name: "Boston Cream",
      price: "P55.00",
      image: "./assets/Boston Cream.jpg",
      rating: 4.9,
      calories: 300,
    },
    {
      name: "Breakfast Wrap",
      price: "P75.00",
      image: "./assets/Breakfast Wrap.jpg",
      rating: 4.5,
      calories: 380,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const addToCart = () => {
    setCartItems((prev) => prev + 1);
  };
  return (

    <div className="min-h-screen bg-white">

      <style>{`
      .!rounded-button {
        border-radius: 25px;
      }

      .gradient-bg {
        background: linear-gradient(135deg, #FF69B4, #FFA500);
      }

      .hero-slide {
        transition: transform 0.5s ease-in-out;
      }

      .card-hover {
        transition: all 0.3s ease;
      }

      .card-hover:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(255, 105, 180, 0.2);
      }

      .bounce-in {
        animation: bounceIn 0.6s ease-out;
      }

      @keyframes bounceIn {
        0% { transform: scale(0.3); opacity: 0; }
        50% { transform: scale(1.05); }
        70% { transform: scale(0.9); }
        100% { transform: scale(1); opacity: 1; }
      }

      .fade-in {
        animation: fadeIn 0.8s ease-out;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .slide-in {
        animation: slideIn 0.6s ease-out;
      }

      @keyframes slideIn {
        from { transform: translateX(-100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }

      .pulse-button {
        animation: pulse 2s infinite;
      }

      @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(255, 105, 180, 0.7); }
        70% { box-shadow: 0 0 0 10px rgba(255, 105, 180, 0); }
        100% { box-shadow: 0 0 0 0 rgba(255, 105, 180, 0); }
      }
`}</style>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <div className="flex-shrink-0 slide-in">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">Dunkin' Donuts</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-500 transition-colors duration-300 font-medium cursor-pointer">Home</a>
              <a href="#products" className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium cursor-pointer">Featured</a>
            </nav>

            {/* Cart and Contact Us */}
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-700 hover:text-pink-500 transition-colors duration-300 cursor-pointer">
                <i className="fas fa-shopping-cart text-xl"></i>
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center bounce-in">
                    {cartItems}
                  </span>
                )}
              </button>

              <a href="#contact" className="hidden md:flex gradient-bg text-white px-4 py-2 !rounded-button font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
                Contact Us
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-pink-500 transition-colors duration-300 cursor-pointer">
                <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 fade-in">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors duration-300 cursor-pointer">Home</a>
                <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors duration-300 cursor-pointer">Featured</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-orange-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                {heroSlides[currentSlide].subtitle}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {heroSlides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
              <a href="#categories" className="w-full sm:w-auto gradient-bg text-white px-8 py-4 !rounded-button font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 pulse-button whitespace-nowrap cursor-pointer text-center inline-block">
                 Order Now
             </a>
             <a href="#products" className="w-full sm:w-auto border-2 border-pink-500 text-pink-500 px-8 py-4 !rounded-button font-semibold text-lg hover:bg-pink-500 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer text-center inline-block">
                 View Menu
             </a>
              </div>
            </div>
            <div className="relative bounce-in">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img src={heroSlides[currentSlide].image} alt="Hero" className="w-full h-96 object-cover object-top hero-slide"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Slide indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentSlide ? "bg-pink-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Categories Section */}
      <section id="categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Categories</h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our wide range of delicious donuts, beverages, and fresh
              food
            </p>

          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"/>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Featured Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dunkin Menu</h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Try our most popular items, made fresh daily with premium
              ingredients
            </p>
            
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-contain hover:scale-110 transition-transform duration-300"/>
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <i className="fas fa-heart text-gray-400 hover:text-pink-500 transition-colors duration-300 cursor-pointer"></i>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <i className="fas fa-star text-yellow-400 mr-1"></i>
                      {product.rating}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <i className="fas fa-fire text-orange-400 mr-1"></i>
                    {product.calories} cal
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <button
                      onClick={addToCart}
                      className="gradient-bg text-white p-3 !rounded-button hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap">
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="gradient-bg text-white px-8 py-4 !rounded-button font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap">
              View All 
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>

          </div>
          <form className="space-y-6 fade-in">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your name" required/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your email" required/>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input type="text" id="subject" name="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter subject" required/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea id="message" name="message" rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your message" maxLength={500} required>
              </textarea>

              <p className="text-sm text-gray-500 mt-1">
                Maximum 500 characters
              </p>

            </div>
            <div className="text-center">
              <button type="submit"
                className="gradient-bg text-white px-8 py-4 !rounded-button font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="fade-in">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-4">
                Dunkin' Donuts
              </h3>

              <p className="text-gray-400 mb-6">
                Philippines' favorite all-day, everyday stop for coffee and baked
                goods.
              </p>

              <div className="flex space-x-4">
                <i className="fab fa-facebook text-2xl text-gray-400 hover:text-pink-500 transition-colors duration-300 cursor-pointer"></i>
                <i className="fab fa-twitter text-2xl text-gray-400 hover:text-pink-500 transition-colors duration-300 cursor-pointer"></i>
                <i className="fab fa-instagram text-2xl text-gray-400 hover:text-pink-500 transition-colors duration-300 cursor-pointer"></i>
              </div>
            </div>
            <div className="fade-in">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Home</a>
                </li>
                 <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Menu</a>
                </li>
              </ul>
            </div>
            <div className="fade-in">
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <i className="fas fa-phone mr-2"></i>
                  +63 945-306-4443
                </p>
                <p className="flex items-center">
                  <i className="fas fa-envelope mr-2"></i>
                  leblanc_dunkin@gmail.com
                </p>
                <p className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  Rosales, Pangasinan, Philippines
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Dunkin' Donuts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default App;

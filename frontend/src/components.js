import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  Users, 
  Star, 
  Heart, 
  Filter, 
  MapPin, 
  Wifi, 
  Car, 
  Coffee, 
  Tv, 
  Wind,
  User,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Globe
} from 'lucide-react';

// Mock Data
const mockProperties = [
  {
    id: 1,
    title: "Stunning Beachfront Villa",
    location: "Malibu, California",
    price: 450,
    rating: 4.9,
    reviews: 127,
    images: [
      "https://images.unsplash.com/photo-1473444562645-e26e32b3185d",
      "https://images.unsplash.com/photo-1585544314038-a0d3769d0193",
      "https://images.unsplash.com/photo-1707299799230-6df2aacdb6a0"
    ],
    type: "Entire villa",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["Ocean view", "Pool", "WiFi", "Kitchen", "Parking"],
    host: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1635695696701-fc9b49c991bb",
      superhost: true
    },
    description: "Wake up to breathtaking ocean views in this luxurious beachfront villa. Perfect for family gatherings or romantic getaways."
  },
  {
    id: 2,
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    price: 280,
    rating: 4.8,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1647430076576-7d501ac78eaf",
      "https://images.unsplash.com/photo-1609785648386-4383a5adee99",
      "https://images.unsplash.com/photo-1512842879558-71787e6a5940"
    ],
    type: "Entire cabin",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Mountain view", "Fireplace", "WiFi", "Kitchen", "Hot tub"],
    host: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1665065952009-a5dc00f423d4",
      superhost: false
    },
    description: "Escape to this charming mountain cabin surrounded by pristine wilderness. Perfect for hiking enthusiasts and nature lovers."
  },
  {
    id: 3,
    title: "Modern Downtown Loft",
    location: "New York, NY",
    price: 320,
    rating: 4.7,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1515263487990-61b07816b324",
      "https://images.unsplash.com/photo-1492138645880-160f6a5136fa",
      "https://images.unsplash.com/photo-1534473533502-2bc55a57ea88"
    ],
    type: "Entire loft",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["City view", "Gym", "WiFi", "Kitchen", "Elevator"],
    host: {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1635695696701-fc9b49c991bb",
      superhost: true
    },
    description: "Experience the pulse of the city from this stylish downtown loft. Walking distance to restaurants, theaters, and attractions."
  },
  {
    id: 4,
    title: "Tropical Island Getaway",
    location: "Belize",
    price: 520,
    rating: 5.0,
    reviews: 42,
    images: [
      "https://images.unsplash.com/photo-1585544314038-a0d3769d0193",
      "https://images.pexels.com/photos/13048487/pexels-photo-13048487.jpeg",
      "https://images.unsplash.com/photo-1473444562645-e26e32b3185d"
    ],
    type: "Entire house",
    guests: 10,
    bedrooms: 5,
    bathrooms: 4,
    amenities: ["Beachfront", "Pool", "WiFi", "Kitchen", "Boat access"],
    host: {
      name: "Carlos Rodriguez",
      avatar: "https://images.unsplash.com/photo-1665065952009-a5dc00f423d4",
      superhost: true
    },
    description: "Paradise found! This exclusive island house offers ultimate privacy and luxury in a stunning tropical setting."
  }
];

const mockCategories = [
  { name: "Beachfront", icon: "🏖️" },
  { name: "Cabins", icon: "🏕️" },
  { name: "Trending", icon: "🔥" },
  { name: "City", icon: "🏙️" },
  { name: "Amazing views", icon: "🌄" },
  { name: "Luxury", icon: "💎" },
  { name: "Unique stays", icon: "🏰" },
  { name: "Pet-friendly", icon: "🐕" }
];

// Header Component
export const Header = ({ onLoginClick, onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <motion.h1 
              className="text-2xl font-bold text-primary-600 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              WanderNest
            </motion.h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Stays
            </button>
            <button className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Experiences
            </button>
            <button className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Online Experiences
            </button>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Become a Host
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Globe className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              onClick={onLoginClick}
              className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2 hover:shadow-md transition-shadow"
            >
              <Menu className="w-4 h-4 text-gray-600" />
              <User className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Mobile menu */}
          <button 
            onClick={onMenuClick}
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

// Search Bar Component
export const SearchBar = ({ onSearch }) => {
  const [searchData, setSearchData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  });

  const handleSearch = () => {
    onSearch(searchData);
  };

  return (
    <motion.div 
      className="bg-white rounded-full shadow-lg border border-gray-200 p-2 max-w-4xl mx-auto"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {/* Where */}
        <div className="flex-1 p-4">
          <label className="block text-xs font-semibold text-gray-900 mb-1">Where</label>
          <input
            type="text"
            placeholder="Search destinations"
            value={searchData.location}
            onChange={(e) => setSearchData({...searchData, location: e.target.value})}
            className="w-full text-sm text-gray-600 placeholder-gray-400 border-none outline-none"
          />
        </div>

        {/* Check in */}
        <div className="flex-1 p-4">
          <label className="block text-xs font-semibold text-gray-900 mb-1">Check in</label>
          <input
            type="date"
            value={searchData.checkIn}
            onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
            className="w-full text-sm text-gray-600 border-none outline-none"
          />
        </div>

        {/* Check out */}
        <div className="flex-1 p-4">
          <label className="block text-xs font-semibold text-gray-900 mb-1">Check out</label>
          <input
            type="date"
            value={searchData.checkOut}
            onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
            className="w-full text-sm text-gray-600 border-none outline-none"
          />
        </div>

        {/* Who */}
        <div className="flex-1 p-4">
          <label className="block text-xs font-semibold text-gray-900 mb-1">Who</label>
          <select
            value={searchData.guests}
            onChange={(e) => setSearchData({...searchData, guests: parseInt(e.target.value)})}
            className="w-full text-sm text-gray-600 border-none outline-none"
          >
            {[...Array(16)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1} guest{i > 0 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Search button */}
        <div className="p-2">
          <motion.button
            onClick={handleSearch}
            className="bg-primary-600 text-white p-4 rounded-full hover:bg-primary-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Search className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Categories Component
export const Categories = ({ selectedCategory, onCategorySelect }) => {
  return (
    <div className="flex space-x-8 overflow-x-auto py-4 px-4 scrollbar-hide">
      {mockCategories.map((category, index) => (
        <motion.button
          key={category.name}
          onClick={() => onCategorySelect(category.name)}
          className={`flex flex-col items-center space-y-2 min-w-0 pb-3 border-b-2 transition-colors ${
            selectedCategory === category.name
              ? 'border-primary-600 text-primary-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-2xl">{category.icon}</span>
          <span className="text-xs font-medium whitespace-nowrap">{category.name}</span>
        </motion.button>
      ))}
    </div>
  );
};

// Property Card Component
export const PropertyCard = ({ property, onPropertyClick, onFavorite }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    onFavorite(property.id);
  };

  return (
    <motion.div
      className="group cursor-pointer"
      onClick={() => onPropertyClick(property)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {/* Image carousel */}
      <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Image navigation */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Favorite button */}
        <button
          onClick={handleFavorite}
          className="absolute top-3 right-3 p-2 rounded-full hover:scale-110 transition-transform"
        >
          <Heart 
            className={`w-5 h-5 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-white/80 hover:text-white'}`} 
          />
        </button>

        {/* Image dots */}
        <div className="absolute bottom-3 left-1/2 -transform -translate-x-1/2 flex space-x-1">
          {property.images.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Property details */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 truncate">{property.location}</h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-current text-yellow-400" />
            <span className="text-sm font-medium">{property.rating}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm">{property.type}</p>
        <p className="text-gray-500 text-sm">{property.title}</p>
        <div className="flex items-baseline space-x-1">
          <span className="font-semibold text-gray-900">${property.price}</span>
          <span className="text-gray-500 text-sm">night</span>
        </div>
      </div>
    </motion.div>
  );
};

// Property Grid Component
export const PropertyGrid = ({ properties, onPropertyClick, onFavorite }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 py-6">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onPropertyClick={onPropertyClick}
          onFavorite={onFavorite}
        />
      ))}
    </div>
  );
};

// Property Modal Component
export const PropertyModal = ({ property, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !property) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>
        
        <motion.div
          className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image gallery */}
          <div className="relative aspect-video">
            <img
              src={property.images[currentImageIndex]}
              alt={property.title}
              className="w-full h-full object-cover rounded-t-xl"
            />
            
            {property.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Property details */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <span className="font-medium">{property.rating}</span>
                      <span>({property.reviews} reviews)</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <span>{property.guests} guests</span>
                  <span>•</span>
                  <span>{property.bedrooms} bedrooms</span>
                  <span>•</span>
                  <span>{property.bathrooms} bathrooms</span>
                </div>

                {/* Host info */}
                <div className="flex items-center space-x-4 py-6 border-y border-gray-200">
                  <img
                    src={property.host.avatar}
                    alt={property.host.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Hosted by {property.host.name}</span>
                      {property.host.superhost && (
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                          Superhost
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="text-gray-700 leading-relaxed">{property.description}</p>
                </div>

                {/* Amenities */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">What this place offers</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Wifi className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking card */}
              <div className="lg:col-span-1">
                <div className="sticky top-6 border border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-baseline justify-between mb-4">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-2xl font-bold">${property.price}</span>
                      <span className="text-gray-600">night</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <span className="text-sm font-medium">{property.rating}</span>
                      <span className="text-sm text-gray-600">({property.reviews})</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="grid grid-cols-2 gap-0 border border-gray-300 rounded-lg overflow-hidden">
                      <div className="p-3 border-r border-gray-300">
                        <div className="text-xs font-semibold text-gray-900">CHECK-IN</div>
                        <input type="date" className="text-sm text-gray-600 border-none outline-none w-full" />
                      </div>
                      <div className="p-3">
                        <div className="text-xs font-semibold text-gray-900">CHECKOUT</div>
                        <input type="date" className="text-sm text-gray-600 border-none outline-none w-full" />
                      </div>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-3">
                      <div className="text-xs font-semibold text-gray-900 mb-1">GUESTS</div>
                      <select className="text-sm text-gray-600 border-none outline-none w-full">
                        <option>1 guest</option>
                        <option>2 guests</option>
                        <option>3 guests</option>
                        <option>4 guests</option>
                      </select>
                    </div>
                  </div>

                  <motion.button
                    className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Reserve
                  </motion.button>

                  <p className="text-center text-sm text-gray-600 mt-3">
                    You won't be charged yet
                  </p>

                  <div className="space-y-3 mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">${property.price} x 5 nights</span>
                      <span className="text-gray-900">${property.price * 5}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Cleaning fee</span>
                      <span className="text-gray-900">$75</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Service fee</span>
                      <span className="text-gray-900">$150</span>
                    </div>
                    <div className="flex justify-between font-semibold pt-3 border-t border-gray-200">
                      <span>Total</span>
                      <span>${property.price * 5 + 75 + 150}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Login Modal Component
export const LoginModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>
        
        <motion.div
          className="relative bg-white rounded-xl max-w-md w-full p-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {isSignUp ? 'Sign up' : 'Log in'}
            </h2>
            <p className="text-gray-600">Welcome to WanderNest</p>
          </div>

          <form className="space-y-4">
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  placeholder="Enter your full name"
                />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                placeholder="Enter your password"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSignUp ? 'Sign up' : 'Log in'}
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                {isSignUp ? 'Log in' : 'Sign up'}
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Hero Section Component
export const HeroSection = ({ onSearch }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1588516776172-a1888d545c08"
          alt="Travel background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Not sure where to go? Perfect.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Discover amazing places to stay around the world
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SearchBar onSearch={onSearch} />
        </motion.div>
      </div>
    </div>
  );
};

// Filter Component
export const FilterBar = ({ onFilterChange }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <motion.button
          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:shadow-md transition-shadow"
          whileHover={{ scale: 1.02 }}
        >
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Filters</span>
        </motion.button>
        
        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none">
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Guest Rating</option>
          <option>Newest</option>
        </select>
      </div>

      <div className="text-sm text-gray-600">
        {mockProperties.length} stays
      </div>
    </div>
  );
};

export { mockProperties, mockCategories };

import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
  Header, 
  HeroSection, 
  Categories, 
  PropertyGrid, 
  PropertyModal, 
  LoginModal, 
  FilterBar,
  mockProperties,
  mockCategories 
} from "./components";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState(mockProperties);
  const [searchData, setSearchData] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Filter properties based on selected category
  useEffect(() => {
    if (selectedCategory) {
      const filtered = mockProperties.filter(property => {
        switch(selectedCategory) {
          case 'Beachfront':
            return property.amenities.includes('Ocean view') || property.amenities.includes('Beachfront');
          case 'Cabins':
            return property.type.includes('cabin');
          case 'Trending':
            return property.rating >= 4.8;
          case 'City':
            return property.location.includes('New York') || property.location.includes('Downtown');
          case 'Amazing views':
            return property.amenities.includes('Mountain view') || property.amenities.includes('Ocean view');
          case 'Luxury':
            return property.price >= 400;
          case 'Unique stays':
            return property.type.includes('villa') || property.type.includes('house');
          default:
            return true;
        }
      });
      setFilteredProperties(filtered);
    } else {
      setFilteredProperties(mockProperties);
    }
  }, [selectedCategory]);

  const handleSearch = (searchParams) => {
    setSearchData(searchParams);
    // In a real app, this would filter based on location, dates, etc.
    console.log('Search params:', searchParams);
  };

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
    setIsPropertyModalOpen(true);
  };

  const handleFavorite = (propertyId) => {
    console.log('Favorited property:', propertyId);
    // In a real app, this would update the user's favorites
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App min-h-screen bg-gray-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div>
              {/* Header */}
              <Header 
                onLoginClick={handleLoginClick}
                onMenuClick={handleMenuClick}
              />

              {/* Hero Section */}
              <HeroSection onSearch={handleSearch} />

              {/* Categories */}
              <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
                <div className="max-w-7xl mx-auto">
                  <Categories 
                    selectedCategory={selectedCategory}
                    onCategorySelect={setSelectedCategory}
                  />
                </div>
              </div>

              {/* Filter Bar */}
              <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto">
                  <FilterBar />
                </div>
              </div>

              {/* Property Grid */}
              <div className="max-w-7xl mx-auto py-8">
                <PropertyGrid 
                  properties={filteredProperties}
                  onPropertyClick={handlePropertyClick}
                  onFavorite={handleFavorite}
                />
              </div>

              {/* Footer */}
              <footer className="bg-gray-100 border-t border-gray-200 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Support</h3>
                      <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-primary-600">Help Center</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary-600">AirCover</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary-600">Safety information</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary-600">Supporting people with disabilities</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Community</h3>
                      <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-primary-600">Disaster relief housing</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary-600">Combating discrimination</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary-600">WanderNest.org</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Hosting</h3>
                      <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-primary-600">WanderNest your home</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary-600">AirCover for Hosts</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary-600">Hosting resources</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary-600">Community forum</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">WanderNest</h3>
                      <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-primary-600">Newsroom</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary-600">New features</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary-600">Careers</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary-600">Investors</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <p className="text-sm text-gray-600">© 2025 WanderNest, Inc.</p>
                        <div className="flex space-x-4">
                          <a href="#" className="text-sm text-gray-600 hover:text-primary-600">Privacy</a>
                          <a href="#" className="text-sm text-gray-600 hover:text-primary-600">Terms</a>
                          <a href="#" className="text-sm text-gray-600 hover:text-primary-600">Sitemap</a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600">English (US)</span>
                        <span className="text-sm text-gray-600">USD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>

              {/* Modals */}
              <PropertyModal 
                property={selectedProperty}
                isOpen={isPropertyModalOpen}
                onClose={() => setIsPropertyModalOpen(false)}
              />

              <LoginModal 
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
              />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

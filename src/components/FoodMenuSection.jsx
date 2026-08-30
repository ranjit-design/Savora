import React, { useState, useMemo, useEffect } from 'react';
import { Search, MapPin, SlidersHorizontal, X, ChevronDown, ChevronUp, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useAuth } from '../context/AuthContext';
import { DEMO_FOODS, ALL_LOCATIONS } from '../data/foodData';
import { api } from '../api';

export default function FoodMenuSection() {
  const sectionRef = useScrollAnimation();
  const gridRef = useScrollAnimation();
  const navigate = useNavigate();
  const { isAuthenticated, setRedirectAfterLogin } = useAuth();

  const [searchQuery, setSearchQuery] = useState('');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [apiFoods, setApiFoods] = useState([]);
  
  const INITIAL_COUNT = 6;
  
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const data = await api.getMenus();
        const items = data.results || data;
        
        // Add fake images/slugs to api foods so they look good in the UI
        const enhancedItems = items.map((item, index) => ({
          ...item,
          slug: item.name.toLowerCase().replace(/\s+/g, '-'),
          image: item.image || DEMO_FOODS[index % 8].image
        }));
        
        setApiFoods(enhancedItems);
      } catch (err) {
        console.error("Error fetching menus for catalog", err);
      }
    };
    fetchMenus();
  }, []);

  const allFoods = useMemo(() => {
    return [...apiFoods, ...DEMO_FOODS.slice(0, 8)];
  }, [apiFoods]);

  // Filter logic
  const filteredFoods = useMemo(() => {
    return allFoods.filter(food => {
      if (searchQuery && !food.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      if (priceMin && food.price < Number(priceMin)) {
        return false;
      }
      if (priceMax && food.price > Number(priceMax)) {
        return false;
      }
      if (selectedLocation && food.location !== selectedLocation) {
        return false;
      }
      return true;
    });
  }, [searchQuery, priceMin, priceMax, selectedLocation, allFoods]);

  const hasActiveFilters = searchQuery || priceMin || priceMax || selectedLocation;

  const clearAllFilters = () => {
    setSearchQuery('');
    setPriceMin('');
    setPriceMax('');
    setSelectedLocation('');
  };

  const handleCardClick = (food) => {
    navigate(`/dish/${food.slug}`);
  };

  return (
    <section
      id="food-catalog"
      ref={sectionRef}
      className="food-menu-section"
    >
      <div className="food-menu-container fade-in-up">

        {/* Section Header */}
        <div className="food-menu-header">
          <div className="food-menu-label">Our Collection</div>
          <h2 className="food-menu-title">
            Explore Our <span className="text-accent">Culinary</span> Offerings
          </h2>
          <div className="food-menu-squiggle">
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6C5 1 9 1 13 6C17 11 21 11 25 6C29 1 33 1 37 6" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="food-menu-subtitle">
            Search by name, filter by price or discover dishes from different locations.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="food-search-wrapper">
          <div className="food-search-bar">
            <Search size={20} className="food-search-icon" />
            <input
              type="text"
              className="food-search-input"
              placeholder="Search dishes by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="food-search"
            />
            {searchQuery && (
              <button
                className="food-search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <button
            className={`food-filter-toggle ${showFilters ? 'active' : ''}`}
            onClick={() => setShowFilters(!showFilters)}
            id="food-filter-toggle"
          >
            <SlidersHorizontal size={18} />
            <span>Filters</span>
            {hasActiveFilters && <span className="food-filter-dot"></span>}
          </button>
        </div>

        {/* Expandable Filter Panel */}
        <div className={`food-filters-panel ${showFilters ? 'open' : ''}`}>
          <div className="food-filters-inner">

            {/* Price Range */}
            <div className="food-filter-group">
              <label className="food-filter-label">Price Range (Rs.)</label>
              <div className="food-filter-price-row">
                <input
                  type="number"
                  className="food-filter-input"
                  placeholder="Min"
                  value={priceMin}
                  onChange={(e) => setPriceMin(e.target.value)}
                  min="0"
                  id="food-price-min"
                />
                <span className="food-filter-dash">—</span>
                <input
                  type="number"
                  className="food-filter-input"
                  placeholder="Max"
                  value={priceMax}
                  onChange={(e) => setPriceMax(e.target.value)}
                  min="0"
                  id="food-price-max"
                />
              </div>
            </div>

            {/* Location Filter */}
            <div className="food-filter-group">
              <label className="food-filter-label">Location</label>
              <div className="food-location-pills">
                <button
                  className={`food-location-pill ${selectedLocation === '' ? 'active' : ''}`}
                  onClick={() => setSelectedLocation('')}
                >
                  All
                </button>
                {ALL_LOCATIONS.map(loc => (
                  <button
                    key={loc}
                    className={`food-location-pill ${selectedLocation === loc ? 'active' : ''}`}
                    onClick={() => setSelectedLocation(loc)}
                  >
                    <MapPin size={13} />
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button className="food-clear-filters" onClick={clearAllFilters}>
                <X size={14} />
                Clear All Filters
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="food-results-info">
          <span className="food-results-count">
            {filteredFoods.length} {filteredFoods.length === 1 ? 'dish' : 'dishes'} found
          </span>
          {hasActiveFilters && (
            <button className="food-clear-link" onClick={clearAllFilters}>
              Reset filters
            </button>
          )}
        </div>

        {/* Food Cards Grid */}
        {filteredFoods.length > 0 ? (
          <>
            <div ref={gridRef} className="food-grid stagger-children">
              {(hasActiveFilters ? filteredFoods : (showAll ? filteredFoods : filteredFoods.slice(0, INITIAL_COUNT))).map((food) => (
                <div
                  key={food.id}
                  className="food-card food-card-clickable"
                  onClick={() => handleCardClick(food)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleCardClick(food)}
                >
                  <div className="food-card-image">
                    <img src={food.image} alt={food.name} loading="lazy" />
                    <div className="food-card-price-badge">
                      Rs.{food.price.toLocaleString()}
                    </div>
                  </div>
                  <div className="food-card-body">
                    <h3 className="food-card-name">{food.name}</h3>
                    <div className="food-card-footer">
                      <div className="food-card-location">
                        <MapPin size={14} />
                        <span>{food.location}</span>
                      </div>
                      <div className="food-card-price-text">
                        Rs.{food.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* More Options Button */}
            {!hasActiveFilters && filteredFoods.length > INITIAL_COUNT && (
              <div className="food-more-wrapper">
                <button
                  className="food-more-btn"
                  onClick={() => setShowAll(!showAll)}
                  id="food-show-more"
                >
                  {showAll ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp size={18} />
                    </>
                  ) : (
                    <>
                      <span>More Options ({filteredFoods.length - INITIAL_COUNT} more)</span>
                      <ChevronDown size={18} />
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="food-no-results">
            <div className="food-no-results-icon">
              <Search size={48} />
            </div>
            <h3>No Dishes Found</h3>
            <p>Try adjusting your search or filters to discover our culinary creations.</p>
            <button className="btn btn-outline" onClick={clearAllFilters}>
              Clear All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

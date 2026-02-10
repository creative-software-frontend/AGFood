"use client";
import { useState, useEffect } from 'react';
import ProductCard from '../ui/ProductCard';
import ProductSkeleton from '../ui/ProductSkeleton';
import SearchBar from '../ui/SearchBar';
import { CATEGORIES, MOCK_PRODUCTS } from '@/data/products';

const ProductList = () => {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Senior Dev Logic: If searching, search all products. If not, filter by tab.
  const filteredProducts = MOCK_PRODUCTS.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = p.category === activeTab;
    
    return searchQuery ? matchesSearch : matchesTab;
  });

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [activeTab, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 ">
      
      {/* Search Bar Added Here */}
      <div className="mb-10">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      {/* Category Tabs - Design untouched */}
      {!searchQuery && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-5 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`
                  w-full lg:w-auto px-8 py-4 
                  text-[16px] md:text-[18px] font-black uppercase tracking-tight
                  transition-all duration-300 rounded-sm border-2 mb-4
                  ${isActive
                    ? "bg-white border-brand-green text-red-600 shadow-[0_10px_20px_rgba(0,0,0,0.1)] scale-105 z-10"
                    : "bg-[#F8F9FA] border-transparent text-gray-500 hover:bg-gray-200 hover:border-gray-300"
                  }
                `}
              >
                <span className="relative">
                  {cat}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-brand-green animate-pulse" />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Search Results Label */}
      {searchQuery && (
        <div className="mb-8">
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">
            Showing results for: <span className="text-brand-green">"{searchQuery}"</span>
          </p>
        </div>
      )}

      {/* Products Grid - Design untouched */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 items-stretch auto-rows-fr">
        {isLoading 
          ? Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-full w-full">
                <ProductSkeleton />
              </div>
            ))
          : filteredProducts.map(product => (
              <div key={product.id} className="h-full w-full">
                <ProductCard product={product} />
              </div>
            ))
        }
      </div>

      {!isLoading && filteredProducts.length === 0 && (
        <div className="text-center py-20 text-gray-400 font-bold uppercase tracking-widest">
          {searchQuery ? "No products match your search." : "No products found in this category."}
        </div>
      )}
    </div>
  );
};

export default ProductList;
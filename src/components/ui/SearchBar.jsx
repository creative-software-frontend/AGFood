"use client";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto group">
      {/* Search Icon - Left aligned for better UX flow */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 transition-colors duration-300">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 ${value ? 'text-brand-green' : 'text-gray-400'} group-focus-within:text-brand-green`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for frozen items, chicken, etc..."
        className={`
          w-full pl-14 pr-12 py-4.5 
          bg-white border-2 border-gray-100 
          rounded-2xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] 
          placeholder:text-gray-400 text-gray-700 font-bold text-[15px]
          focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 
          focus:outline-none transition-all duration-300
          ${value ? 'border-brand-green/30' : ''}
        `}
      />

      {/* Clear Button - Only shows when there is text */}
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-gray-100 text-gray-500 hover:bg-brand-red hover:text-white transition-all duration-200 active:scale-90"
          aria-label="Clear search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
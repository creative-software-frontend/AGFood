import { useMemo } from 'react';

export const useProductFilter = (products, activeTab, searchQuery) => {
  return useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = product.category === activeTab;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [products, activeTab, searchQuery]);
};
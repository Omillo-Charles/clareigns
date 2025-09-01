
import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Product } from './types';
import { sampleProduct } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'product'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };
  
  // A simple router simulation. In a real app, use react-router-dom.
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/product/')) {
        // In a real app, you would fetch the product by ID from the hash
        navigateToProduct(sampleProduct);
      } else {
        navigateToHome();
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // check on initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleProductClick = () => {
     window.location.hash = `#/product/${sampleProduct.id}`;
  };

  const handleHomeClick = () => {
     window.location.hash = '#/';
  }

  return (
    <div className="bg-white font-sans text-brand-text">
      <Header onHomeClick={handleHomeClick} />
      <main>
        {currentPage === 'home' && <HomePage onProductClick={handleProductClick} />}
        {currentPage === 'product' && selectedProduct && (
          <ProductPage product={selectedProduct} />
        )}
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default App;


import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Product } from './types';
import { products } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'product' | 'shop' | 'about' | 'contact'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const navigateToShop = () => {
    setCurrentPage('shop');
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const navigateToAbout = () => {
    setCurrentPage('about');
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const navigateToContact = () => {
    setCurrentPage('contact');
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };
  
  // A simple router simulation. In a real app, use react-router-dom.
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/product/')) {
        const productId = parseInt(hash.split('/')[2]);
        const product = products.find(p => p.id === productId);
        if (product) {
          navigateToProduct(product);
        } else {
          navigateToHome();
        }
      } else if (hash === '#/shop') {
        navigateToShop();
      } else if (hash === '#/about') {
        navigateToAbout();
      } else if (hash === '#/contact') {
        navigateToContact();
      } else {
        navigateToHome();
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // check on initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleProductClick = (product?: Product) => {
    if (product) {
      window.location.hash = `#/product/${product.id}`;
    } else {
      // Default to first product if no specific product is provided
      window.location.hash = `#/product/${products[0].id}`;
    }
  };

  const handleHomeClick = () => {
    window.location.hash = '#/';
  }

  // Simple page components
  const ShopPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-brand-cream to-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={navigateToHome}
            className="flex items-center gap-2 text-brand-pink-dark hover:text-brand-pink-accent transition-colors duration-300 font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>

        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-text mb-6">
            Our <span className="text-brand-pink-dark">Shop</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-brand-text-light leading-relaxed">
            Discover our complete collection of elegant fashion pieces. 
            From stunning dresses to sophisticated accessories, find your perfect style.
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleProductClick(product)}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-brand-pink-light">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-xl font-serif font-bold tracking-wider drop-shadow-lg mb-2">
                    {product.name}
                  </h3>
                  <p className="text-white/90 text-sm font-light tracking-wide">
                    KES {product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-brand-cream to-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={navigateToHome}
            className="flex items-center gap-2 text-brand-pink-dark hover:text-brand-pink-accent transition-colors duration-300 font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>

        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-text mb-6">
            About <span className="text-brand-pink-dark">Clareigns</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-brand-text-light leading-relaxed">
            Our story of elegance, passion, and timeless fashion.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-brand-text mb-6">Our Story</h2>
            <p className="text-lg text-brand-text-light leading-relaxed">
              Clareigns Collection was born from a passion for creating timeless, elegant fashion that celebrates the modern woman. 
              We believe that every piece of clothing should tell a story of sophistication and grace.
            </p>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-brand-text mb-6">Our Mission</h2>
            <p className="text-lg text-brand-text-light leading-relaxed">
              To provide women with carefully curated fashion pieces that combine contemporary design with timeless elegance. 
              We focus on quality, comfort, and style that transcends seasons.
            </p>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-brand-text mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-semibold text-brand-pink-dark">Quality</h3>
                <p className="text-brand-text-light">Premium materials and expert craftsmanship</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-semibold text-brand-pink-dark">Elegance</h3>
                <p className="text-brand-text-light">Timeless design that never goes out of style</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-semibold text-brand-pink-dark">Sustainability</h3>
                <p className="text-brand-text-light">Ethical practices and responsible fashion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-brand-cream to-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={navigateToHome}
            className="flex items-center gap-2 text-brand-pink-dark hover:text-brand-pink-accent transition-colors duration-300 font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>

        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-text mb-6">
            Get in <span className="text-brand-pink-dark">Touch</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-brand-text-light leading-relaxed">
            We'd love to hear from you. Reach out to us for any questions, feedback, or just to say hello.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-brand-text mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-brand-pink-light rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-pink-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-brand-text">Phone</p>
                    <p className="text-brand-text-light">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-brand-pink-light rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-pink-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-brand-text">Email</p>
                    <p className="text-brand-text-light">hello@clareigns.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-brand-pink-light rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-pink-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-brand-text">Address</p>
                    <p className="text-brand-text-light">123 Fashion Avenue<br />Style District, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-serif font-bold text-brand-text mb-4">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg border border-brand-pink-light focus:ring-2 focus:ring-brand-pink-dark focus:border-transparent"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded-lg border border-brand-pink-light focus:ring-2 focus:ring-brand-pink-dark focus:border-transparent"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-brand-pink-light focus:ring-2 focus:ring-brand-pink-dark focus:border-transparent"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-brand-pink-dark text-white py-3 px-6 rounded-lg hover:bg-brand-pink-accent transition-colors duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white font-sans text-brand-text">
      <Header onHomeClick={handleHomeClick} />
      <main>
        {currentPage === 'home' && <HomePage onProductClick={handleProductClick} />}
        {currentPage === 'product' && selectedProduct && (
          <ProductPage product={selectedProduct} />
        )}
        {currentPage === 'shop' && <ShopPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default App;

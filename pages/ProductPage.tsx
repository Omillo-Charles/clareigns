
import React, { useState } from 'react';
import { Product } from '../types';
import Button from '../components/Button';

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(product.sizes[1] || null);
  const [mainImage, setMainImage] = useState<string>(product.imageUrl);

  const handleBackToHome = () => {
    window.location.hash = '#/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-cream to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        {/* Back Button */}
        <div className="mb-8">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleBackToHome}
            className="flex items-center gap-2 hover:bg-brand-pink-light"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Collections
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 animate-fade-in">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="flex flex-col-reverse lg:flex-row gap-4">
              <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto pr-2 lg:pr-0">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className={`w-20 h-28 object-cover rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                      mainImage === img 
                        ? 'border-brand-pink-dark shadow-elegant' 
                        : 'border-transparent hover:border-brand-pink-accent opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
              <div className="flex-1">
                <div className="relative group">
                  <img 
                    src={mainImage} 
                    alt={product.name} 
                    className="w-full h-auto object-cover rounded-2xl shadow-soft transition-all duration-500 group-hover:shadow-elegant" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center space-y-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-brand-gold font-medium">
                {product.collection}
              </p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-brand-text leading-tight">
                {product.name}
              </h1>
              <p className="text-3xl lg:text-4xl text-brand-pink-dark font-semibold">
                ${product.price.toFixed(2)}
              </p>
            </div>
            
            <p className="text-lg text-brand-text-light leading-relaxed max-w-lg">
              {product.description}
            </p>
            
            {/* Size Selection */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold tracking-wider text-brand-text uppercase">
                Select Size
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 rounded-full border-2 text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                      selectedSize === size
                        ? 'bg-brand-pink-dark text-white border-brand-pink-dark shadow-elegant'
                        : 'bg-white text-brand-text border-brand-pink-light hover:border-brand-pink-dark hover:shadow-soft'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-elegant">
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Buy Now
              </Button>
            </div>

            {/* Additional Info */}
            <div className="pt-6 border-t border-brand-pink-light/30">
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-brand-text-light">Material</p>
                  <p className="text-brand-text font-medium">Premium Cotton Blend</p>
                </div>
                <div>
                  <p className="text-brand-text-light">Care</p>
                  <p className="text-brand-text font-medium">Machine Wash Cold</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

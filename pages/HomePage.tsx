
import React from 'react';
import Button from '../components/Button';
import { collections, products } from '../constants';
import { Collection, Product } from '../types';

interface HomePageProps {
  onProductClick: (product: Product) => void;
}

const Hero: React.FC<{ onShopNowClick: () => void }> = ({ onShopNowClick }) => (
    <div className="relative h-[80vh] min-h-[600px] md:h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Screenshot 2025-09-01 200919.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight drop-shadow-lg tracking-wide">
                Elegance in Every <span className="text-brand-gold-light">Thread</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl font-light tracking-wide drop-shadow-md leading-relaxed">
                Discover curated collections that define modern femininity and timeless style. 
                Each piece tells a story of sophistication and grace.
            </p>
            <div className="mt-10 space-x-4">
                <Button variant="primary" size="lg" onClick={onShopNowClick} className="shadow-elegant">
                    Shop Now
                </Button>
                <Button variant="outline" size="lg" onClick={onShopNowClick} className="border-white text-white hover:bg-white hover:text-brand-text">
                    Explore Collections
                </Button>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-brand-cream to-transparent"></div>
    </div>
);

const CollectionCard: React.FC<{ collection: Collection; onProductClick: (product: Product) => void; index: number }> = ({ collection, onProductClick, index }) => (
    <div 
        className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant cursor-pointer transform transition-all duration-500 hover:scale-105 animate-slide-up"
        style={{ animationDelay: `${index * 100}ms` }}
        onClick={() => {
            // For now, navigate to the first product in this collection
            const firstProductInCollection = products.find(p => p.collection === collection.name);
            if (firstProductInCollection) {
                onProductClick(firstProductInCollection);
            }
        }}
    >
        <img 
            src={collection.imageUrl} 
            alt={collection.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-pink-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-white text-2xl font-serif font-bold tracking-wider drop-shadow-lg mb-2">
                {collection.name}
            </h3>
            <p className="text-white/90 text-sm font-light tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Discover the latest trends
            </p>
        </div>
        <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </div>
    </div>
);

const CollectionsGrid: React.FC<{ onProductClick: (product: Product) => void }> = ({ onProductClick }) => (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-text mb-6">
                    Featured <span className="text-brand-pink-dark">Collections</span>
                </h2>
                <p className="max-w-3xl mx-auto text-lg text-brand-text-light leading-relaxed">
                    Explore our hand-picked selections, designed for every occasion. 
                    From casual elegance to formal sophistication, find your perfect style.
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                {collections.map((collection, index) => (
                    <div
                        key={collection.id}
                        className={`${index === 0 ? 'col-span-2 row-span-2' : ''} ${index === 3 ? 'md:col-span-2' : ''}`}
                    >
                         <CollectionCard collection={collection} onProductClick={onProductClick} index={index} />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const ProductCard: React.FC<{ product: Product; onProductClick: (product: Product) => void; index: number }> = ({ product, onProductClick, index }) => (
    <div 
        className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 animate-slide-up product-card-hover"
        style={{ animationDelay: `${index * 100}ms` }}
    >
        {/* Product Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-brand-pink-light">
            <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 retina-image" 
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            
            {/* Quick Action Buttons */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-4">
                <div className="flex flex-col gap-3 w-full max-w-[200px] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Button 
                        variant="primary" 
                        size="sm" 
                        onClick={(e) => {
                            e.stopPropagation();
                            onProductClick(product);
                        }}
                        className="shadow-elegant w-full"
                    >
                        View Details
                    </Button>
                    <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={(e) => {
                            e.stopPropagation();
                            // Add to cart functionality would go here
                        }}
                        className="bg-white/90 backdrop-blur-sm border-white text-brand-text hover:bg-white w-full"
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>
            
            {/* Collection Badge */}
            <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-text text-xs font-medium rounded-full shadow-soft">
                    {product.collection}
                </span>
            </div>
            
            {/* Wishlist Button */}
            <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-pink-light shadow-soft">
                <svg className="w-5 h-5 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </button>
            
            {/* Sale Badge (if applicable) */}
            {product.price > 100 && (
                <div className="absolute top-4 right-16">
                    <span className="px-2 py-1 bg-brand-gold text-white text-xs font-bold rounded-full shadow-soft">
                        PREMIUM
                    </span>
                </div>
            )}
        </div>
        
        {/* Product Info */}
        <div className="p-4 sm:p-6 space-y-3">
            <h3 className="text-base sm:text-lg font-serif font-semibold text-brand-text leading-tight group-hover:text-brand-pink-dark transition-colors duration-300 line-clamp-2">
                {product.name}
            </h3>
            <p className="text-xl sm:text-2xl font-bold text-brand-pink-dark">
                ${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-brand-text-light leading-relaxed line-clamp-2">
                {product.description}
            </p>
            
            {/* Size Preview */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 pt-2">
                <span className="text-xs text-brand-text-light">Available sizes:</span>
                <div className="flex flex-wrap gap-1">
                    {product.sizes.slice(0, 3).map((size) => (
                        <span key={size} className="text-xs px-2 py-1 bg-brand-pink-light text-brand-text rounded">
                            {size}
                        </span>
                    ))}
                    {product.sizes.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-brand-pink-light text-brand-text rounded">
                            +{product.sizes.length - 3}
                        </span>
                    )}
                </div>
            </div>
            
            {/* Quick Actions for Mobile */}
            <div className="flex gap-2 pt-3 sm:hidden">
                <Button 
                    variant="primary" 
                    size="sm" 
                    onClick={(e) => {
                        e.stopPropagation();
                        onProductClick(product);
                    }}
                    className="flex-1 text-xs"
                >
                    View
                </Button>
                <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={(e) => {
                        e.stopPropagation();
                        // Add to cart functionality would go here
                    }}
                    className="flex-1 text-xs"
                >
                    Add to Cart
                </Button>
            </div>
        </div>
    </div>
);

const ProductsGrid: React.FC<{ onProductClick: (product: Product) => void }> = ({ onProductClick }) => (
    <section className="py-20 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-text mb-6">
                    Latest <span className="text-brand-pink-dark">Arrivals</span>
                </h2>
                <p className="max-w-3xl mx-auto text-lg text-brand-text-light leading-relaxed">
                    Discover our newest pieces, carefully curated for the modern woman. 
                    From statement dresses to everyday essentials, find your perfect match.
                </p>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
                {products.map((product, index) => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        onProductClick={onProductClick} 
                        index={index} 
                    />
                ))}
            </div>
            
            {/* View All Button */}
            <div className="text-center mt-16">
                <Button variant="outline" size="lg" onClick={() => onProductClick(products[0])} className="shadow-soft hover:shadow-elegant">
                    View All Products
                </Button>
            </div>
        </div>
    </section>
);

const HomePage: React.FC<HomePageProps> = ({ onProductClick }) => {
  return (
    <>
      <Hero onShopNowClick={() => onProductClick(products[0])} />
      <CollectionsGrid onProductClick={onProductClick} />
      <ProductsGrid onProductClick={onProductClick} />
    </>
  );
};

export default HomePage;

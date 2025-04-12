
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ArticleContent from "@/components/ArticleContent";
import { ArrowRight, Share2 } from "lucide-react";

const Index = () => {
  // Cities data - kept for future expandability
  const cities = [
    {
      cityName: "Beijing",
      description: "The ancient capital blends imperial history with modern innovation. From the Forbidden City to the 798 Art District, Beijing offers a journey through China's past and present.",
      image: "https://images.unsplash.com/photo-1584040763600-ca4fbb933f43?q=80&w=1552&auto=format&fit=crop",
    },
    {
      cityName: "Shanghai",
      description: "China's most cosmopolitan city, where Art Deco architecture meets futuristic skyscrapers. Explore the historic Bund, vibrant food scene, and hidden lane houses.",
      image: "https://images.unsplash.com/photo-1506158669146-619067572a99?q=80&w=1470&auto=format&fit=crop",
    },
    {
      cityName: "Shenzhen",
      description: "China's tech innovation hub, where cutting-edge technology like floating cars and digital identities are becoming everyday reality.",
      image: "https://images.unsplash.com/photo-1522991150239-09307070733c?q=80&w=1374&auto=format&fit=crop",
    },
    {
      cityName: "Chongqing",
      description: "The mountain city with cyberpunk vibes where subway trains run through buildings and street food creates unforgettable memories.",
      image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1471&auto=format&fit=crop",
    },
  ];

  const otherArticles = [
    {
      title: "10 Street Foods You Must Try in Shanghai",
      excerpt: "From xiaolongbao to jianbing, these are the authentic street foods that locals love.",
      category: "Food",
      image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=1470&auto=format&fit=crop",
      date: "June 15, 2023",
    },
    {
      title: "Navigating China's High-Speed Rail System",
      excerpt: "A complete guide to using China's extensive and efficient high-speed rail network like a local.",
      category: "Travel",
      image: "https://images.unsplash.com/photo-1558614225-2b15b5280174?q=80&w=1469&auto=format&fit=crop",
      date: "May 22, 2023",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Featured Article Hero Section */}
      <section className="relative pt-24 pb-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-medium text-china-red uppercase tracking-wider">Viral Culture</span>
              <span className="text-xs text-muted-foreground">April 12, 2025</span>
              <button className="ml-auto flex items-center gap-1 text-muted-foreground hover:text-china-red transition-colors text-sm">
                <Share2 size={14} />
                Share
              </button>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              iShowSpeed's China Trip: Viral Chaos, Fan Love & Netizen Reactions You Need to See
            </h1>
            
            <div className="aspect-video w-full rounded-xl overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1618394400882-09641d3a8826?q=80&w=1372&auto=format&fit=crop" 
                alt="iShowSpeed in China" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <ArticleContent />
          </div>
        </div>
      </section>

      {/* Related Cities Section */}
      <section id="cities" className="section-padding">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Featured Cities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the locations from iShowSpeed's viral journey and other fascinating Chinese cities worth exploring.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cities.map((city, index) => (
              <div key={index} className="group cursor-pointer rounded-xl overflow-hidden relative">
                <img 
                  src={city.image} 
                  alt={city.cityName} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-serif font-semibold mb-2">{city.cityName}</h3>
                  <p className="text-white/80 text-sm line-clamp-2 mb-2">{city.description}</p>
                  <a 
                    href={`#${city.cityName.toLowerCase()}`} 
                    className="inline-flex items-center text-china-gold font-medium group-hover:underline text-sm"
                  >
                    Explore {city.cityName}
                    <ArrowRight size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-china-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for the latest insider tips, viral stories, and cultural insights from China.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md text-foreground focus:outline-none"
            />
            <button className="px-6 py-3 bg-china-imperial text-white rounded-md hover:bg-china-imperial/90 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;


import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import CitySection from "@/components/CitySection";
import Footer from "@/components/Footer";

const Index = () => {
  // Featured articles data
  const articles = [
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
    {
      title: "Beijing's Hidden Hutong Cafés",
      excerpt: "Discover the charm of traditional hutongs while enjoying artisanal coffee in these hidden gems.",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?q=80&w=1206&auto=format&fit=crop",
      date: "April 10, 2023",
    },
  ];

  // Cities data
  const cities = [
    {
      cityName: "Beijing",
      description: "The ancient capital blends imperial history with modern innovation. From the Forbidden City to the 798 Art District, Beijing offers a journey through China's past and present. Discover local haunts, traditional hutongs, and the culinary delights of northern Chinese cuisine.",
      image: "https://images.unsplash.com/photo-1584040763600-ca4fbb933f43?q=80&w=1552&auto=format&fit=crop",
    },
    {
      cityName: "Shanghai",
      description: "China's most cosmopolitan city, where Art Deco architecture meets futuristic skyscrapers. Explore the historic Bund, vibrant food scene, and hidden lane houses. Shanghai's unique blend of East and West creates an atmosphere unlike anywhere else in China.",
      image: "https://images.unsplash.com/photo-1506158669146-619067572a99?q=80&w=1470&auto=format&fit=crop",
    },
    {
      cityName: "Chengdu",
      description: "The laid-back capital of Sichuan province is famous for its spicy cuisine, panda sanctuaries, and teahouse culture. Experience the relaxed pace of life while enjoying some of China's most beloved food and natural attractions.",
      image: "https://images.unsplash.com/photo-1627471478269-df1eb018c6c1?q=80&w=1287&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Featured Articles Section */}
      <section id="articles" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Insights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover authentic perspectives on Chinese culture, food, and daily life from our community of local experts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <a 
              href="#more-articles" 
              className="inline-flex items-center justify-center text-china-red hover:text-china-imperial transition-colors"
            >
              View all articles
            </a>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section id="cities" className="section-padding">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Cities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dive deep into China's diverse cities, each with its own unique character, cuisine, and hidden treasures.
            </p>
          </div>
          
          <div className="space-y-20">
            {cities.map((city, index) => (
              <CitySection
                key={index}
                cityName={city.cityName}
                description={city.description}
                image={city.image}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-china-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for the latest insider tips, city guides, and cultural insights.
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

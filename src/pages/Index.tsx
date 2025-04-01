
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
      title: "What I Missed Most: My Favorite Street Foods in Shanghai",
      excerpt: "After years of cravings, I finally reunited with these authentic flavors that bring back childhood memories.",
      category: "Food",
      image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=1470&auto=format&fit=crop",
      date: "June 15, 2023",
      personalRating: 5
    },
    {
      title: "How to Navigate China's Train System Like a Returning Local",
      excerpt: "Things have changed dramatically while I was away - here's my guide to the new high-speed rail network.",
      category: "Travel",
      image: "https://images.unsplash.com/photo-1558614225-2b15b5280174?q=80&w=1469&auto=format&fit=crop",
      date: "May 22, 2023",
      personalRating: 4
    },
    {
      title: "Finding Peace in Beijing's Hidden Cafés",
      excerpt: "These quiet spots helped me overcome reverse culture shock and reconnect with my hometown.",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?q=80&w=1206&auto=format&fit=crop",
      date: "April 10, 2023",
      personalRating: 5
    },
  ];

  // Cities data
  const cities = [
    {
      cityName: "Beijing",
      description: "The ancient capital blends imperial history with modern innovation. From the Forbidden City to the 798 Art District, Beijing offers a journey through China's past and present. Discover local haunts, traditional hutongs, and the culinary delights of northern Chinese cuisine.",
      image: "https://images.unsplash.com/photo-1584040763600-ca4fbb933f43?q=80&w=1552&auto=format&fit=crop",
      personalNote: "Coming back to Beijing after seven years abroad felt like reuniting with an old friend who'd gotten a dramatic makeover. The hutongs where I grew up still exist, but now they're nestled between gleaming skyscrapers!"
    },
    {
      cityName: "Shanghai",
      description: "China's most cosmopolitan city, where Art Deco architecture meets futuristic skyscrapers. Explore the historic Bund, vibrant food scene, and hidden lane houses. Shanghai's unique blend of East and West creates an atmosphere unlike anywhere else in China.",
      image: "https://images.unsplash.com/photo-1506158669146-619067572a99?q=80&w=1470&auto=format&fit=crop",
      personalNote: "Shanghai always felt like it belonged half in China, half somewhere else. Now that I've lived abroad, I appreciate how it bridges both worlds in a way no other Chinese city does."
    },
    {
      cityName: "Chengdu",
      description: "The laid-back capital of Sichuan province is famous for its spicy cuisine, panda sanctuaries, and teahouse culture. Experience the relaxed pace of life while enjoying some of China's most beloved food and natural attractions.",
      image: "https://images.unsplash.com/photo-1627471478269-df1eb018c6c1?q=80&w=1287&auto=format&fit=crop",
      personalNote: "I missed Chengdu's food more than anything else while I was away. That first bowl of proper Sichuan hotpot after returning brought tears to my eyes - partly from the spice, partly from joy!"
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
            <span className="text-china-red font-medium">MY JOURNAL</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stories & Reflections</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Through my eyes and experiences, I share the beauty, challenges, and joys of rediscovering my homeland after years abroad.
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
              Read more of my stories
            </a>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section id="cities" className="section-padding">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <span className="text-china-red font-medium">MY HOMETOWN(S)</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cities Through My Eyes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Rediscovering the places I once called home, with fresh perspectives gained from my time abroad.
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
                personalNote={city.personalNote}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-china-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join My Journey</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Subscribe to my newsletter for personal stories, insider tips, and reflections on rediscovering China.
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

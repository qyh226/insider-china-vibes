
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 h-full flex flex-col justify-center text-white">
        <div className="max-w-3xl">
          <span className="text-china-gold font-medium mb-2 inline-block">After 7 years abroad, I'm rediscovering my roots</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Seeing <span className="text-china-gold">Home</span> Through <br />
            New Eyes
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-white/90">
            Hi! I'm Mei Li. After years living overseas, I'm sharing my journey rediscovering the beauty, flavors, and hidden gems of my homeland through fresh perspectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#cities"
              className="px-6 py-3 bg-china-red hover:bg-china-red/90 text-white rounded-md transition-colors duration-300 flex items-center justify-center gap-2 group"
            >
              My City Guides
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#articles"
              className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 rounded-md transition-colors duration-300"
            >
              Read My Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

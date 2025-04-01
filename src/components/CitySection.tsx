
import React from "react";
import { ArrowRight } from "lucide-react";

interface CitySectionProps {
  cityName: string;
  description: string;
  image: string;
  reverse?: boolean;
  personalNote: string;
}

const CitySection = ({ cityName, description, image, reverse = false, personalNote }: CitySectionProps) => {
  return (
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center`}>
      {/* Image Section */}
      <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
        <img src={image} alt={cityName} className="w-full h-80 md:h-[500px] object-cover hover-scale" />
      </div>
      
      {/* Content Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold">{cityName}</h2>
        <div className="bg-china-gold/10 p-4 rounded-lg border-l-4 border-china-gold italic text-muted-foreground">
          "{personalNote}"
        </div>
        <p className="text-muted-foreground">{description}</p>
        <a 
          href={`#${cityName.toLowerCase()}`} 
          className="inline-flex items-center text-china-red font-medium group"
        >
          My {cityName} favorites
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default CitySection;

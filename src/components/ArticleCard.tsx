
import React from "react";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  className?: string;
}

const ArticleCard = ({ title, excerpt, category, image, date, className }: ArticleCardProps) => {
  return (
    <div className={cn("group cursor-pointer overflow-hidden rounded-xl h-full flex flex-col bg-white hover-scale", className)}>
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-china-red uppercase tracking-wider">{category}</span>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-china-red transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm">{excerpt}</p>
      </div>
    </div>
  );
};

export default ArticleCard;

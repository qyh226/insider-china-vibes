
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Explore",
      links: [
        { name: "Cities", href: "#cities" },
        { name: "Food", href: "#food" },
        { name: "Culture", href: "#culture" },
        { name: "Travel Tips", href: "#tips" },
      ],
    },
    {
      title: "About",
      links: [
        { name: "Our Story", href: "#about" },
        { name: "Team", href: "#team" },
        { name: "Contact", href: "#contact" },
        { name: "FAQs", href: "#faqs" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Use", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-china-red font-serif text-2xl font-bold mb-4">InsiderChina</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Your authentic guide to experiencing China like a local. Discover hidden gems, cultural insights, and unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  aria-label={social}
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-china-red hover:text-white transition-colors"
                >
                  <span className="capitalize text-xs">{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-china-red transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} InsiderChina. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#subscribe" className="text-china-red hover:text-china-red/80 transition-colors">
              Subscribe to our newsletter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

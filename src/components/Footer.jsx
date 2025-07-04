import React from 'react';
import { Code, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';



const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-extrabold text-white">Bravespace Tech</span>
            </div>
            <p className="text-white leading-relaxed max-w-md">
              Digital agency registered in South Africa, specialized in creating 
              websites, web and mobile applications for small businesses and startups.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>dascomsoft@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Phone className="h-4 w-4 text-blue-400" />
                <div className="space-y-1">
                  <div>🇿🇦 +27 765 976 794 (CEO Mr Joseph)</div>
                  <div>🇨🇲 +237 673 916 778 (Rep Mr Dassi)</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <MapPin className="h-4 w-4 text-blue-400" />
                <div>
                  <div>98 Nel Street, Blignautsrus AH</div>
                  <div>Walkerville, South Africa</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6" >
            <h3 className="text-xl font-extrabold text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors"style={{color:'white'}}>
                  Modern Websites
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors"style={{color:'white'}}>
                  Mobile Applications
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors"style={{color:'white'}}>
                  Web Applications
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors"style={{color:'white'}}>
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors"style={{color:'white'}}>
                  Support & Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Nouvelle section Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-extrabold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors"style={{color:'white'}}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors"style={{color:'white'}}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors"style={{color:'white'}}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors"style={{color:'white'}}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Bravespace Tech. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl">🇿🇦</div>
              <p className="text-sm font-medium text-white">Registered in South Africa</p>
              <p className="text-xs text-gray-400">Legally established agency</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🔒</div>
              <p className="text-sm font-medium text-white">Guaranteed Confidentiality</p>
              <p className="text-xs text-gray-400">Client data protection</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🌐</div>
              <p className="text-sm font-medium text-white">International Service</p>
              <p className="text-xs text-gray-400">100% online work</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
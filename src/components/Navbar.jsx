import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Version avec styles inline garantis
export default function Navbar() {
    const [open, setOpen] = useState(false);

    // Style commun pour les liens
    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        transition: 'color 0.3s ease'
    };
    
    const hoverStyle = {
        color: '#93c5fd' // blue-300
    };

    return (
        <nav className="bg-slate-800 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="w-14 h-14 flex items-center justify-center mr-3">
                        <img 
                            src='/logospace.jpg' 
                            alt='Bravespace Tech Logo' 
                            className='w-full h-full rounded-full object-cover border-2 border-blue-500 shadow-lg'
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white">Bravospace 294 Tech</h4>
                        <p className="text-xs text-blue-300 font-semibold">Build Beyond Limits</p>
                    </div>
                </div>
                
                <div className="md:hidden" onClick={() => setOpen(!open)}>
                    <button className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                
                <ul className="hidden md:flex space-x-8 text-sm font-medium">
                    <li><Link to="/" style={linkStyle} onMouseOver={(e) => e.target.style.color = hoverStyle.color} 
                        onMouseOut={(e) => e.target.style.color = linkStyle.color}>Home</Link></li>
                    <li><Link to="/about" style={linkStyle} onMouseOver={(e) => e.target.style.color = hoverStyle.color} 
                        onMouseOut={(e) => e.target.style.color = linkStyle.color}>About</Link></li>
                    <li><Link to="/services" style={linkStyle} onMouseOver={(e) => e.target.style.color = hoverStyle.color} 
                        onMouseOut={(e) => e.target.style.color = linkStyle.color}>Services</Link></li>
                    <li><Link to="/contact" style={linkStyle} onMouseOver={(e) => e.target.style.color = hoverStyle.color} 
                        onMouseOut={(e) => e.target.style.color = linkStyle.color}>Contact</Link></li>
                </ul>
            </div>
            
            {open && (
                <div className="md:hidden px-4 pb-4 bg-slate-800">
                    <ul className="space-y-4 py-4">
                        <li><Link to="/" onClick={() => setOpen(false)} style={linkStyle}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setOpen(false)} style={linkStyle}>About</Link></li>
                        <li><Link to="/services" onClick={() => setOpen(false)} style={linkStyle}>Services</Link></li>
                        <li><Link to="/contact" onClick={() => setOpen(false)} style={linkStyle}>Contact</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
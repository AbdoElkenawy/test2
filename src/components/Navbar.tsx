import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, LogIn } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Projects', href: '/projects' },
  { name: 'Join', href: '/join' },
];

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel shadow-sm shadow-primary/5">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        <Link to="/" className="text-2xl font-extrabold text-primary tracking-tighter font-headline">
          The North Shore
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 font-headline tracking-tight font-semibold">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "transition-all px-2 py-1 rounded hover:text-primary hover:bg-surface-low/50",
                  isActive 
                    ? "text-primary border-b-2 border-primary pb-1 -translate-y-0.5" 
                    : "text-on-surface-variant"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center space-x-4">
          <Code2 className="w-6 h-6 text-primary cursor-pointer hover:scale-110 transition-transform" />
          <button className="nautical-gradient text-white px-6 py-2 rounded-xl text-sm font-semibold hover:-translate-y-0.5 transition-transform shadow-md shadow-primary/10 flex items-center gap-2">
            <LogIn className="w-4 h-4" />
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

import React from 'react';
import { MessageSquare, Terminal, Globe, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface-highest text-primary font-sans text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 w-full max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0">
          <div className="text-lg font-bold text-primary mb-2 font-headline">The North Shore Coding Club</div>
          <div className="text-on-surface-variant/70">© 2024 The North Shore Coding Club. Built in Duluth.</div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 font-semibold">
          <a href="#" className="text-on-surface-variant hover:text-tertiary transition-colors">About Us</a>
          <a href="#" className="text-on-surface-variant hover:text-tertiary transition-colors">Contact</a>
          <a href="#" className="text-on-surface-variant hover:text-tertiary transition-colors">Code of Conduct</a>
          <a href="#" className="text-on-surface-variant hover:text-tertiary transition-colors">Privacy</a>
        </div>

        <div className="mt-8 md:mt-0 flex gap-6">
          <MessageSquare className="w-5 h-5 cursor-pointer hover:text-tertiary transition-colors" />
          <Terminal className="w-5 h-5 cursor-pointer hover:text-tertiary transition-colors" />
          <Globe className="w-5 h-5 cursor-pointer hover:text-tertiary transition-colors" />
          <Mail className="w-5 h-5 cursor-pointer hover:text-tertiary transition-colors" />
        </div>
      </div>
    </footer>
  );
}

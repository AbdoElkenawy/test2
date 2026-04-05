import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Users, Building2, Mail, MessageSquare } from 'lucide-react';

export function Join() {
  return (
    <div className="pt-24">
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-7/12">
            <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-primary tracking-tighter mb-6">
              Build with the <br/>North Shore.
            </h1>
            <p className="text-xl text-secondary max-w-2xl mb-10 leading-relaxed">
              Join Duluth's premier collective of developers, designers, and tech enthusiasts. From the harbor to the hills, we're coding the future of Lake Superior.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="nautical-gradient text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:-translate-y-1 transition-all shadow-lg shadow-primary/20">
                <MessageSquare className="w-5 h-5" />
                Join Our Community
              </button>
              <button className="bg-surface-highest text-primary px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-surface-container-highest transition-all">
                Stay Updated
              </button>
            </div>
          </div>
          <div className="lg:w-5/12 w-full">
            <div className="relative rounded-xl overflow-hidden shadow-2xl h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Collaborative coding" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <div className="flex items-center gap-2 mb-2 text-tertiary">
                  <Rocket className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Live from the shore</span>
                </div>
                <p className="font-headline font-bold text-primary">"The most welcoming tech community I've ever found."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-extrabold text-primary mb-2">Ways to Get Involved</h2>
          <p className="text-secondary mb-12 max-w-xl">Whether you're a seasoned architect or writing your first print statement, there's a place for you here.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <div className="md:col-span-3 bg-white p-8 rounded-xl flex flex-col justify-between hover:shadow-xl transition-shadow group border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Become a Participant</h3>
                <p className="text-secondary text-sm">Access weekly workshops, pair programming sessions, and our massive library of Duluth-specific open source projects.</p>
              </div>
              <button className="mt-6 text-primary font-bold flex items-center gap-2 text-sm">
                Get started <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="md:col-span-3 md:row-span-2 bg-primary p-10 rounded-xl text-white flex flex-col justify-between relative overflow-hidden group nautical-gradient">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-extrabold mb-4">Mentor the Next Wave</h3>
                <p className="text-blue-100 text-lg leading-relaxed max-w-sm">Share your expertise with aspiring developers. We provide the platform, you provide the guidance that shapes the local tech ecosystem.</p>
              </div>
              <div className="relative z-10">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-blue-100"><Rocket className="w-4 h-4" /> Flexible commitment</li>
                  <li className="flex items-center gap-3 text-sm text-blue-100"><Rocket className="w-4 h-4" /> Exclusive mentor mixers</li>
                  <li className="flex items-center gap-3 text-sm text-blue-100"><Rocket className="w-4 h-4" /> Recognition in our Hall of Fame</li>
                </ul>
                <button className="bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Apply to Mentor</button>
              </div>
            </div>

            <div className="md:col-span-3 bg-surface-highest p-8 rounded-xl flex flex-col justify-between hover:bg-surface-variant transition-colors group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Corporate Sponsorship</h3>
                <p className="text-secondary text-sm">Support local talent and connect with the best developers in Northern Minnesota. Sponsor events or snacks!</p>
              </div>
              <button className="mt-6 text-tertiary font-bold flex items-center gap-2 text-sm">
                Sponsorship Deck <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="bg-surface-highest rounded-xl p-1 md:p-12">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-outline-variant/10">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-extrabold text-primary mb-6">Where the Code Lives</h2>
              <p className="text-secondary mb-8 text-lg">Our Discord server is the beating heart of the club. 24/7 support, watercooler chats, and instant feedback on your latest pull request.</p>
              <button className="bg-[#5865F2] text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:opacity-90 transition-opacity">
                Connect via Discord
              </button>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="bg-on-surface rounded-xl p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  <span className="text-[10px] text-slate-500 ml-4 font-mono">north-shore-coding-club / invite.sh</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <p className="text-blue-400"># Welcome to the club!</p>
                  <p className="text-slate-400">$ npm install community --global</p>
                  <p className="text-green-400">Success! Added 1200+ members to your network.</p>
                  <p className="text-slate-400">$ cd dreams/duluth-tech</p>
                  <p className="text-slate-400">$ ./start_building.sh</p>
                  <div className="w-full h-4 bg-primary/20 animate-pulse rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-3xl mx-auto px-8 text-center">
        <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="text-4xl font-extrabold text-primary mb-4">The Shoreline Dispatch</h2>
        <p className="text-secondary text-lg mb-10">Get the best of Duluth tech delivered to your inbox every Monday. No spam, just pure code and community events.</p>
        <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-grow px-6 py-4 rounded-xl bg-surface-highest border-none focus:ring-2 focus:ring-primary focus:outline-none text-primary"
          />
          <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-container transition-colors shadow-lg shadow-primary/10 whitespace-nowrap">
            Subscribe Now
          </button>
        </form>
        <p className="mt-4 text-xs text-slate-500">By subscribing, you agree to our Code of Conduct. You can unsubscribe anytime.</p>
      </section>
    </div>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Terminal, Users, MapPin, MessageCircle } from 'lucide-react';

export function Home() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h1 className="text-6xl md:text-7xl font-extrabold text-primary tracking-tighter mb-6 leading-[1.1]">
              Code the Edge of <span className="text-tertiary">Superior</span>.
            </h1>
            <p className="text-xl text-secondary max-w-2xl mb-10 leading-relaxed">
              A community of builders, thinkers, and explorers on the shores of Duluth. We're forging the future of local tech through collaboration, mentorship, and cold-brew-fueled shipping sessions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="nautical-gradient text-white px-8 py-4 rounded-xl font-headline font-bold text-lg shadow-lg shadow-primary/20 hover:-translate-y-1 transition-transform">
                Join Our Community
              </button>
              <button className="border border-outline-variant/30 text-on-surface px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-surface-low transition-colors">
                View Projects
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
                alt="Coding in Duluth" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-surface-highest rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary-container rounded-full opacity-10 blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-surface-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold text-primary mb-4">Our Mission</h2>
              <div className="h-1.5 w-24 bg-tertiary rounded-full"></div>
            </div>
            <div className="lg:col-span-2">
              <p className="text-2xl md:text-3xl font-semibold text-secondary leading-snug">
                To cultivate a thriving technological ecosystem in Northern Minnesota. We believe Duluth's grit and creative spirit are the perfect foundation for a world-class coding culture.
              </p>
              <p className="mt-8 text-on-surface-variant text-lg leading-relaxed max-w-3xl">
                By providing the tools, network, and physical space for developers of all levels, we're ensuring that the next great wave of innovation starts right here on the North Shore. From students to veterans, every line of code adds to our local strength.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
          <svg width="600" height="200" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 180H600M100 180V100M500 180V100M100 100L300 40L500 100" stroke="currentColor" strokeWidth="8"/>
          </svg>
        </div>
      </section>

      {/* Content Bento Grid */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Featured Project */}
            <div className="md:col-span-8 bg-surface-highest rounded-xl p-8 relative overflow-hidden group">
              <div className="relative z-10">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Active Project</span>
                <h3 className="text-3xl font-bold text-primary mb-4">Lake Sensor Network</h3>
                <p className="text-secondary max-w-md mb-8">Building an open-source IoT mesh to monitor Lake Superior water conditions in real-time. Join the hardware or dashboard team.</p>
                <button className="flex items-center font-bold text-primary gap-2 group-hover:gap-4 transition-all">
                  Contribute Now <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 pointer-events-none overflow-hidden rounded-br-xl">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
                  alt="Circuitry" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Event 1 */}
            <div className="md:col-span-4 bg-primary text-white rounded-xl p-8 flex flex-col justify-between nautical-gradient shadow-xl shadow-primary/10">
              <div>
                <Calendar className="w-10 h-10 mb-4" />
                <h4 className="text-xl font-bold mb-2">Monthly Meetup</h4>
                <p className="text-white/80">Lightning talks on Rust and the local job market.</p>
              </div>
              <div className="mt-8">
                <div className="text-2xl font-bold">April 24</div>
                <div className="text-sm opacity-70">7:00 PM @ Duluth Heights</div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="md:col-span-4 bg-surface-container rounded-xl p-8 flex flex-col justify-between border border-outline-variant/10">
              <div>
                <Terminal className="w-10 h-10 text-tertiary mb-4" />
                <h4 className="text-xl font-bold text-primary mb-2">Hack Night</h4>
                <p className="text-secondary">Low-pressure open coding session. Bring your project!</p>
              </div>
              <div className="mt-8 border-t border-outline-variant/30 pt-4 flex justify-between items-center">
                <span className="font-bold text-primary">Every Tuesday</span>
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
            </div>

            {/* Featured Project 2 */}
            <div className="md:col-span-4 bg-on-surface text-surface rounded-xl p-8">
              <h4 className="text-xl font-bold mb-4 text-primary-fixed-dim">Duluth.js Hub</h4>
              <p className="text-on-surface-variant mb-6 text-sm">A centralized directory of every tech talent and startup in the Twin Ports.</p>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-on-surface bg-surface-highest overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/150?u=${i}`} 
                      alt="Avatar" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-on-surface bg-primary text-[10px] flex items-center justify-center font-bold text-white">+12</div>
              </div>
            </div>

            {/* Mini CTA */}
            <div className="md:col-span-4 bg-tertiary text-white rounded-xl p-8 flex flex-col justify-center items-center text-center">
              <h4 className="text-2xl font-bold mb-2">Build with us?</h4>
              <p className="mb-6 opacity-90 text-sm">We're always looking for mentors and project leads.</p>
              <button className="bg-white text-tertiary px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">Get in Touch</button>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-24 bg-surface-highest">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">Find Our Base</h2>
            <p className="text-lg text-secondary mb-8">We meet across the city, from Canal Park coffee shops to the Lincoln Park workspace hub. Check our Discord for tonight's precise coordinates.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="font-semibold text-primary">Downtown Duluth, MN</span>
              </div>
              <div className="flex items-center gap-4">
                <MessageCircle className="w-6 h-6 text-primary" />
                <span className="font-semibold text-primary">Discord: #the-north-shore</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl aspect-video bg-surface-low relative border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop" 
              alt="Duluth Map" 
              className="w-full h-full object-cover opacity-50 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-tertiary rounded-full animate-ping"></div>
              <div className="w-3 h-3 bg-tertiary rounded-full absolute"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

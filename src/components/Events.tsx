import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Users, Share2, ChevronRight, Filter, Terminal } from 'lucide-react';

const events = [
  {
    date: { month: 'Nov', day: '28' },
    title: 'React & Rust: High Performance Web UI',
    description: 'Learn to integrate WASM components into your Next.js application for heavy data processing.',
    time: '6:30 PM CST',
    attendees: '42 RSVP\'d',
    type: 'Workshop',
    location: 'Virtual',
    tags: ['Workshop', 'Virtual']
  },
  {
    date: { month: 'Dec', day: '05' },
    title: 'Beer & Branches: Git Strategy Session',
    description: 'A casual social at Canal Park Brewing to discuss complex rebasing and team workflows.',
    time: '7:00 PM CST',
    attendees: 'Canal Park Brewing',
    type: 'Meetup',
    location: 'In-Person',
    tags: ['Meetup', 'In-Person']
  },
  {
    date: { month: 'Dec', day: '12' },
    title: 'Tech Scene Duluth: 2025 Outlook',
    description: 'Regional industry leaders discuss the growing tech hub on the North Shore.',
    time: '5:30 PM CST',
    attendees: 'City Hall / Zoom',
    type: 'Panel',
    location: 'Hybrid',
    tags: ['Panel', 'Hybrid']
  }
];

export function Events() {
  return (
    <div className="pt-24 pb-20">
      <header className="max-w-7xl mx-auto px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <h1 className="text-primary font-headline font-extrabold text-5xl md:text-7xl tracking-tighter mb-6">
              Community <br/><span className="text-secondary opacity-80">Calendar</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              From lakeside hackathons to deep-dive syntax workshops, connect with Duluth's most active developer ecosystem.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end pb-2">
            <div className="flex gap-2 p-1 bg-surface-highest rounded-full">
              <button className="px-6 py-2 bg-white text-primary font-bold rounded-full shadow-sm">Upcoming</button>
              <button className="px-6 py-2 text-on-surface-variant font-medium hover:text-primary transition-colors">Past Events</button>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-8 mb-20">
        <div className="bg-surface-low rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row gap-12 border border-outline-variant/10">
          <div className="relative z-10 flex-1">
            <span className="inline-flex items-center gap-2 px-4 py-1 bg-tertiary/10 text-tertiary font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              <Terminal className="w-4 h-4" /> Featured Event
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-4 leading-tight">Superior Scripts <br/>Winter Hackathon</h2>
            <div className="flex flex-wrap gap-6 text-on-surface-variant mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-medium">Dec 14-15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">Duluth Tech Center</span>
              </div>
            </div>
            <p className="text-lg text-on-surface-variant mb-10 max-w-lg">
              A 48-hour challenge to build solutions for regional shipping and maritime logistics using modern web stacks.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="nautical-gradient text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:-translate-y-1 transition-all">
                RSVP Now <ChevronRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 rounded-xl font-bold text-primary border border-primary/20 hover:bg-white transition-all">Event Details</button>
            </div>
          </div>
          <div className="flex-1 min-h-[300px] rounded-3xl overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" 
              alt="Hackathon" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-64 space-y-10">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Filter By Type</h3>
            <div className="space-y-3">
              {['Meetups', 'Workshops', 'Hackathons'].map((type, i) => (
                <label key={type} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded border border-outline-variant flex items-center justify-center group-hover:border-primary transition-colors ${i === 0 || i === 2 ? 'bg-primary border-primary' : ''}`}>
                    {(i === 0 || i === 2) && <ChevronRight className="w-3 h-3 text-white rotate-90" />}
                  </div>
                  <span className="text-on-surface-variant font-medium group-hover:text-primary transition-colors">{type}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="bg-surface-low p-6 rounded-2xl border border-outline-variant/10">
            <h3 className="font-headline font-bold text-primary mb-4">Location</h3>
            <div className="flex flex-wrap gap-2">
              {['In-Person', 'Virtual', 'Hybrid'].map(loc => (
                <span key={loc} className="bg-white px-3 py-1.5 rounded-lg text-sm font-medium text-secondary shadow-sm border border-outline-variant/5">{loc}</span>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex-1 space-y-6">
          {events.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 flex flex-col md:flex-row gap-8 items-center shadow-sm hover:shadow-md transition-all border border-outline-variant/10"
            >
              <div className="w-full md:w-24 flex flex-col items-center justify-center py-4 bg-surface-low rounded-xl">
                <span className="text-secondary font-bold text-sm uppercase tracking-wider">{event.date.month}</span>
                <span className="text-3xl font-headline font-extrabold text-primary">{event.date.day}</span>
              </div>
              <div className="flex-1 space-y-2 text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-1">
                  {event.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-surface-highest text-on-surface-variant text-[10px] font-bold uppercase rounded">{tag}</span>
                  ))}
                </div>
                <h4 className="text-xl font-headline font-bold text-on-surface">{event.title}</h4>
                <p className="text-on-surface-variant text-sm line-clamp-1">{event.description}</p>
                <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-secondary font-medium">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {event.time}</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {event.attendees}</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-3 bg-surface-highest text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">RSVP</button>
                <button className="p-3 text-secondary hover:bg-surface-low rounded-xl transition-all"><Share2 className="w-5 h-5" /></button>
              </div>
            </motion.div>
          ))}
          <div className="pt-10 flex justify-center">
            <button className="px-10 py-4 bg-surface-low text-primary font-bold rounded-2xl hover:bg-surface-highest transition-all flex items-center gap-2">
              View More Events <ChevronRight className="w-5 h-5 rotate-90" />
            </button>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-8 mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-primary leading-tight">Where we meet.</h2>
            <p className="text-on-surface-variant leading-relaxed">Our primary hub is located at the <strong>Duluth Tech Collective</strong>, but we rotate through various lakeside venues and digital spaces to keep the energy flowing across the shore.</p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-outline-variant/5">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-bold text-on-surface">Main Hub</p>
                  <p className="text-sm text-on-surface-variant">211 E 2nd St, Duluth, MN 55802</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-outline-variant/5">
                <Share2 className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-bold text-on-surface">Discord Server</p>
                  <p className="text-sm text-on-surface-variant">Our virtual 24/7 clubhouse for members.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[400px] bg-surface-highest rounded-3xl overflow-hidden shadow-inner border border-outline-variant/20 relative group">
            <img 
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop" 
              alt="Duluth Map" 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg">
              <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Current Venue</p>
              <p className="text-primary font-bold">The Tech Collective</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Code2, ExternalLink, Github, LayoutGrid, List, Rocket, Calendar } from 'lucide-react';

const projects = [
  {
    id: 'DCC-041',
    title: 'Superior Wave Monitor',
    description: 'A real-time buoy data processor using Rust and WebSockets to visualize lake conditions at Canal Park.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tags: ['Rust', 'IoT', 'WebSockets'],
    status: 'Active',
    authors: ['EK', 'ML']
  },
  {
    id: 'DCC-082',
    title: 'Northlight OS',
    description: 'A lightweight microkernel designed for low-power industrial sensors in harsh maritime environments.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    tags: ['C++', 'Embedded', 'OS'],
    status: 'Archive',
    authors: ['JD']
  },
  {
    id: 'DCC-105',
    title: 'Zenith Auth Engine',
    description: 'A next-gen authentication library focusing on biometric hardware security and zero-knowledge proofs.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    tags: ['TypeScript', 'Security', 'Auth'],
    status: 'Hot',
    authors: ['AS', 'RB', 'TN']
  }
];

export function Projects() {
  return (
    <div className="pt-24">
      <header className="max-w-7xl mx-auto px-8 mb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <h1 className="text-6xl md:text-7xl font-extrabold text-primary tracking-tighter leading-none mb-6">
            Makers of the <br/><span className="text-secondary">North Shore.</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            A showcase of technical craft from our community. From industrial IoT to sleek web interfaces, these are the tools and toys built on the shores of Lake Superior.
          </p>
        </div>
        <div className="md:col-span-4 flex items-end justify-end">
          <div className="bg-surface-highest p-6 rounded-xl w-full border border-outline-variant/10">
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest block mb-2">Active Repositories</span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-primary">142</span>
              <span className="text-tertiary font-semibold flex items-center text-sm">
                ↑ 12%
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-8 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 pb-8 border-b border-outline-variant/10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-on-surface">Member Projects</h2>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {['All Frameworks', 'React', 'Rust', 'IoT', 'Python'].map((filter, i) => (
                <button 
                  key={filter}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    i === 0 ? 'bg-primary text-white' : 'bg-surface-highest text-secondary hover:bg-surface-container-highest'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-surface-low p-1.5 rounded-xl flex gap-1">
            <button className="bg-white shadow-sm p-2 rounded-lg text-primary">
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg text-on-surface-variant hover:bg-white transition-all">
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -8 }}
              className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/10"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className={`backdrop-blur-md text-white text-[10px] uppercase tracking-tighter font-bold px-3 py-1 rounded-full ${
                    project.status === 'Active' ? 'bg-primary/90' : project.status === 'Hot' ? 'bg-tertiary/90' : 'bg-secondary/90'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-primary font-mono text-xs font-bold uppercase tracking-widest">{project.id}</span>
                  <div className="h-[1px] flex-grow bg-outline-variant/20"></div>
                </div>
                <h3 className="text-2xl font-extrabold text-on-surface mb-3 leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                  {project.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex -space-x-3">
                    {project.authors.map((author) => (
                      <div key={author} className="w-8 h-8 rounded-full border-2 border-white bg-surface-highest flex items-center justify-center text-[10px] font-bold text-primary">
                        {author}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                      <Code2 className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Large Featured Project */}
          <div className="lg:col-span-2 group flex flex-col md:flex-row bg-surface-low rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/10">
            <div className="md:w-1/2 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1518433278981-167b128ee731?q=80&w=1935&auto=format&fit=crop" 
                alt="Canal Grid Control" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-1/2 p-10 flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-primary text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase">Community Choice</span>
              </div>
              <h3 className="text-3xl font-extrabold text-on-surface mb-4 leading-tight">Canal Grid Control</h3>
              <p className="text-on-surface-variant leading-relaxed mb-10">
                A decentralized infrastructure management dashboard built for municipal resilience. Utilizes a bespoke graph database for sub-millisecond route optimization.
              </p>
              <div className="mt-auto flex gap-4">
                <button className="flex-grow nautical-gradient text-white font-bold py-4 rounded-xl hover:-translate-y-1 transition-transform">Explore Source</button>
                <button className="w-14 h-14 border border-outline-variant/30 rounded-xl flex items-center justify-center hover:bg-surface-highest transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Submit CTA */}
          <div className="bg-primary p-10 rounded-[2rem] flex flex-col justify-center items-center text-center text-white relative overflow-hidden group nautical-gradient">
            <div className="relative z-10 space-y-6">
              <Rocket className="w-12 h-12 mx-auto" />
              <h3 className="text-3xl font-extrabold tracking-tight">Your project next?</h3>
              <p className="text-white/80 leading-relaxed max-w-[200px] mx-auto text-sm">
                Join the club and push your code to the shoreline.
              </p>
              <button className="bg-white text-primary px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                Submit Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Code Snippet Section */}
      <section className="max-w-7xl mx-auto px-8 mt-32">
        <div className="bg-on-surface p-12 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Code2 className="w-48 h-48 text-white" />
          </div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-surface mb-6">Build the North.</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                We aren't just shipping pixels; we're building the digital foundation of our city. Join our weekly hack nights at the tech hub.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-xl backdrop-blur-md">
                  <Calendar className="w-5 h-5 text-primary-fixed-dim" />
                  <span className="text-surface text-sm font-semibold">Tuesdays @ 6PM</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-xl backdrop-blur-md">
                  <Github className="w-5 h-5 text-primary-fixed-dim" />
                  <span className="text-surface text-sm font-semibold">The Dockside Lab</span>
                </div>
              </div>
            </div>
            <div className="bg-[#111d23] rounded-2xl p-6 border border-white/5 shadow-2xl">
              <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
                <span className="text-white/40 text-[10px] font-mono ml-4">~/duluth-coding-club/projects</span>
              </div>
              <div className="font-mono text-sm leading-relaxed space-y-1">
                <p><span className="text-primary-fixed-dim">git</span> clone <span className="text-on-surface-variant">https://github.com/northshore/lake-monitor.git</span></p>
                <p><span className="text-primary-fixed-dim">cd</span> lake-monitor</p>
                <p><span className="text-primary-fixed-dim">cargo</span> run <span className="text-outline">--release</span></p>
                <div className="pt-4 text-white/20">
                  <p>// Initializing Lake Superior Telemetry...</p>
                  <p>// Connected to Canal Park Node 04</p>
                  <p>// Stream active: 42.1kbps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

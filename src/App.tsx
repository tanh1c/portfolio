import { Search, Play, Plus, Server, Code, GraduationCap, Github, Linkedin, Mail, Zap, Monitor, Eye, EyeOff, ChevronLeft, ChevronRight, Copy, Check, Cpu, BrainCircuit, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

const TECH_LOGOS: Record<string, string> = {
  'REACT': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'NODE.JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  'REDIS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
  'TYPESCRIPT': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'NEXT.JS 14': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  'TAILWIND': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'FLASK': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
  'AZURE SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
  'DOCKER': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  'NUMPY': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',
  'SCIKIT': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
  'PYTHON': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'CUDA': '/cuda-svgrepo-com.svg',
  'VITE': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
  'ANT DESIGN': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg',
};

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'MyBK Student Portal',
    tech: ['REACT', 'NODE.JS', 'REDIS', 'AES-256-GCM'],
    desc: 'Comprehensive academic management system assisting students with CAS SSO mechanism via university API.',
    objective: 'Build an integrated portal that automatically synchronizes schedules and grades, maximizing student data security.',
    accomplishments: [
      'Secured sessions with the sophisticated AES-256-GCM algorithm.',
      'Prevented DDoS attacks via independent 3-tier Rate Limiting.',
      'Operated in production with over 200 regular visitors.'
    ],
    source: 'https://github.com/tanh1c/student-schedule',
    demo: 'https://bkstuspace.me/',
    image: '/TKBsmart.png'
  },
  {
    id: 2,
    title: 'CornerAI',
    tech: ['PYTHON', 'XGBOOST', 'FLASK', 'LLMs'],
    desc: 'An AI-powered system processing massive amounts of data to predict and analyze football odds.',
    objective: 'Develop an autonomous AI model capable of synthesizing and analyzing 38+ historical features to accurately forecast English Premier League corner outcomes.',
    accomplishments: [
      'Successfully trained Ensemble models (XGBoost, LightGBM, CatBoost).',
      'Integrated LLM (Groq) for automated interpretation of raw odds data.',
      'Deployed the complete pipeline via a REST API architecture.'
    ],
    source: 'https://github.com/tanh1c/CornerAI',
    demo: 'https://github.com/tanh1c/CornerAI',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Focus Flow',
    tech: ['NEXT.JS 14', 'TYPESCRIPT', 'DND-KIT', 'TAILWIND'],
    desc: 'Productivity management platform and deep-work environment featuring ultimate Glassmorphism UI.',
    objective: 'Provide a perfect deep-work interface seamlessly integrating a Pomodoro Timer, Kanban flow, and Ambient Sounds.',
    accomplishments: [
      'Researched and built extremely complex and fluid Glassmorphism UI.',
      'Embedded uninterrupted background YouTube Music audio streaming.',
      'Developed a virtual companion system (Focus Pets) and global shortcuts.'
    ],
    source: 'https://github.com/tanh1c/FlowFocus',
    demo: 'https://flow-focus-rose.vercel.app/',
    image: '/FocusFlow.jpg'
  },
  {
    id: 4,
    title: 'LMS Cloud DB',
    tech: ['REACT', 'FLASK', 'AZURE SQL', 'DOCKER'],
    desc: 'Modern Cloud E-Learning system following a dynamic Client-Server architectural pattern.',
    objective: 'Engineer a highly stable digital lecture management system served via Azure SQL Database.',
    accomplishments: [
      'Fully automated the CI/CD pipeline using GitHub Actions.',
      'Containerized the entire platform ecosystem using Docker.',
      'Optimized data integrity and security via Stored Procedures.'
    ],
    source: 'https://github.com/tanh1c/lms-db',
    demo: 'https://github.com/tanh1c/lms-db',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Word2Vec GPU Engine',
    tech: ['PYTHON', 'CUDA', 'SCIKIT'],
    desc: 'Hardware-maximized NLP model acceleration deployment using pure GPU structures.',
    objective: 'Maximize the computational capacity of natural language embedding matrices through Numba CUDA.',
    accomplishments: [
      'Built a custom Skip-gram & CBOW training engine from scratch.',
      'Successfully trained massive datasets containing >800M words.',
      'Optimized routines for Hierarchical Softmax & Negative Sampling.'
    ],
    source: 'https://github.com/tanh1c/Word2Vec-PyCUDA',
    demo: 'https://github.com/tanh1c/Word2Vec-PyCUDA',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Open Stake',
    tech: ['REACT', 'VITE', 'ANT DESIGN', 'HMAC-SHA256'],
    desc: 'Crypto casino simulation platform handling complex real-time data flow and state management.',
    objective: 'Develop a cryptocurrency betting platform with provably fair algorithms to ensure absolute transparency.',
    accomplishments: [
      'Implemented Provably Fair cryptographic algorithm using HMAC-SHA256.',
      'Handled complex real-time betting states and profit calculation logic.',
      'Built a seamless and intuitive gaming interface using Ant Design.'
    ],
    source: 'https://github.com/tanh1c/stake-originals-clone',
    demo: 'https://stake-originals-clone.vercel.app/',
    image: '/openstake.png'
  },
  {
    id: 7,
    title: 'Style Gallery',
    tech: ['REACT', 'TYPESCRIPT', 'TAILWIND', 'VITE'],
    desc: 'A UI/UX reference library featuring 67+ diverse design styles and an interactive sandbox.',
    objective: 'Build a comprehensive design system catalog optimized for prompt engineering and UI research.',
    accomplishments: [
      'Cataloged 67 distinct UI styles including Neumorphism and Aurora.',
      'Developed an isolated Iframe preview sandbox with full responsiveness.',
      'Implemented lazy-loading and chunking to optimize component performance.'
    ],
    source: 'https://github.com/tanh1c/style_gallery',
    demo: 'https://style-gallery-tau.vercel.app/',
    image: '/stylegallery.png'
  }
];

const AVATAR_STATUSES = [
  { id: 'cloud', label: 'Cloud', iconUrl: 'https://em-content.zobj.net/source/apple/391/cloud_2601-fe0f.png', image: '/memoji.png' },
  { id: 'working', label: 'Working', iconUrl: 'https://em-content.zobj.net/source/apple/391/laptop_1f4bb.png', image: '/working.png' },
  { id: 'sleep', label: 'Sleep', iconUrl: 'https://em-content.zobj.net/source/apple/391/zzz_1f4a4.png', image: '/sleeping.png' }
];

function ProjectCard({ proj, isGrayscale }: { proj: any; isGrayscale?: boolean }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative transition-all w-full h-full cursor-pointer [perspective:1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
        className="w-full h-full relative [transform-style:preserve-3d]"
      >
        {/* FRONT FACE */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="absolute inset-0 bg-green-500/20 group-hover:bg-green-300/40 transition-all" style={{ clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)' }} />
          <div className="relative bg-[#050a05] h-full overflow-hidden transition-all group-hover:bg-green-900/[0.2] flex flex-col m-[1px]" style={{ clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)' }}>
            <div className="aspect-[16/10] overflow-hidden relative flex-shrink-0">
              <img src={proj.image || `https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop`} alt="Project" className={`w-full h-full object-cover transition-all duration-1000 ${isGrayscale ? 'grayscale opacity-30' : 'grayscale-0'} group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100`} referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 group-hover:from-green-300/30 to-transparent h-1 w-full opacity-0 group-hover:animate-scan pointer-events-none" />
              <div className={`absolute top-4 right-4 flex flex-col items-end gap-1 transition-opacity ${isGrayscale ? 'opacity-40 group-hover:opacity-100' : 'opacity-100'}`}>
                <div className="text-[8px] font-black uppercase tracking-widest text-green-500 group-hover:text-green-300 transition-colors">REF_202{proj.id + 3}</div>
                <div className="text-[8px] font-black uppercase tracking-widest flex gap-1">
                  <span className="w-1 h-3 bg-green-500/40 group-hover:bg-green-300/40 transition-colors" />
                  <span className="w-1 h-3 bg-green-500 group-hover:bg-green-300 transition-colors" />
                  <span className="w-1 h-3 bg-green-500 group-hover:bg-green-300 transition-colors" />
                </div>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-1 relative z-10 bg-[#050a05]/50 backdrop-blur-sm">
              <div className="text-[10px] font-black tracking-[0.5em] uppercase text-green-500 group-hover:text-green-300 mb-4 flex items-center gap-2 transition-colors">
                <Zap className="w-3 h-3 group-hover:text-green-300 transition-colors" /> Alpha Module 0{proj.id}
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-black uppercase mb-4 tracking-tighter text-green-400 group-hover:text-green-200 transition-colors">{proj.title}</h3>
              <p className="text-sm opacity-60 group-hover:opacity-100 group-hover:text-green-50 leading-relaxed font-medium mb-8 flex-1 transition-all">
                {proj.desc}
              </p>
              <div className="flex flex-wrap gap-3 mt-auto relative z-20">
                {proj.tech.map((tag: string) => {
                  const iconUrl = TECH_LOGOS[tag];
                  return (
                    <span key={tag} className="flex items-center gap-2 text-[10px] md:text-xs font-black px-4 py-2 bg-green-500/5 group-hover:bg-green-300/20 border border-green-500/20 group-hover:border-green-300/50 text-green-400/80 group-hover:text-green-200 tracking-widest transition-colors">
                      {iconUrl ? (
                        <img src={iconUrl} alt={tag} className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
                      ) : null}
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-green-500 group-hover:border-green-300 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
        </div>

        {/* BACK FACE */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="absolute inset-0 bg-green-300/40 transition-all" style={{ clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)' }} />
          <div className="relative bg-[#050a05] h-full overflow-hidden transition-all flex flex-col m-[1px] p-8" style={{ clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)' }}>
            <div className="absolute inset-0 opacity-[0.03] grayscale mix-blend-screen pointer-events-none" />
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-green-300/20">
                <h3 className="font-display text-2xl font-black uppercase text-green-300 tracking-tighter">DATAFILE // {proj.title}</h3>
                <Code className="w-5 h-5 text-green-300" />
              </div>
              <div className="space-y-6 flex-1">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-black text-green-300/60 mb-2">Primary Objective</h4>
                  <p className="text-sm text-green-100/80 leading-relaxed font-medium">{proj.objective}</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-black text-green-300/60 mb-2">Key Accomplishments</h4>
                  <ul className="text-sm text-green-100/80 leading-relaxed font-medium list-disc list-inside space-y-1">
                    {proj.accomplishments?.map((acc: string, i: number) => (
                      <li key={i}>{acc}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <a href={proj.source} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="flex-1 py-3 bg-green-300/10 border border-green-300/30 text-green-300 text-[10px] font-black uppercase tracking-widest hover:bg-green-300 hover:text-black transition-colors flex items-center justify-center gap-2 cursor-pointer z-50">
                  <Github className="w-4 h-4" /> Source
                </a>
                <a href={proj.demo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className={`flex-1 py-3 bg-green-300/10 border border-green-300/30 text-green-300 text-[10px] font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer z-50 ${proj.demo && proj.demo !== '#' ? 'hover:bg-green-300 hover:text-black' : 'opacity-50 cursor-not-allowed'}`}>
                  <Monitor className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-green-300 opacity-100 transition-all duration-500 pointer-events-none" />
        </div>

      </motion.div>
    </div>
  );
}

export default function App() {
  const [activeBg, setActiveBg] = useState('/bg2.mp4');
  const [statusIndex, setStatusIndex] = useState(0);
  const [showCrewPopup, setShowCrewPopup] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [selectedCV, setSelectedCV] = useState<null | 'AI' | 'SE'>(null);
  const [isRawVideo, setIsRawVideo] = useState(false);
  const [activeSection, setActiveSection] = useState('orbit');
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [missionMode, setMissionMode] = useState<'auto' | 'manual'>('auto');
  const [activeMissionIndex, setActiveMissionIndex] = useState(0);



  const handleNextMission = () => setActiveMissionIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
  const handlePrevMission = () => setActiveMissionIndex((prev) => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 800);
          return 100;
        }
        const next = prev + Math.random() * 15;
        return next > 100 ? 100 : next;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.2, rootMargin: "-10% 0px -40% 0px" });

    ['orbit', 'dossier', 'payloads', 'missions'].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050a05] text-white font-space selection:bg-green-500/30 overflow-x-hidden scroll-smooth">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="fixed inset-0 z-[1000] bg-[#050a05] flex flex-col items-center justify-center p-8 overflow-hidden"
          >
            {/* Background Tech Noise */}
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05)_0%,transparent_70%)]" />

            <div className="w-full max-w-md space-y-12 relative z-10">
              {/* Header */}
              <div className="text-center space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block p-4 border border-green-500/20 bg-green-500/5 rounded-sm"
                  style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)' }}
                >
                  <Zap className="w-8 h-8 text-green-500 animate-pulse" />
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-display font-black tracking-[0.4em] uppercase text-white"
                >
                  System <span className="text-green-500">Boot</span>
                </motion.h2>
              </div>

              {/* Progress Bar HUD */}
              <div className="space-y-4">
                <div className="flex justify-between items-end mb-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black tracking-widest text-green-500/40 uppercase">Deploying Modules</span>
                    <span className="text-[8px] font-mono text-green-500/20 italic">
                      {loadingProgress < 30 ? ':: Initializing Core' : loadingProgress < 70 ? ':: Calibrating HUD' : ':: Ready for Pilot'}
                    </span>
                  </div>
                  <div className="text-3xl font-display font-black text-green-500">
                    {loadingProgress.toFixed(0)}<span className="text-xs ml-1 opacity-50">%</span>
                  </div>
                </div>

                <div className="flex gap-1.5 h-3 relative">
                  {Array.from({ length: 24 }).map((_, idx) => {
                    const isActive = (idx / 24) * 100 < loadingProgress;
                    return (
                      <motion.div
                        key={idx}
                        className={`flex-1 rounded-sm transition-all duration-300 ${isActive
                          ? 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]'
                          : 'bg-white/5'
                          }`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.02 }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Technical Readouts */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Uplink', status: 'Stable', col: 'text-green-500' },
                  { label: 'Neural', status: 'Syncing', col: 'text-white/40' },
                  { label: 'Armor', status: 'Verified', col: 'text-green-500/60' },
                  { label: 'Thrusters', status: 'Warmup', col: 'text-white/40' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex justify-between items-center p-3 border border-white/5 bg-white/[0.02]"
                  >
                    <span className="text-[8px] font-black tracking-[0.2em] uppercase opacity-30">{item.label}</span>
                    <span className={`text-[8px] font-black tracking-widest uppercase ${item.col}`}>{item.status}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom ID Tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              className="absolute bottom-8 text-[10px] font-mono tracking-[0.5em] text-white"
            >
              PROJECT_ID :: SYST_TANH1C_PORTFOLIO_V3.0
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section Container */}
      <section id="orbit" className="relative min-h-screen flex flex-col scroll-mt-20">
        {/* Background Video - Localized to Hero */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.video
              key={activeBg}
              initial={{ opacity: 0 }}
              animate={{ opacity: isRawVideo ? 0.95 : 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-opacity duration-1000"
            >
              <source src={activeBg} type="video/mp4" />
            </motion.video>
          </AnimatePresence>
          {/* Bottom Gradient Fade for smooth transition */}
          <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050a05] transition-opacity duration-1000 ${isRawVideo ? 'opacity-10' : 'opacity-80'}`} />
          {/* Radial Overlay for Focus */}
          <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] transition-opacity duration-1000 ${isRawVideo ? 'opacity-0' : 'opacity-40'}`} />
        </div>

        {/* Global Decorations that persist or shared in Hero */}
        <div className={`absolute inset-0 grid-bg pointer-events-none transition-opacity duration-1000 z-[1] ${isRawVideo ? 'opacity-0' : 'opacity-10'}`} />

        {/* Navigation */}
        <nav className="relative z-50 flex items-center justify-between px-8 py-6 md:px-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 flex items-center justify-center rounded-sm rotate-45">
              <div className="w-4 h-4 bg-black -rotate-45" />
            </div>
            <span className="font-display text-2xl font-black tracking-tighter text-white">tanh1c<span className="text-green-500">.</span>dev</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-[0.2em] uppercase opacity-70">
            <a href="#orbit" className="hover:text-green-400 transition-colors">Hero</a>
            <a href="#dossier" className="hover:text-green-400 transition-colors">Personal</a>
            <a href="#payloads" className="hover:text-green-400 transition-colors">Payloads</a>
            <a href="#missions" className="hover:text-green-400 transition-colors">Projects</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search knowledge base..."
                className="bg-black/40 border border-white/20 rounded-full py-2 px-6 pl-10 text-xs focus:outline-none focus:border-green-500/50 transition-all w-40 group-hover:w-60"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 opacity-50" />
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/tanh1c" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              </a>
              <a href="https://www.linkedin.com/in/chu-nguyen-tuan-anh-624a0b380/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <main id="orbit" className="relative z-10 px-8 md:px-16 flex-1 flex flex-col justify-between pb-12 pt-12 md:pt-20">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-12 bg-green-500" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-green-500">System Ready: Initializing Pilot tanh1c</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-7xl md:text-[140px] leading-[0.85] font-black tracking-tighter uppercase mb-8"
            >
              tanh1c<br /><span className="text-white/20">CS Pilot</span>
            </motion.h1>

            <div className="flex flex-col gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="max-w-xl"
              >
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-green-400 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" /> 3rd Year CS Student
                </h3>
                <p className="text-sm leading-relaxed opacity-70 font-medium mb-8 text-justify mr-4">
                  I am a third-year computer science student at Ho Chi Minh City University of Technology (HCMUT) with a strong passion for Artificial Intelligence and full-stack web development (Frontend and Backend). I am seeking opportunities to apply my knowledge to real-world projects, expand my technical expertise, and contribute to innovative solutions in AI and web technologies.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Stats and Hero Footer */}
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mt-12">
            <div className="flex gap-12 md:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-1"
              >
                <div className="text-5xl md:text-7xl font-display font-black text-neon">2027</div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-50">Graduation Orbit</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-1"
              >
                <div className="text-5xl md:text-7xl font-display font-black text-neon">36+</div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-50">Explored Repos</div>
              </motion.div>
            </div>

            <div className="flex flex-col items-end gap-6 pb-4">
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase opacity-40">Active Crew Members</span>
                <div className="flex -space-x-3 relative">
                  {['/crew1.png', '/crew2.png', '/crew3.png'].map((imgSrc, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050a05] overflow-hidden grayscale hover:grayscale-0 hover:scale-110 transition-all cursor-crosshair bg-green-500/10 relative z-10">
                      <img
                        src={imgSrc}
                        alt={`Crew Member ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <button
                    onClick={() => setShowCrewPopup(prev => !prev)}
                    className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center border-2 border-[#050a05] hover:bg-green-400 transition-colors shadow-[0_0_15px_rgba(34,197,94,0.4)] relative z-20"
                  >
                    <Plus className={`w-5 h-5 text-black transition-transform duration-300 ${showCrewPopup ? 'rotate-45' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {showCrewPopup && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-[120%] right-0 mb-2 w-64 bg-[#0a0a0a] border border-green-500/50 p-4 rounded-sm shadow-[0_0_30px_rgba(34,197,94,0.2)] z-50 flex flex-col gap-3"
                      >
                        <div className="flex justify-between items-center bg-green-500/10 p-2 border border-green-500/20">
                          <span className="text-[10px] uppercase tracking-widest font-black text-green-500 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Recruitment</span>
                        </div>
                        <p className="text-[11px] text-white/80 leading-relaxed font-medium">
                          Want to join my crew or collaborate on the next mission? Send a signal!
                        </p>
                        <div className="flex flex-col gap-2 mt-1">
                          <a href="mailto:chunguyentuananh11b6@gmail.com" className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-green-400 hover:text-green-300 transition-colors bg-green-500/10 hover:bg-green-500/20 p-2 border border-green-500/20 rounded-sm">
                            <Mail className="w-3 h-3 flex-shrink-0" /> Gmail Comms
                          </a>
                          <a href="https://www.linkedin.com/in/chu-nguyen-tuan-anh-624a0b380/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-green-400 hover:text-green-300 transition-colors bg-green-500/10 hover:bg-green-500/20 p-2 border border-green-500/20 rounded-sm">
                            <Linkedin className="w-3 h-3 flex-shrink-0" /> LinkedIn Portal
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* Dossier (CV & Personal Info) Section */}
      <section id="dossier" className="relative z-10 px-8 md:px-16 py-20 lg:py-32 bg-gradient-to-b from-[#050a05] to-[#050a05] border-y border-green-500/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

          {/* Left panel: Info */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start gap-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 w-full">
              <div
                className="relative group cursor-pointer"
                onClick={() => setStatusIndex((prev) => (prev + 1) % AVATAR_STATUSES.length)}
                title="Click to cycle status"
              >
                <div className="w-56 h-56 md:w-64 md:h-64 flex-shrink-0 rounded-full border-4 border-green-500 overflow-hidden relative bg-green-900/10">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={statusIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      src={AVATAR_STATUSES[statusIndex].image}
                      alt="Chu Nguyễn Tuấn Anh Status"
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  </AnimatePresence>
                </div>
                {/* Embedded iOS Emoji Status Badge */}
                <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-[#050a05] border-4 border-green-500 rounded-full p-1.5 md:p-2 flex items-center justify-center transform hover:scale-110 transition-transform z-20">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={statusIndex + '-icon'}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.2 }}
                      src={AVATAR_STATUSES[statusIndex].iconUrl}
                      alt="status emoji"
                      className="w-5 h-5 md:w-6 md:h-6 object-contain"
                    />
                  </AnimatePresence>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-[10px] md:text-[12px] font-black tracking-[0.3em] uppercase text-green-500/70">Personnel File</div>
                  <div className="h-px bg-green-500/30 flex-1" />
                </div>
                <h2 className="font-sans text-5xl xl:text-6xl font-black uppercase text-white tracking-tight leading-tight text-center sm:text-left">
                  Chu Nguyễn<br /><span className="text-green-500">Tuấn Anh</span>
                </h2>
                <div className="text-xl font-medium opacity-80 mt-2 tracking-wide text-center sm:text-left">
                  3rd-year Computer Science Student
                </div>
              </div>
            </div>

            {/* Grid stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 w-full bg-white/5 p-8 border border-white/10 rounded-sm">
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-black tracking-widest uppercase text-green-500/50">University Affiliation</span>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white rounded-full p-1.5 flex-shrink-0 flex items-center justify-center overflow-hidden mt-0.5">
                    <img src="/HCMUT.svg" alt="HCMUT Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-base font-medium opacity-90 leading-tight pt-1.5">Ho Chi Minh City University of Technology (HCMUT)</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-black tracking-widest uppercase text-green-500/50">Email Frequency</span>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white rounded-full p-2 flex-shrink-0 flex items-center justify-center overflow-hidden mt-0.5">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail Logo" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex items-start gap-2 min-w-0 pt-1.5">
                    <a href="mailto:chunguyentuananh11b6@gmail.com" className="text-base font-medium opacity-90 hover:text-green-400 transition-colors break-all leading-tight">chunguyentuananh11b6@gmail.com</a>
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText("chunguyentuananh11b6@gmail.com");
                        setIsCopied(true);
                        setTimeout(() => setIsCopied(false), 2000);
                      }}
                      className="p-1.5 bg-green-500/10 hover:bg-green-500/30 text-green-500 rounded-sm transition-colors border border-green-500/20 cursor-pointer flex-shrink-0"
                      title="Copy email address"
                    >
                      {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-black tracking-widest uppercase text-green-500/50">Direct Comm</span>
                <a href="tel:+84962037357" className="text-base font-medium opacity-90 hover:text-green-400 transition-colors">+84 962 037 357</a>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <span className="text-[11px] font-black tracking-widest uppercase text-green-500/50">Developer Network</span>
                <div className="flex items-center gap-4 mt-1">
                  <a href="https://github.com/tanh1c" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:text-green-400 hover:opacity-100 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/chu-nguyen-tuan-anh-624a0b380/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:text-green-400 hover:opacity-100 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <a href="mailto:chunguyentuananh11b6@gmail.com" className="w-full text-center py-4 bg-green-500/10 border border-green-500/30 text-green-400 font-bold tracking-[0.2em] uppercase text-xs hover:bg-green-500 hover:text-black transition-all">
              Initiate Contact Protocol
            </a>
          </div>

          {/* Right panel: PDF Viewer Vault */}
          <div className="lg:w-1/2 w-full h-[600px] lg:h-[800px] flex flex-col bg-[#050a05] border border-green-500/20 backdrop-blur-sm relative p-2 shadow-[0_0_30px_rgba(34,197,94,0.05)] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-white/10 mb-2 relative z-30 bg-[#050a05]">
              <div className="text-xs font-black tracking-widest text-green-500 flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${selectedCV ? 'bg-green-500 animate-pulse' : 'bg-green-500/30'}`} /> {selectedCV ? `TARGET_LOCKED: ${selectedCV}_MODULE` : 'DOSSIER_VIEWER.EXE'}
              </div>
              {selectedCV && (
                <div className="flex gap-4 items-center">
                  <button onClick={() => setSelectedCV(null)} className="text-[10px] font-bold tracking-widest text-red-500/70 hover:text-red-400 border-b border-transparent hover:border-red-500/50 transition-colors uppercase mr-1">
                    Eject Module
                  </button>
                  <a href={selectedCV === 'AI' ? '/CV_aboutAI.pdf' : '/CV_aboutSE.pdf'} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-widest text-white/50 hover:text-white border-b border-transparent hover:border-white transition-colors uppercase">
                    Expand Object
                  </a>
                </div>
              )}
            </div>

            <div className="relative flex-1 w-full h-full overflow-hidden bg-black rounded-sm border border-white/5">
              
              {/* Iframe Background layer */}
              {selectedCV && (
                <motion.iframe 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  src={selectedCV === 'AI' ? '/CV_aboutAI.pdf' : '/CV_aboutSE.pdf'} 
                  className="absolute inset-0 w-full h-full rounded-sm grayscale hover:grayscale-0 transition-opacity duration-700 z-0 bg-white" 
                  title="Dossier CV" 
                />
              )}

              {/* Left Vault Door */}
              <motion.div 
                animate={{ x: selectedCV ? "-100%" : "0%" }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#030603] to-[#0a110a] border-r-[3px] border-green-500/50 z-10 shadow-[inset_-20px_0_50px_rgba(0,0,0,0.9)] flex-shrink-0 flex flex-col items-end overflow-hidden"
              >
                {/* Industrial grid & stripes */}
                <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#fff_10px,#fff_20px)]" />
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-green-500/10 font-black text-7xl md:text-8xl -rotate-90 whitespace-nowrap font-display tracking-widest pointer-events-none">RESTRICTED</div>
                
                {/* Central locking gear - Left half */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[2px] w-8 md:w-16 h-32 md:h-48 bg-[#030603] border-y-2 border-l-2 border-green-500/50 rounded-l-xl shadow-[0_0_30px_rgba(34,197,94,0.1)] flex items-center justify-end pr-1 md:pr-2 z-20">
                  <div className="w-1 h-20 md:h-28 bg-green-500/30 rounded-full" />
                </div>
                
                <div className="w-full border-t border-green-500/10 mt-20" />
                <div className="w-full border-b border-green-500/10 mb-20 mt-auto" />
              </motion.div>

              {/* Right Vault Door */}
              <motion.div 
                animate={{ x: selectedCV ? "100%" : "0%" }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#030603] to-[#0a110a] border-l-[3px] border-green-500/50 z-10 shadow-[inset_20px_0_50px_rgba(0,0,0,0.9)] flex-shrink-0 flex flex-col items-start overflow-hidden"
              >
                {/* Industrial grid & stripes */}
                <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,#fff_10px,#fff_20px)]" />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-green-500/10 font-black text-7xl md:text-8xl rotate-90 whitespace-nowrap font-display tracking-widest pointer-events-none">DOSSIER</div>
                
                {/* Central locking gear - Right half */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[2px] w-8 md:w-16 h-32 md:h-48 bg-[#030603] border-y-2 border-r-2 border-green-500/50 rounded-r-xl shadow-[0_0_30px_rgba(34,197,94,0.1)] flex items-center justify-start pl-1 md:pl-2 z-20">
                  <div className="w-1 h-20 md:h-28 bg-green-500/30 rounded-full" />
                </div>

                <div className="w-full border-t border-green-500/10 mt-20" />
                <div className="w-full border-b border-green-500/10 mb-20 mt-auto" />
              </motion.div>

              {/* Mission Trajectory Selection Menu - Floating above closed bay doors */}
              <AnimatePresence>
                {!selectedCV && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 bg-black/50 backdrop-blur-sm"
                  >
                    {/* Glowing back-orb */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-500/5 rounded-full blur-[60px] pointer-events-none" />
                    
                    <div className="text-center mb-10 w-full relative">
                      <div className="flex items-center justify-center gap-4 mb-5">
                        <div className="w-12 h-px bg-green-500/40" />
                        <Lock className="w-6 h-6 text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                        <div className="w-12 h-px bg-green-500/40" />
                      </div>
                      <h3 className="text-base md:text-xl font-black tracking-[0.4em] md:tracking-[0.6em] uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] mb-3">Module Locked</h3>
                      <p className="text-[10px] md:text-xs text-green-500/80 tracking-widest uppercase font-bold">Authentication Requires Module Selection</p>
                    </div>
                    
                    <div className="flex flex-col xl:flex-row gap-6 lg:gap-10 relative">
                      {/* Software Engineering Module Button */}
                      <button 
                        onClick={() => setSelectedCV('SE')}
                        className="group relative flex flex-col items-center p-8 bg-[#050a05]/95 border-2 border-green-500/30 w-44 sm:w-56 overflow-hidden transition-all duration-500 hover:border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.1)] hover:shadow-[0_0_50px_rgba(34,197,94,0.3)] rounded-2xl"
                      >
                        <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500" />
                        {/* Shimmer effect */}
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-green-500/10 opacity-0 group-hover:opacity-100 group-hover:animate-[pulse_1s_infinite] transition-all" />

                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6 group-hover:bg-green-500/20 group-hover:scale-110 transition-transform duration-500 border border-green-500/20 ring-4 ring-black">
                          <Cpu className="w-8 h-8 md:w-10 md:h-10 text-green-500/80 group-hover:text-green-400 transition-colors drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                        </div>
                        <span className="font-display font-black text-2xl md:text-3xl text-white tracking-[0.2em] group-hover:text-green-300 transition-colors">SE_SYS</span>
                        <div className="w-3/4 h-px bg-green-500/20 my-4" />
                        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-green-500/60 font-bold group-hover:text-green-400/80">Software Engineering</span>
                      </button>

                      {/* Artificial Intelligence Module Button */}
                      <button 
                        onClick={() => setSelectedCV('AI')}
                        className="group relative flex flex-col items-center p-8 bg-[#050a05]/95 border-2 border-blue-500/30 w-44 sm:w-56 overflow-hidden transition-all duration-500 hover:border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] rounded-2xl"
                      >
                        <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500" />
                        {/* Shimmer effect */}
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 group-hover:animate-[pulse_1s_infinite] transition-all" />

                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 group-hover:scale-110 transition-transform duration-500 border border-blue-500/20 ring-4 ring-black">
                          <BrainCircuit className="w-8 h-8 md:w-10 md:h-10 text-blue-500/80 group-hover:text-blue-400 transition-colors drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                        </div>
                        <span className="font-display font-black text-2xl md:text-3xl text-white tracking-[0.2em] group-hover:text-blue-300 transition-colors">AI_SYS</span>
                        <div className="w-3/4 h-px bg-blue-500/20 my-4" />
                        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-blue-500/60 font-bold group-hover:text-blue-400/80">Artificial Intelligence</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>
      </section>

      {/* Global Grid for following sections */}
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-5 z-[1]" />

      {/* Skills Section - "Systems Management" */}
      <section id="payloads" className="relative z-10 px-8 md:px-16 py-32 bg-[#050a05]/95 border-y border-green-500/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header with HUD Styling */}
          <div className="mb-16 relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-green-500/30" />
            <h2 className="font-display text-5xl md:text-7xl font-black uppercase mb-6 tracking-tighter leading-tight">
              System<br /><span className="text-green-500">Payloads</span>
            </h2>
            <p className="text-lg md:text-xl opacity-70 leading-relaxed max-w-2xl font-medium">
              Core cognitive architecture and computational modules. Engineered for maximum efficiency and architectural integrity across the digital frontier.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="md:w-1/4">
              <div className="p-6 bg-green-500/5 border border-green-500/20 rounded-sm relative overflow-hidden group">
                {/* Decorative HUD Corner */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500" />

                <h4 className="text-[10px] font-black tracking-[0.3em] uppercase mb-4 text-green-500 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Diagnostics
                </h4>
                <div className="space-y-4">
                  {[
                    { label: 'Latency', value: '12ms', status: 'Optimal' },
                    { label: 'Throughput', value: '4.2 TB/s', status: 'Stable' },
                    { label: 'Uptime', value: '99.98%', status: 'Active' },
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-wider opacity-40">
                        <span>{stat.label}</span>
                        <span>{stat.status}</span>
                      </div>
                      <div className="text-sm font-display font-bold text-green-400">{stat.value}</div>
                      <div className="h-0.5 w-full bg-white/5 overflow-hidden">
                        <motion.div initial={{ x: '-100%' }} animate={{ x: '0%' }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="h-full w-1/2 bg-green-500/40" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skill Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-1 w-full">
              {[
                { name: 'TypeScript', level: '0.70', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', desc: 'Strictly typed systems architecture.', addr: '0x7F41' },
                { name: 'React/Next.js', level: '0.80', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg', desc: 'Immersive interface development.', addr: '0xA2B3' },
                { name: 'Node.js', level: '0.70', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg', desc: 'Scalable backend synchronization.', addr: '0xD4E5' },
                { name: 'Python', level: '0.86', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', desc: 'Algorithmic logic & automation.', addr: '0xE6F7' },
                { name: 'C/C++', level: '0.88', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', desc: 'High-performance core logic.', addr: '0x1C2D' },
                { name: 'Docker', level: '0.75', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg', desc: 'Isolated module deployment.', addr: '0x8B9C' },
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative transition-all duration-500"
                >
                  {/* Beveled Outer Glow / Border Layer */}
                  <div className="absolute inset-0 bg-green-500/10 group-hover:bg-green-500/30 blur-md transition-all duration-500" style={{ clipPath: 'polygon(12% 0, 100% 0, 100% 88%, 88% 100%, 0 100%, 0 12%)' }} />
                  <div className="absolute inset-0 bg-green-500/20 group-hover:bg-green-500/60 transition-all duration-500" style={{ clipPath: 'polygon(12% 0, 100% 0, 100% 88%, 88% 100%, 0 100%, 0 12%)' }} />

                  {/* Main Content Container (Glassmorphism) */}
                  <div className="relative bg-[#0a150a]/80 backdrop-blur-xl p-8 h-full transition-all group-hover:bg-green-900/10 border border-green-500/5" style={{ clipPath: 'polygon(12% 0, 100% 0, 100% 88%, 88% 100%, 0 100%, 0 12%)' }}>
                    {/* Technical Decorative Corner Brackets */}
                    <div className="absolute top-2 left-10 text-[6px] font-black text-green-500/30 uppercase tracking-widest">Sector_{skill.addr}</div>
                    <div className="absolute -left-1 top-4 w-5 h-[1px] bg-green-500/40 group-hover:w-10 transition-all" />
                    <div className="absolute top-1/2 -right-1 w-[1px] h-8 bg-green-500/20" />

                    {/* Icon and Meta Info */}
                    <div className="flex justify-between items-start mb-8 relative">
                      <div className="p-2 bg-green-500/5 border border-green-500/20 rounded-sm transition-transform duration-500 group-hover:scale-110 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                        <img src={skill.iconSrc} alt={skill.name} className="w-12 h-12 object-contain" />
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="text-[9px] font-black tracking-[0.2em] text-green-500/60 flex items-center gap-1 group-hover:text-green-400 transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" /> STATUS: ACTIVE
                        </div>
                        <div className="text-[9px] font-mono text-white/20">{skill.addr}::DATA_READY</div>
                      </div>
                    </div>

                    {/* Title and Content */}
                    <div className="relative">
                      <h3 className="text-2xl font-display font-black tracking-tight uppercase mb-3 text-white group-hover:text-green-400 transition-colors leading-none">
                        {skill.name}
                      </h3>
                      <p className="text-sm opacity-60 mb-10 leading-relaxed font-medium min-h-[48px]">
                        {skill.desc}
                      </p>
                    </div>

                    {/* Segmented Progress Bar HUD Design */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-end">
                        <div className="text-[10px] font-black tracking-[0.3em] uppercase text-green-500/50">Core_Efficiency</div>
                        <div className="text-lg font-display font-black text-green-500">{(parseFloat(skill.level) * 100).toFixed(0)}<span className="text-[10px] ml-1 opacity-50">%</span></div>
                      </div>

                      <div className="flex gap-1 h-2 relative">
                        {/* Base Segments */}
                        {Array.from({ length: 20 }).map((_, idx) => {
                          const isActive = idx / 20 < parseFloat(skill.level);
                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 0.5 + (idx * 0.05) }}
                              className={`flex-1 h-full rounded-[1px] transition-all duration-500 ${isActive
                                ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]'
                                : 'bg-white/5'
                                }`}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* Hover Module Active Message */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute bottom-2 right-8 pointer-events-none"
                    >
                      <span className="text-[7px] font-black tracking-[0.5em] uppercase text-green-500 animate-pulse">
                        &lt; Module_Link_Engaged &gt;
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - "Completed Missions" */}
      <section id="missions" className="relative z-10 px-8 md:px-16 py-32 bg-[#050a05] scroll-mt-20 overflow-hidden">
        {/* Decorative Background HUD Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] -ml-64 -mb-64" />

        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-start justify-between mb-24 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-green-500" />
                <span className="text-xs font-black tracking-[0.5em] uppercase text-green-500">Missions Database</span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Logged<br /><span className="text-white/20">Operations</span>
              </h2>
            </div>
            <div className="max-w-md flex flex-col items-end gap-6">
              <p className="text-base md:text-lg opacity-60 leading-relaxed font-medium mb-4 text-right z-10">
                Documentation of successful deployments and architectural breakthroughs achieved during deep-space development cycles.
              </p>

              {/* Mode Control Panel */}
              <div className="flex items-center gap-4 z-10 relative">
                <div className="flex items-center gap-2 bg-[#050a05] p-1 border border-green-500/20 rounded-sm shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                  <button
                    onClick={() => setMissionMode('auto')}
                    className={`px-4 py-2 text-[9px] font-black uppercase tracking-widest transition-all rounded-sm ${missionMode === 'auto' ? 'bg-green-500 text-[#050a05] shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'text-green-500/50 hover:text-green-400'}`}
                  >
                    Auto Scan
                  </button>
                  <button
                    onClick={() => setMissionMode('manual')}
                    className={`px-4 py-2 text-[9px] font-black uppercase tracking-widest transition-all rounded-sm ${missionMode === 'manual' ? 'bg-green-500 text-[#050a05] shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'text-green-500/50 hover:text-green-400'}`}
                  >
                    Manual Override
                  </button>
                </div>

                {missionMode === 'manual' && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-2 items-center text-[9px] font-black uppercase tracking-widest text-green-500/80"
                  >
                    Target Lock: {PROJECTS_DATA[activeMissionIndex].title}
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Scrolling/Carousel Container */}
          <div className="relative w-[100vw] left-[50%] -translate-x-[50%] overflow-hidden py-8 pointer-events-auto z-10 min-h-[650px] flex items-center justify-center">
            {missionMode === 'auto' ? (
              <div
                className="flex transition-all duration-500 w-max animate-marquee"
                style={{ animationDuration: '320s' }}
              >
                {Array.from({ length: 8 }).flatMap(() => PROJECTS_DATA).map((proj, idx) => (
                  <div key={idx} className="w-[85vw] md:w-[500px] h-[600px] flex-shrink-0 mx-4 md:mx-6">
                    <ProjectCard proj={proj} isGrayscale={false} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="relative w-full max-w-7xl h-full flex justify-center items-center">
                <AnimatePresence initial={false}>
                  {PROJECTS_DATA.map((proj, idx) => {
                    const offset = idx - activeMissionIndex;
                    let normalizedOffset = offset;
                    // Connect edges for seamless looping visually
                    if (offset < -1 && activeMissionIndex === PROJECTS_DATA.length - 1 && idx === 0) normalizedOffset = 1;
                    if (offset > 1 && activeMissionIndex === 0 && idx === PROJECTS_DATA.length - 1) normalizedOffset = -1;

                    // Hide elements outside immediate left/right bounds
                    const isVisible = Math.abs(normalizedOffset) <= 1;
                    if (!isVisible) return null;

                    return (
                      <motion.div
                        key={proj.id}
                        initial={{ opacity: 0, x: normalizedOffset > 0 ? "100%" : "-100%", scale: 0.8 }}
                        animate={{
                          opacity: normalizedOffset === 0 ? 1 : 0.3,
                          x: normalizedOffset === 0 ? "0%" : normalizedOffset > 0 ? "90%" : "-90%",
                          scale: normalizedOffset === 0 ? 1 : 0.8,
                          zIndex: normalizedOffset === 0 ? 20 : 10,
                          filter: normalizedOffset === 0 ? 'blur(0px)' : 'blur(4px)'
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
                        className="absolute w-[80vw] md:w-[500px]"
                      >
                        <div className="h-[600px] w-full">
                          <ProjectCard proj={proj} isGrayscale={normalizedOffset !== 0} />
                        </div>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>

                {/* Overlaid Navigation Buttons */}
                <div className="absolute top-1/2 -translate-y-1/2 w-[95vw] md:w-[650px] flex justify-between z-30 pointer-events-none">
                  <button onClick={handlePrevMission} className="pointer-events-auto p-4 bg-black/60 text-green-500 border border-green-500/30 hover:bg-green-500/20 hover:scale-110 backdrop-blur-md transition-all rounded-sm shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                  </button>
                  <button onClick={handleNextMission} className="pointer-events-auto p-4 bg-black/60 text-green-500 border border-green-500/30 hover:bg-green-500/20 hover:scale-110 backdrop-blur-md transition-all rounded-sm shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                  </button>
                </div>
              </div>
            )}

            {/* Fade overlays for smooth scrolling effect in auto mode */}
            {missionMode === 'auto' && (
              <>
                <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#050a05] to-transparent pointer-events-none z-20" />
                <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#050a05] to-transparent pointer-events-none z-20" />
              </>
            )}
          </div>
        </div>
      </section>



      {/* Footer / Mission End */}
      <footer id="chronicles" className="relative z-10 px-8 md:px-16 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 bg-black/60 backdrop-blur-md scroll-mt-20">
        <div className="text-[10px] font-medium tracking-[0.2em] uppercase opacity-40">
          © 2026 tanh1c. All rights reserved. Terminal Authorized access only.
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-[10px] font-medium opacity-50 flex items-center gap-2 mb-4">
            <Mail className="w-3 h-3 text-green-500" /> chunguyentuananh11b6@gmail.com
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-green-500 transition-colors text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100">Protocol</a>
            <a href="#" className="hover:text-green-500 transition-colors text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100">Privacy</a>
            <a href="#" className="hover:text-green-500 transition-colors text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100">Connect</a>
          </div>
        </div>
      </footer>

      {/* Vertical HUD Sidebar Panel */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] flex items-stretch gap-2">
        {/* Buttons Panel */}
        <div className="flex flex-col gap-3">
          {[
            { id: 'init', label: 'INIT', icon: Code, tooltip: 'Launch Terminal', color: 'green', action: () => { } },
            { id: 'comm', label: 'COMM', icon: Mail, tooltip: 'Contact Mission', color: 'white', action: () => { window.location.hash = '#dossier'; } },
            { id: 'phase', label: 'PHASE', icon: Zap, tooltip: 'Shift Phase', color: 'green', action: () => setActiveBg(prev => prev === '/bg1.mp4' ? '/bg2.mp4' : '/bg1.mp4') },
            { id: 'view', label: 'VIEW', icon: isRawVideo ? Eye : EyeOff, tooltip: isRawVideo ? 'Restore Filter' : 'Clear View', color: isRawVideo ? 'green' : 'white', action: () => setIsRawVideo(!isRawVideo) },
          ].map((item, i) => (
            <motion.button
              key={item.id}
              onClick={item.action}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative flex items-center justify-center w-20 h-20 transition-all ${item.color === 'green' || item.id === 'view' ? 'text-green-400' : 'text-white opacity-40 hover:opacity-100'
                }`}
            >
              {/* Cornered Background Element - Border Layer */}
              <div
                className={`absolute inset-0 transition-all duration-300 ${item.color === 'green' ? 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]' : 'bg-green-500/20 group-hover:bg-green-500/60'
                  }`}
                style={{
                  clipPath: 'polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%)'
                }}
              />

              {/* Inner Background Content Layer */}
              <div
                className="absolute inset-[1.5px] bg-[#050a05] backdrop-blur-xl"
                style={{
                  clipPath: 'polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%)'
                }}
              />

              <div className="relative z-10 flex flex-col items-center gap-1">
                <span className="text-[7px] font-black tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100">{item.label}</span>
                <item.icon className={`w-5 h-5 ${item.color === 'green' ? 'drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]' : ''}`} />
              </div>

              {/* Tooltip */}
              <span className="absolute right-[110%] top-1/2 -translate-y-1/2 mr-4 bg-green-500 text-black text-[8px] font-black px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap tracking-widest uppercase pointer-events-none">
                {item.tooltip}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Integrated Navigation Sidebar (Parallel Indicators) - Bold Green Outer Border */}
        <div className="flex flex-col justify-between py-2 px-1 bg-white/[0.02] border border-green-500/30 rounded-full backdrop-blur-sm shadow-[0_0_20px_rgba(34,197,94,0.05)]">
          {[
            { id: 'orbit', label: 'Hero' },
            { id: 'dossier', label: 'Personal' },
            { id: 'payloads', label: 'Payloads' },
            { id: 'missions', label: 'Projects' }
          ].map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              className="group relative flex items-center justify-center h-1/4 px-1"
            >
              <motion.div
                animate={{
                  height: activeSection === nav.id ? '28px' : '12px',
                  backgroundColor: activeSection === nav.id ? '#22c55e' : 'rgba(34,197,94,0.1)',
                  opacity: activeSection === nav.id ? 1 : 0.3
                }}
                className={`w-1.5 rounded-full transition-all duration-300 ${activeSection === nav.id ? 'shadow-[0_0_15px_#22c55e]' : 'group-hover:bg-green-500/50 group-hover:opacity-60'}`}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Background Ambience Lines */}
      <div className="fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent z-50" />
      <div className="fixed top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-green-500/10 to-transparent z-50" />
    </div>
  );
}

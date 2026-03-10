import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Terminal,
    User,
    Code,
    Briefcase,
    Mail,
    Github,
    Linkedin,
    ExternalLink,
    Star,
    Calendar,
    MapPin,
    GraduationCap
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface PortfolioContentProps {
    onBack: () => void;
}

type Section = 'about' | 'skills' | 'projects' | 'experience' | 'contact';

const PortfolioContent: React.FC<PortfolioContentProps> = () => {
    const [activeSection, setActiveSection] = useState<Section>('about');

    const sections = [
        { id: 'about' as Section, label: 'About', icon: User },
        { id: 'skills' as Section, label: 'Skills', icon: Code },
        { id: 'projects' as Section, label: 'Projects', icon: Terminal },
        { id: 'experience' as Section, label: 'Experience & Education', icon: GraduationCap },
        { id: 'contact' as Section, label: 'Contact', icon: Mail },
    ];

    const renderAbout = () => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full"
        >
            <div className="text-terminal-green text-xl font-bold mb-4 flex-shrink-0">~/about</div>
            <div className="text-center mb-6 flex-shrink-0" style={{ fontFamily: "'Kaushan Script', cursive", color: 'var(--terminal-green)' }}>
                <span className="text-3xl md:text-4xl">Ziouani Yanis</span>
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-3 text-terminal-foreground">
                <p className="leading-relaxed">
                    Hi! I'm an <span className="text-terminal-green font-semibold">AI Engineer</span> & <span className="text-terminal-green font-semibold">Data Scientist</span> passionate about building intelligent systems and extracting insights from data.
                    I design and deploy machine learning models, work with large-scale datasets, and create solutions that bridge AI research and real-world applications.
                </p>
                <p className="leading-relaxed">
                    I specialize in deep learning, NLP, computer vision, and data pipelines. From prototyping to production, I enjoy turning complex data into actionable intelligence.
                    When I'm not training models, you can find me exploring the latest AI research or contributing to open-source ML projects.
                </p>
                <div className="flex items-center space-x-4 mt-6">
                    <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-terminal-green" />
                        <span>Location: Paris</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-terminal-green" />
                        <span>Available for opportunities</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    const renderSkills = () => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
        >
            <div className="text-terminal-green text-xl font-bold mb-4">~/skills</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { category: 'Programming & Development', skills: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'PyTorch', 'LangChain', 'SQL', 'Git', 'GitHub', 'Linux'] },
                    { category: 'Machine Learning & Deep Learning', skills: ['NLP', 'Computer Vision'] },
                    { category: 'MLOps & Deployment', skills: ['Docker', 'FastAPI', 'MLflow', 'CI/CD'] },
                    { category: 'Big Data & Data Engineering', skills: ['Hadoop', 'Talend'] },
                    { category: 'Databases', skills: ['Relational', 'NoSQL'] },
                    { category: 'Generative AI', skills: ['LLMs', 'Fine-tuning', 'RAG', 'AI Agents'] },
                ].map((skillGroup, index) => (
                    <motion.div
                        key={skillGroup.category}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="space-y-2"
                    >
                        <h3 className="text-terminal-green font-semibold">{skillGroup.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.skills.map((skill) => (
                                <span key={skill} className="px-2 py-1 bg-terminal-green/10 text-terminal-green rounded text-sm border border-terminal-green/30">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );

    const renderProjects = () => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
        >
            <div className="text-terminal-green text-xl font-bold mb-4">~/projects</div>
            <div className="space-y-6">
                {[
                    {
                        title: 'ESTIN Internal Regulation RAG System',
                        description: 'RAG (Retrieval-Augmented Generation) system to query the internal regulations of ESTIN. Features a web chat interface, vector search with Pinecone, LangGraph agent, conversation memory, cited sources, and Markdown rendering. Built with FastAPI, Groq LLM, and HuggingFace embeddings.',
                        technologies: ['Python', 'FastAPI', 'LangGraph', 'Pinecone', 'Groq', 'HuggingFace'],
                        github: 'https://github.com/Ziwazou/ESTIN_INTERNAL_REGULATION_RAG_SYSTEM',
                        demo: 'https://github.com/Ziwazou/ESTIN_INTERNAL_REGULATION_RAG_SYSTEM',
                        featured: true
                    },
                    {
                        title: 'Facial Emotions Recognition',
                        description: 'Deep Learning model (ViT) to classify emotions from facial images. Computer vision project for emotion detection using Vision Transformer architecture.',
                        technologies: ['Python', 'PyTorch', 'ViT', 'Computer Vision', 'Deep Learning'],
                        github: 'https://github.com/tarekichalalen2002/facial-emotions-recognition',
                        demo: 'https://github.com/tarekichalalen2002/facial-emotions-recognition',
                        featured: true
                    }
                ].map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`p-4 border rounded-lg ${project.featured ? 'border-terminal-green bg-terminal-green/5' : 'border-terminal-green/30'}`}
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center space-x-2">
                                <h3 className="text-terminal-green font-semibold">{project.title}</h3>
                                {project.featured && <Star className="w-4 h-4 text-terminal-green fill-current" />}
                            </div>
                            <div className="flex space-x-2">
                                <a href={project.github} className="text-terminal-green hover:text-terminal-greenBright transition-colors">
                                    <Github className="w-4 h-4" />
                                </a>
                                <a href={project.demo} className="text-terminal-green hover:text-terminal-greenBright transition-colors">
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                        <p className="text-terminal-foreground/80 text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="px-2 py-1 bg-terminal-green/10 text-terminal-green rounded text-xs">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );

    const renderExperience = () => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
        >
            <div className="text-terminal-green text-xl font-bold mb-4">~/experience & education</div>

            {/* Education */}
            <div>
                <h3 className="text-terminal-green font-semibold mb-3 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    Educationx
                </h3>
                <div className="space-y-4">
                    {[
                        { degree: 'MSc Data Science & Business Intelligence', institution: 'Epitech Paris', period: 'Since Jan 2026' },
                        { degree: 'Higher Cycle - AI & Data Science', institution: 'ESTIN Béjaia', period: '2022 - 2025', topics: ['Deep Learning', 'Reinforcement Learning', 'Advanced Databases', 'Data Analysis'] },
                        { degree: 'Preparatory Cycle', institution: 'ESTIN Béjaia', period: '2020 - 2022', topics: ['Mathematics', 'OOP', 'Machine Architectures', 'Operating Systems'] },
                        { degree: 'Baccalaureate - Experimental Sciences', institution: 'Mouloud Kacem High School, Oran', period: '2020', topics: ['Very Good'] },
                    ].map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-4 border border-terminal-green/30 rounded-lg"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <h4 className="text-terminal-green font-semibold">{edu.degree}</h4>
                                    <p className="text-terminal-foreground/80">{edu.institution}</p>
                                </div>
                                <span className="text-terminal-green/60 text-sm">{edu.period}</span>
                            </div>
                            {edu.topics && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {edu.topics.map((topic) => (
                                        <span key={topic} className="px-2 py-0.5 bg-terminal-green/10 text-terminal-green rounded text-xs">
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Experience */}
            <div>
                <h3 className="text-terminal-green font-semibold mb-3 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Experience
                </h3>
                <div className="space-y-4">
                    {[
                        {
                            position: 'Software Engineer',
                            company: 'Sonatrach Hassi R\'mel, Algeria',
                            period: '2024',
                            description: 'Design and development of a document management platform with AI integration for automatic summarization of large PDF files.',
                        },
                    ].map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-4 border border-terminal-green/30 rounded-lg"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <h4 className="text-terminal-green font-semibold">{job.position}</h4>
                                    <p className="text-terminal-foreground/80">{job.company}</p>
                                </div>
                                <span className="text-terminal-green/60 text-sm">{job.period}</span>
                            </div>
                            <p className="text-terminal-foreground text-sm">{job.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );

    const renderContact = () => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
        >
            <div className="text-terminal-green text-xl font-bold mb-4">~/contact</div>
            <div className="space-y-4">
                <p className="text-terminal-foreground">
                    I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!
                </p>
                <div className="space-y-3">
                    <a href="mailto:yanisziouani4@gmail.com" className="flex items-center space-x-3 text-terminal-foreground hover:text-terminal-green transition-colors">
                        <Mail className="w-5 h-5 text-terminal-green" />
                        <span>yanisziouani4@gmail.com</span>
                    </a>
                    <a href="https://github.com/Ziwazou" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-terminal-foreground hover:text-terminal-green transition-colors">
                        <Github className="w-5 h-5 text-terminal-green" />
                        <span>github.com/Ziwazou</span>
                    </a>
                    <a href="https://www.linkedin.com/in/yanis-ziouani-826381201/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-terminal-foreground hover:text-terminal-green transition-colors">
                        <Linkedin className="w-5 h-5 text-terminal-green" />
                        <span>linkedin.com/in/yanis-ziouani</span>
                    </a>
                </div>
                <div className="mt-6">
                    <p className="text-terminal-green mb-2">Quick Actions:</p>
                    <div className="flex flex-wrap gap-2">
                        <a href="mailto:yanisziouani4@gmail.com" className="px-3 py-1 bg-terminal-green/10 text-terminal-green rounded border border-terminal-green/30 hover:bg-terminal-green/20 transition-colors">
                            Send Email
                        </a>
                        <button className="px-3 py-1 bg-terminal-green/10 text-terminal-green rounded border border-terminal-green/30 hover:bg-terminal-green/20 transition-colors">
                            View Resume
                        </button>
                        <button className="px-3 py-1 bg-terminal-green/10 text-terminal-green rounded border border-terminal-green/30 hover:bg-terminal-green/20 transition-colors">
                            Schedule Call
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    const renderContent = () => {
        switch (activeSection) {
            case 'about': return renderAbout();
            case 'skills': return renderSkills();
            case 'projects': return renderProjects();
            case 'experience': return renderExperience();
            case 'contact': return renderContact();
            default: return renderAbout();
        }
    };

    return (
        <div className="terminal-window max-w-6xl w-full mx-auto h-[90vh] flex flex-col">
            <div className="terminal-header">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-terminal-foreground ml-4">Portfolio</span>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden flex-col">
                {/* Top: Profile image + Main content */}
                <div className="flex flex-1 overflow-hidden">
                    {/* Profile image */}
                    <div className="w-48 md:w-56 flex-shrink-0 border-r border-terminal-green/30 p-4 flex flex-col items-center">
                        <div className="self-end mb-4">
                            <ThemeToggle />
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-terminal-green/50 bg-terminal-green/10">
                                <img
                                    src="/moi.jpeg"
                                    alt="Yanis Ziouani"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                                <div className="absolute inset-0 hidden flex items-center justify-center bg-terminal-green/10 text-terminal-green text-2xl font-bold" data-fallback>
                                    YZ
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-6 overflow-y-auto flex flex-col">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSection}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className={activeSection === 'about' ? 'flex-1 flex flex-col justify-center min-h-full' : ''}
                            >
                                {renderContent()}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Bottom: Navigation */}
                <div className="border-t border-terminal-green/30 p-3 flex flex-wrap justify-center gap-2">
                    {sections.map((section) => {
                        const Icon = section.icon;
                        return (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded transition-colors ${activeSection === section.id
                                    ? 'bg-terminal-green/20 text-terminal-green'
                                    : 'text-terminal-foreground hover:text-terminal-green'
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                <span>{section.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PortfolioContent;

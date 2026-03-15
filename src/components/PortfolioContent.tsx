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
import cvFile from '../cv/cv.jpg';

interface PortfolioContentProps {
    onBack: () => void;
}

type Section = 'about' | 'skills' | 'projects' | 'experience' | 'contact';
type Language = 'en' | 'fr';

const PortfolioContent: React.FC<PortfolioContentProps> = () => {
    const [activeSection, setActiveSection] = useState<Section>('about');
    const [language, setLanguage] = useState<Language>('fr');

    const sections = [
        { id: 'about' as Section, label: language === 'fr' ? 'A propos' : 'About', icon: User },
        { id: 'skills' as Section, label: language === 'fr' ? 'Competences' : 'Skills', icon: Code },
        { id: 'projects' as Section, label: language === 'fr' ? 'Projets' : 'Projects', icon: Terminal },
        { id: 'experience' as Section, label: language === 'fr' ? 'Experience & Formation' : 'Experience & Education', icon: GraduationCap },
        { id: 'contact' as Section, label: language === 'fr' ? 'Contact' : 'Contact', icon: Mail },
    ];

    const renderAbout = () => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full"
        >
            <div className="text-terminal-green text-xl font-bold mb-4 flex-shrink-0">{language === 'fr' ? '~/a-propos' : '~/about'}</div>
            <div className="flex-1 flex flex-col justify-center gap-8 lg:flex-row lg:items-center">
                <div className="mx-auto lg:mx-0 flex-shrink-0">
                    <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-terminal-green/50 bg-terminal-green/10">
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
                <div className="flex-1">
                    <div className="text-center lg:text-left mb-6 flex-shrink-0" style={{ fontFamily: "'Kaushan Script', cursive", color: 'var(--terminal-green)' }}>
                        <span className="text-3xl md:text-4xl">Ziouani Yanis</span>
                    </div>
                    <div className="space-y-3 text-terminal-foreground">
                        <p className="leading-relaxed">
                            {language === 'fr' ? (
                                <>
                                    Bonjour ! Je suis <span className="text-terminal-green font-semibold">Ingenieur IA</span> et <span className="text-terminal-green font-semibold">Data Scientist</span>, passionne par la creation de systemes intelligents et l'extraction d'insights a partir des donnees.
                                    Je conçois et deploie des modeles de machine learning, je travaille sur des jeux de donnees a grande echelle et je cree des solutions qui relient la recherche en IA aux usages concrets.
                                </>
                            ) : (
                                <>
                                    Hi! I'm an <span className="text-terminal-green font-semibold">AI Engineer</span> & <span className="text-terminal-green font-semibold">Data Scientist</span> passionate about building intelligent systems and extracting insights from data.
                                    I design and deploy machine learning models, work with large-scale datasets, and create solutions that bridge AI research and real-world applications.
                                </>
                            )}
                        </p>
                        <p className="leading-relaxed">
                            {language === 'fr' ? (
                                <>
                                    Je me specialise en deep learning, NLP, computer vision et pipelines de donnees. Du prototype a la production, j'aime transformer des donnees complexes en intelligence exploitable.
                                    Quand je n'entraine pas des modeles, j'explore les dernieres avancees en IA ou je contribue a des projets open source en machine learning.
                                </>
                            ) : (
                                <>
                                    I specialize in deep learning, NLP, computer vision, and data pipelines. From prototyping to production, I enjoy turning complex data into actionable intelligence.
                                    When I'm not training models, you can find me exploring the latest AI research or contributing to open-source ML projects.
                                </>
                            )}
                        </p>
                        <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:items-center sm:gap-4">
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4 text-terminal-green" />
                                <span>{language === 'fr' ? 'Localisation : Paris' : 'Location: Paris'}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4 text-terminal-green" />
                                <span>{language === 'fr' ? 'Disponible pour des opportunites' : 'Available for opportunities'}</span>
                            </div>
                        </div>
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
            <div className="text-terminal-green text-xl font-bold mb-4">{language === 'fr' ? '~/competences' : '~/skills'}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { category: language === 'fr' ? 'Programmation & Developpement' : 'Programming & Development', skills: ['Python', 'SQL', 'Git', 'GitHub', 'Linux'] },
                    { category: 'Data Science', skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'SciPy'] },
                    { category: language === 'fr' ? 'Machine Learning & Deep Learning' : 'Machine Learning & Deep Learning', skills: ['Scikit-learn', 'PyTorch', 'NLP', 'Computer Vision'] },
                    { category: language === 'fr' ? 'MLOps & Deploiement' : 'MLOps & Deployment', skills: ['Docker', 'FastAPI', 'MLflow', 'CI/CD'] },
                    { category: language === 'fr' ? 'Big Data & Data Engineering' : 'Big Data & Data Engineering', skills: ['Hadoop', 'Talend'] },
                    { category: language === 'fr' ? 'Bases de donnees' : 'Databases', skills: ['PostgreSQL', 'MongoDB'] },
                    { category: language === 'fr' ? 'IA Generative' : 'Generative AI', skills: ['LLMs', 'RAG', 'Fine-tuning', 'LangChain', 'LangGraph', 'AI Agents', 'Vector Databases'] },
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
            <div className="text-terminal-green text-xl font-bold mb-4">{language === 'fr' ? '~/projets' : '~/projects'}</div>
            <div className="space-y-6">
                {[
                    {
                        title: 'ESTIN Internal Regulation RAG System',
                        description: language === 'fr'
                            ? 'Systeme RAG (Retrieval-Augmented Generation) pour interroger le reglement interieur de l\'ESTIN. Il comprend une interface de chat web, une recherche vectorielle avec Pinecone, un agent LangGraph, une memoire conversationnelle, les sources citees et le rendu Markdown. Construit avec FastAPI, Groq LLM et les embeddings HuggingFace.'
                            : 'RAG (Retrieval-Augmented Generation) system to query the internal regulations of ESTIN. Features a web chat interface, vector search with Pinecone, LangGraph agent, conversation memory, cited sources, and Markdown rendering. Built with FastAPI, Groq LLM, and HuggingFace embeddings.',
                        technologies: ['Python', 'FastAPI', 'LangGraph', 'Pinecone', 'Groq', 'HuggingFace'],
                        github: 'https://github.com/Ziwazou/ESTIN_INTERNAL_REGULATION_RAG_SYSTEM',
                        demo: 'https://github.com/Ziwazou/ESTIN_INTERNAL_REGULATION_RAG_SYSTEM',
                        featured: true
                    },
                    {
                        title: 'AI Calculator Agent',
                        description: language === 'fr'
                            ? 'Agent calculatrice IA imbattable utilisant l\'algorithme minimax. Une calculatrice intelligente qui joue de maniere optimale dans les jeux bases sur une calculatrice.'
                            : 'Unbeatable AI Calculator Agent using the minimax algorithm. An intelligent calculator that plays optimally in calculator-based games.',
                        technologies: ['JavaScript', 'HTML', 'CSS', 'Minimax Algorithm', 'Game AI'],
                        github: 'https://github.com/Ziwazou/Ai_Calculator_Agent',
                        demo: 'https://ai-calculator-agent.vercel.app/',
                        featured: false
                    },
                    {
                        title: 'UCI Bank Marketing Analysis',
                        description: language === 'fr'
                            ? 'Projet d\'analyse et de modelisation sur le dataset UCI Bank Marketing. Il etudie la souscription des clients aux depots a terme via l\'EDA, le feature engineering et la modelisation predictive. Inclut un rapport detaille (rapport.pdf).'
                            : 'Data analysis and modeling project on the UCI Bank Marketing dataset. Explores client subscription to term deposits through EDA, feature engineering, and predictive modeling. Includes a detailed report (rapport.pdf).',
                        technologies: ['Python', 'Jupyter', 'Pandas', 'Scikit-learn', 'Data Analysis', 'Machine Learning'],
                        github: 'https://github.com/Ziwazou/UCI_Bank_Marketing_Analysis',
                        demo: 'https://github.com/Ziwazou/UCI_Bank_Marketing_Analysis',
                        featured: false
                    },
                    {
                        title: 'Facial Emotions Recognition',
                        description: language === 'fr'
                            ? 'Modele de Deep Learning (ViT) pour classifier les emotions a partir d\'images de visages. Projet de computer vision pour la detection d\'emotions avec une architecture Vision Transformer.'
                            : 'Deep Learning model (ViT) to classify emotions from facial images. Computer vision project for emotion detection using Vision Transformer architecture.',
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
            <div className="text-terminal-green text-xl font-bold mb-4">{language === 'fr' ? '~/experience & formation' : '~/experience & education'}</div>

            {/* Education */}
            <div>
                <h3 className="text-terminal-green font-semibold mb-3 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    {language === 'fr' ? 'Formation' : 'Education'}
                </h3>
                <div className="space-y-4">
                    {[
                        { degree: 'MSc Data Science & Business Intelligence', institution: 'Epitech Paris', period: language === 'fr' ? 'Depuis jan. 2026' : 'Since Jan 2026' },
                        { degree: language === 'fr' ? 'Cycle superieur - IA & Data Science' : 'Higher Cycle - AI & Data Science', institution: 'ESTIN Béjaia', period: '2022 - 2025', topics: language === 'fr' ? ['Deep Learning', 'Reinforcement Learning', 'Bases de donnees avancees', 'Analyse de donnees'] : ['Deep Learning', 'Reinforcement Learning', 'Advanced Databases', 'Data Analysis'] },
                        { degree: language === 'fr' ? 'Cycle preparatoire' : 'Preparatory Cycle', institution: 'ESTIN Béjaia', period: '2020 - 2022', topics: language === 'fr' ? ['Mathematiques', 'POO', 'Architectures des machines', 'Systemes d\'exploitation'] : ['Mathematics', 'OOP', 'Machine Architectures', 'Operating Systems'] },
                        { degree: language === 'fr' ? 'Baccalaureat - Sciences experimentales' : 'Baccalaureate - Experimental Sciences', institution: 'Mouloud Kacem High School, Oran', period: '2020', topics: language === 'fr' ? ['Tres bien'] : ['Very Good'] },
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
                    {language === 'fr' ? 'Experience' : 'Experience'}
                </h3>
                <div className="space-y-4">
                    {[
                        {
                            position: language === 'fr' ? 'Ingenieur Logiciel' : 'Software Engineer',
                            company: 'Sonatrach Hassi R\'mel, Algeria',
                            period: '2024',
                            description: language === 'fr'
                                ? 'Conception et developpement d\'une plateforme de gestion documentaire avec integration d\'IA pour le resume automatique de fichiers PDF volumineux.'
                                : 'Design and development of a document management platform with AI integration for automatic summarization of large PDF files.',
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
                    {language === 'fr'
                        ? 'Je suis toujours ouvert a discuter de nouvelles opportunites, de projets interessants ou simplement a echanger autour de la technologie !'
                        : 'I\'m always open to discussing new opportunities, interesting projects, or just having a chat about technology!'}
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
                    <p className="text-terminal-green mb-2">{language === 'fr' ? 'Actions rapides :' : 'Quick Actions:'}</p>
                    <div className="flex flex-wrap gap-2">
                        <a
                            href={cvFile}
                            download="Yanis-Ziouani-CV.jpg"
                            className="px-3 py-1 bg-terminal-green/10 text-terminal-green rounded border border-terminal-green/30 hover:bg-terminal-green/20 transition-colors"
                        >
                            {language === 'fr' ? 'Telecharger le CV' : 'Download Resume'}
                        </a>
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
                <div className="flex items-center justify-end gap-3 border-b border-terminal-green/30 px-6 py-3">
                    <button
                        onClick={() => setLanguage((prev) => (prev === 'en' ? 'fr' : 'en'))}
                        className="theme-toggle min-w-[56px] text-sm font-medium text-terminal-green"
                        title={language === 'fr' ? 'Passer en anglais' : 'Switch to French'}
                    >
                        {language === 'fr' ? 'FR' : 'EN'}
                    </button>
                    <ThemeToggle />
                </div>

                {/* Main content */}
                <div className="flex flex-1 overflow-hidden">
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

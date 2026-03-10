import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TerminalInterface from './components/TerminalInterface';
import PortfolioContent from './components/PortfolioContent';
import VantaBackground from './components/VantaBackground';

function App() {
    const [currentView, setCurrentView] = useState<'welcome' | 'portfolio'>('welcome');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    if (!isLoaded) {
        return (
            <VantaBackground>
                <div className="min-h-screen flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-terminal-green text-2xl"
                    >
                        Loading...
                    </motion.div>
                </div>
            </VantaBackground>
        );
    }

    return (
        <VantaBackground>
        <div className="min-h-screen text-terminal-foreground overflow-hidden">
            <AnimatePresence mode="wait">
                {currentView === 'welcome' ? (
                    <motion.div
                        key="welcome"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="min-h-screen flex items-center justify-center p-4"
                    >
                        <TerminalInterface onEnter={() => setCurrentView('portfolio')} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="portfolio"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="min-h-screen p-4"
                    >
                        <PortfolioContent onBack={() => setCurrentView('welcome')} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        </VantaBackground>
    );
}

export default App;

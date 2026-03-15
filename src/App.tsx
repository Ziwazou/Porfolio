import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioContent from './components/PortfolioContent';
import VantaBackground from './components/VantaBackground';

function App() {
    const [showPortfolio, setShowPortfolio] = useState(false);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setShowPortfolio(true);
        }, 2000);

        return () => window.clearTimeout(timer);
    }, []);

    return (
        <VantaBackground>
            <div className="min-h-screen text-terminal-foreground overflow-hidden">
                <AnimatePresence mode="wait">
                    {!showPortfolio ? (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="min-h-screen flex items-center justify-center p-4"
                        >
                            <div className="terminal-window max-w-xl w-full mx-auto">
                                <div className="terminal-header">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="text-sm text-terminal-foreground ml-4">Portfolio</span>
                                    </div>
                                </div>
                                <div className="terminal-body">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-terminal-green text-xl"
                                    >
                                        Loading...
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="portfolio"
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="min-h-screen p-4"
                        >
                            <PortfolioContent onBack={() => {}} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </VantaBackground>
    );
}

export default App;

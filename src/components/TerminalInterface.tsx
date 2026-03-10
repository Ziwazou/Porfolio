import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

interface TerminalInterfaceProps {
    onEnter: () => void;
}

const TerminalInterface: React.FC<TerminalInterfaceProps> = ({ onEnter }) => {
    const [currentLine, setCurrentLine] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const [typedText, setTypedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const terminalLines = [
        { text: 'Initializing portfolio...', delay: 500, typeSpeed: 50 },
        { text: 'Loading system components...', delay: 1000, typeSpeed: 50 },
        { text: 'Establishing connection...', delay: 1000, typeSpeed: 50 },
        { text: 'Welcome to my interactive portfolio!', delay: 1000, typeSpeed: 30 },
        { text: 'Type "help" for available commands or press ENTER to continue...', delay: 1500, typeSpeed: 25 },
    ];

    // Start typing when line becomes current
    useEffect(() => {
        if (currentLine < terminalLines.length && !isTyping) {
            const currentLineData = terminalLines[currentLine];
            setTimeout(() => {
                setIsTyping(true);
                setCurrentCharIndex(0);
            }, currentLineData.delay);
        }
    }, [currentLine, isTyping, terminalLines]);

    // Handle typing animation
    useEffect(() => {
        if (isTyping && currentLine < terminalLines.length) {
            const currentLineData = terminalLines[currentLine];
            const text = currentLineData.text;

            if (currentCharIndex < text.length) {
                const timer = setTimeout(() => {
                    setCurrentCharIndex(prev => prev + 1);
                    setTypedText(text.substring(0, currentCharIndex + 1));
                }, currentLineData.typeSpeed);

                return () => clearTimeout(timer);
            } else {
                // Typing complete, move to next line after a pause
                const timer = setTimeout(() => {
                    setIsTyping(false);
                    setCurrentLine(prev => prev + 1);
                }, 500);

                return () => clearTimeout(timer);
            }
        }
    }, [currentCharIndex, currentLine, isTyping, terminalLines]);

    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorTimer);
    }, []);

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onEnter();
        }
    };

    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="terminal-window max-w-4xl w-full mx-auto"
            tabIndex={0}
            onKeyDown={handleKeyPress}
        >
            <div className="terminal-header">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-terminal-foreground ml-4">Portfolio</span>
                </div>
                <div className="flex items-center space-x-2">
                    <ThemeToggle />
                </div>
            </div>

            <div className="terminal-body">
                <div className="space-y-2">
                    {terminalLines.map((line, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: index < currentLine || (index === currentLine && isTyping) ? 1 : 0, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-start space-x-2"
                        >
                            <span className="text-terminal-green text-sm flex-shrink-0">$</span>
                            <span className="text-terminal-foreground text-sm">
                                {index < currentLine ? (
                                    line.text
                                ) : index === currentLine && isTyping ? (
                                    <span>
                                        {typedText}
                                        <span className={`inline-block w-2 h-4 bg-terminal-green ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                                    </span>
                                ) : null}
                            </span>
                        </motion.div>
                    ))}

                    {currentLine >= terminalLines.length && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center space-x-2 mt-4"
                        >
                            <span className="text-terminal-green text-sm">$</span>
                            <input
                                type="text"
                                className="bg-transparent border-none outline-none text-terminal-foreground flex-1"
                                placeholder="Press ENTER to continue..."
                                autoFocus
                                onKeyDown={handleKeyPress}
                            />
                            <span className={`inline-block w-2 h-4 bg-terminal-green ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default TerminalInterface;

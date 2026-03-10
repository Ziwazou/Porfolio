/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'mono': ['Fira Code', 'monospace'],
                'terminal': ['Courier New', 'monospace'],
            },
            colors: {
                terminal: {
                    green: 'var(--terminal-green)',
                    greenBright: 'var(--terminal-green-bright)',
                    background: 'var(--background)',
                    foreground: 'var(--foreground)',
                    accent: 'var(--terminal-accent)',
                }
            },
            animation: {
                'blink': 'blink 1s infinite',
                'type': 'type 3s steps(40, end)',
                'fadeIn': 'fadeIn 0.5s ease-in-out',
                'slideUp': 'slideUp 0.5s ease-out',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                blink: {
                    '0%, 50%': { opacity: '1' },
                    '51%, 100%': { opacity: '0' },
                },
                type: {
                    'from': { width: '0' },
                    'to': { width: '100%' },
                },
                fadeIn: {
                    'from': { opacity: '0' },
                    'to': { opacity: '1' },
                },
                slideUp: {
                    'from': { transform: 'translateY(20px)', opacity: '0' },
                    'to': { transform: 'translateY(0)', opacity: '1' },
                },
                glow: {
                    'from': { textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00' },
                    'to': { textShadow: '0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00' },
                },
            },
        },
    },
    plugins: [],
}

import React, { useRef, useEffect } from 'react';

interface VANTA {
    NET: (options: {
        el: string | HTMLElement;
        mouseControls?: boolean;
        touchControls?: boolean;
        gyroControls?: boolean;
        minHeight?: number;
        minWidth?: number;
        scale?: number;
        scaleMobile?: number;
        color?: number;
        backgroundColor?: number;
        points?: number;
        maxDistance?: number;
        spacing?: number;
        showDots?: boolean;
    }) => { destroy: () => void };
}

const VantaBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const vantaRef = useRef<HTMLDivElement>(null);
    const vantaEffect = useRef<ReturnType<VANTA['NET']> | null>(null);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;

        const initVanta = () => {
            const VANTA = (window as unknown as { VANTA?: VANTA }).VANTA;
            if (!vantaRef.current || !VANTA) return false;

            vantaEffect.current = VANTA.NET({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200,
                minWidth: 200,
                scale: 1,
                scaleMobile: 1,
                color: 0xac833,
                backgroundColor: 0x0,
                points: 10,
                maxDistance: 20,
                spacing: 15,
                showDots: true,
            });
            return true;
        };

        const tryInit = () => {
            if (!initVanta()) {
                timeoutId = setTimeout(tryInit, 100);
            }
        };

        tryInit();

        return () => {
            clearTimeout(timeoutId);
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
        };
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden">
            <div
                ref={vantaRef}
                className="absolute inset-0 z-0"
                style={{ minHeight: '100vh' }}
            />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default VantaBackground;

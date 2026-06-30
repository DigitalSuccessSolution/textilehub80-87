import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#10211F] overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C29E6B_1px,transparent_1px)] [background-size:32px_32px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#10211F] to-[#10211F]"></div>

            <div className="relative flex flex-col items-center z-10">

                {/* Spinning & Pulsing Rings */}
                <div className="relative w-32 h-32 flex items-center justify-center">
                    {/* Outer Thin Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                        className="absolute inset-0 border border-white/5 rounded-full"
                    />
                    
                    {/* Dashed Accent Ring */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                        className="absolute inset-2 border border-dashed border-[#C29E6B]/40 rounded-full"
                    />

                    {/* Central Glowing Pulse */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="absolute inset-6 bg-[#C29E6B] rounded-full blur-xl"
                    />

                    {/* Central Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-16 h-16 flex items-center justify-center z-10"
                    >
                        <img
                            src="/logo.png"
                            alt="Aurora Logo"
                            className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(194,158,107,0.3)]"
                        />
                    </motion.div>
                </div>

                {/* Typography */}
                <div className="mt-12 text-center flex flex-col items-center">
                    <motion.h2
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                        className="text-white font-serif text-2xl tracking-[0.3em] font-light flex gap-3"
                    >
                        <span>AURORA</span>
                        <span className="font-bold text-[#C29E6B]">TEXTILE</span>
                    </motion.h2>

                    {/* Animated Loading Bar */}
                    <div className="mt-6 w-48 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.8,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#C29E6B] to-transparent"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="mt-4 text-[9px] text-stone-400 font-sans font-bold tracking-[0.4em] uppercase"
                    >
                        Premium Collections
                    </motion.p>
                </div>

            </div>

            {/* Subtle Watermark */}
            <motion.div 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.02, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <h1 className="text-[25vw] font-serif font-bold text-white select-none whitespace-nowrap">
                    AURORA
                </h1>
            </motion.div>
        </div>
    );
};

export default Preloader;

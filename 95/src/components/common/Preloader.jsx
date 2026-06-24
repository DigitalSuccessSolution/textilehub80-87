import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-cream">
            <div className="relative flex flex-col items-center">

                {/* Spinning Outer Ring */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="absolute inset-0 border-t-2 border-r-2 border-brand-lavender rounded-full"
                    />

                    {/* Pulsing Inner Circle */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="absolute inset-2 bg-brand-lavender/10 rounded-full"
                    />

                    {/* Central Logo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-14 h-14 flex items-center justify-center rounded-xl z-10"
                    >
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="w-full h-full object-contain"
                        />
                    </motion.div>
                </div>

                {/* Text Branding */}
                <div className="mt-8 text-center overflow-hidden">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-brand-plum font-serif text-xl tracking-[0.25em] uppercase font-bold"
                    >
                        Retail Textile <span className="font-light opacity-60 text-brand-lavender">TEXTILE HOUSE</span>
                    </motion.h2>

                    {/* Progress Bar Container */}
                    <div className="mt-4 w-40 h-[1px] bg-brand-plum/10 relative overflow-hidden mx-auto">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-brand-lavender"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-3 text-[10px] text-brand-lavender font-sans font-bold uppercase tracking-[0.4em]"
                    >
                        Retail Textile Mall
                    </motion.p>
                </div>

            </div>

            {/* Subtle Background Text Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
                <h1 className="text-[20vw] font-sans font-black text-brand-plum select-none uppercase">
                    HOUSE
                </h1>
            </div>
        </div>
    );
};

export default Preloader;

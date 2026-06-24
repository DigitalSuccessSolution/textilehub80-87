import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = ({ phoneNumber = "+916353778329" }) => {
    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=Hello%20Retail%20Textile%20Boutique%20Mall%2C%20I%20have%20an%20enquiry%20regarding%20products.`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-24 right-6 z-[90] w-14 h-14 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
            title="Chat on WhatsApp"
        >
            <FaWhatsapp size={32} />
        </button>
    );
};

export default FloatingWhatsApp;

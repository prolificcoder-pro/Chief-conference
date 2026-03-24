import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/212615651642"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-white hover:scale-110 transition-transform duration-300"
    aria-label="Chat on WhatsApp"
  >
    <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10 object-contain" />
  </a>
);

export default WhatsAppButton;

import WhatsAppIcon from '@/react-app/components/WhatsAppIcon';

export default function FloatingWhatsApp() {
  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de conversar sobre os serviços da ConstrutechPro.', '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-50 animate-pulse"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon size={24} />
    </button>
  );
}

import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/918360867991?text=' +
  encodeURIComponent('Hello ProActive Physio, I would like to enquire about physiotherapy services.');

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ProActive Physio on WhatsApp"
      title="Chat with ProActive Physio on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.20)] transition-all duration-200 hover:scale-105 hover:shadow-[0_10px_28px_rgba(0,0,0,0.25)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.4} />
      <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white shadow-lg sm:block">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}

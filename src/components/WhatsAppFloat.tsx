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
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 fill-current">
        <path d="M16 3.2C8.94 3.2 3.2 8.94 3.2 16c0 2.26.59 4.47 1.71 6.41L3.05 28.8l6.56-1.72A12.74 12.74 0 0 0 16 28.8c7.06 0 12.8-5.74 12.8-12.8S23.06 3.2 16 3.2Zm0 23.2c-2.02 0-4-.54-5.72-1.56l-.41-.24-3.89 1.02 1.04-3.78-.27-.43A10.74 10.74 0 1 1 16 26.4Zm5.9-8.03c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.81 1.04-.99 1.25-.18.21-.36.24-.68.08-.32-.16-1.35-.5-2.57-1.6-.95-.85-1.6-1.89-1.79-2.21-.19-.32-.02-.49.14-.65.14-.14.32-.36.47-.54.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.76.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white shadow-lg sm:block">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}

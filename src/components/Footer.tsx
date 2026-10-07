import { Link } from 'react-router-dom';
import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { locations } from '@/data/locations';
import { sports } from '@/data/sports';
import { services } from '@/data/services';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-800 text-white">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="container-page relative py-14 sm:py-16">
        <div className="grid min-w-0 gap-x-8 gap-y-10 sm:gap-y-12 lg:grid-cols-12 lg:gap-x-10">
          <div className="min-w-0 lg:col-span-3">
            <div className="flex items-center gap-2.5">
              <img src="/proactive_physio_logo.png" alt="ProActive Physio logo" className="h-10 w-10 shrink-0 object-contain" />
              <span className="font-display text-lg font-extrabold">
                ProActive<span className="text-teal-300"> Physio</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
              Sports Physio, Wherever You Play. Professional sports physiotherapy delivered directly to your ground, court, field, academy or training venue.
            </p>
            <div className="mt-5 space-y-3">
              <a href="mailto:proactivephysioteam@gmail.com" className="flex min-w-0 items-start gap-2.5 text-sm leading-5 text-white/60 transition-colors hover:text-teal-300">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="break-anywhere">proactivephysioteam@gmail.com</span>
              </a>
              <a href="https://wa.me/918360867991" className="flex items-center gap-2.5 text-sm leading-5 text-white/60 transition-colors hover:text-teal-300" target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4 shrink-0" />
                <span>WhatsApp us</span>
              </a>
              <p className="flex items-start gap-2.5 text-sm leading-5 text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Gurugram · Chandigarh · Delhi</span>
              </p>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-teal-300">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="break-anywhere text-sm leading-5 text-white/60 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300/60">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-teal-300">Locations</h3>
            <ul className="space-y-2.5">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link to={`/locations/${l.slug}`} className="break-anywhere text-sm leading-5 text-white/60 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300/60">
                    Sports Physiotherapy in {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-teal-300">Sports</h3>
            <ul className="space-y-2.5">
              {sports.map((s) => (
                <li key={s.slug}>
                  <Link to={`/sports/${s.slug}`} className="break-anywhere text-sm leading-5 text-white/60 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300/60">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 lg:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-teal-300">Company</h3>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm leading-5 text-white/60 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300/60">About</Link></li>
              <li><Link to="/contact" className="text-sm leading-5 text-white/60 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300/60">Contact</Link></li>
              <li><Link to="/faq" className="text-sm leading-5 text-white/60 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300/60">FAQs</Link></li>
              <li><Link to="/resources" className="text-sm leading-5 text-white/60 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300/60">Resources</Link></li>
              <li><Link to="/privacy-policy" className="text-sm leading-5 text-white/60 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300/60">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm leading-5 text-white/60 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300/60">Terms &amp; Conditions</Link></li>
            </ul>
            <Link to="/book" className="btn-primary mt-6 w-full max-w-full sm:w-auto lg:w-full lg:max-w-xs">
              Book a Specialized Physiotherapist
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 sm:mt-12 sm:flex-row sm:items-center sm:gap-4 sm:pt-8">
          <p className="text-xs leading-5 text-white/40">
            © {new Date().getFullYear()} ProActive Physio. All rights reserved.
          </p>
          <p className="text-left text-xs leading-5 text-white/40 sm:text-right">
            Currently serving: Gurugram · Chandigarh · Delhi
          </p>
        </div>
      </div>
    </footer>
  );
}

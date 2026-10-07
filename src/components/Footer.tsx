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

      <div className="container-page relative py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2.5">
              <img src="/proactive_physio_logo.png" alt="ProActive Physio logo" className="h-10 w-10 object-contain" />
              <span className="font-display text-lg font-extrabold">
                ProActive<span className="text-teal-300"> Physio</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Sports Physio, Wherever You Play. Professional sports physiotherapy delivered directly to your ground, court, field, academy or training venue.
            </p>
            <div className="mt-6 space-y-2.5">
              <a href="mailto:proactivephysioteam@gmail.com" className="flex items-center gap-2.5 text-sm text-white/60 hover:text-teal-300">
                <Mail className="h-4 w-4" /> proactivephysioteam@gmail.com
              </a>
              <a href="https://wa.me/918360867991" className="flex items-center gap-2.5 text-sm text-white/60 hover:text-teal-300" target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
              <p className="flex items-center gap-2.5 text-sm text-white/60">
                <MapPin className="h-4 w-4" /> Gurugram · Chandigarh · Delhi
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-teal-300">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm text-white/60 hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-teal-300">Locations</h3>
            <ul className="space-y-2.5">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link to={`/locations/${l.slug}`} className="text-sm text-white/60 hover:text-white transition-colors">
                    Sports Physiotherapy in {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-teal-300">Sports</h3>
            <ul className="space-y-2.5">
              {sports.map((s) => (
                <li key={s.slug}>
                  <Link to={`/sports/${s.slug}`} className="text-sm text-white/60 hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-teal-300">Company</h3>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-white/60 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-sm text-white/60 hover:text-white">Contact</Link></li>
              <li><Link to="/faq" className="text-sm text-white/60 hover:text-white">FAQs</Link></li>
              <li><Link to="/resources" className="text-sm text-white/60 hover:text-white">Resources</Link></li>
              <li><Link to="/privacy-policy" className="text-sm text-white/60 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-white/60 hover:text-white">Terms &amp; Conditions</Link></li>
            </ul>
            <Link to="/book" className="btn-primary mt-6">
              Book a Specialized Physiotherapist
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} ProActive Physio. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Currently serving: Gurugram · Chandigarh · Delhi
          </p>
        </div>
      </div>
    </footer>
  );
}

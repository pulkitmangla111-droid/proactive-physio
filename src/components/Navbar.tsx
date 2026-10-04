import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, CalendarPlus, MapPin } from 'lucide-react';
import Logo from './Logo';
import { navLinks } from '@/data/site';
import { publishedLocations, locationAreaOptions } from '@/data/locations';
import { sports } from '@/data/sports';
import { services } from '@/data/services';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        frame = 0;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (openDropdown && dropdownRefs.current[openDropdown] && !dropdownRefs.current[openDropdown]?.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenDropdown(null);
    };
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [openDropdown]);

  const dropdownItems: Record<string, { label: string; href: string }[]> = {
    sports: sports.map((s) => ({ label: s.name, href: `/sports/${s.slug}` })),
    services: services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
  };

  const isHome = location.pathname === '/';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-navy-700/95 backdrop-blur-lg shadow-lg shadow-navy-900/10' : 'bg-transparent'}`}>
        <nav className="container-page flex h-16 items-center justify-between lg:h-18" aria-label="Main navigation">
          <Logo variant="light" />

          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  ref={(el) => { dropdownRefs.current[link.dropdown!] = el; }}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.dropdown!)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === link.dropdown}
                    className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300/60"
                    onClick={() => setOpenDropdown(openDropdown === link.dropdown ? null : link.dropdown!)}
                  >
                    {link.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === link.dropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {openDropdown === link.dropdown && link.dropdown !== 'locations' && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="w-64 overflow-hidden rounded-2xl border border-surface-300 bg-white shadow-2xl shadow-navy-900/10 animate-scale-in">
                        <div className="p-2">
                          {dropdownItems[link.dropdown].map((item) => (
                            <Link key={item.href} to={item.href} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-navy-700 transition-colors hover:bg-teal-50 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300">
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {openDropdown === 'locations' && link.dropdown === 'locations' && (
                    <div className="absolute left-1/2 top-full w-[min(92vw,760px)] -translate-x-1/2 pt-2">
                      <div className="overflow-hidden rounded-2xl border border-surface-300 bg-white shadow-2xl shadow-navy-900/10 animate-scale-in">
                        <div className="grid gap-5 p-5 md:grid-cols-3">
                          {publishedLocations.map((city) => (
                            <div key={city.slug}>
                              <Link to={`/locations/${city.slug}`} className="flex items-center gap-2 font-display text-sm font-bold text-navy-700 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded">
                                <MapPin className="h-4 w-4 text-teal-600" />
                                {city.name}
                              </Link>
                              <div className="mt-2 space-y-0.5">
                                {(locationAreaOptions[city.slug] || []).map((area) => (
                                  <Link
                                    key={area}
                                    to={`/locations/${city.slug}`}
                                    className="block rounded-md px-2 py-1 text-xs text-ink-light hover:bg-teal-50 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
                                    title="Area preference; availability is confirmed after enquiry"
                                  >
                                    {area}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-surface-200 bg-surface-100 px-5 py-3 text-xs text-ink-light">
                          Area names are preferences, not claimed clinic or branch addresses. Service availability is confirmed after enquiry.
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.label} to={link.href} className="rounded-lg px-3.5 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300/60">
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:block">
            <Link to="/book" className="btn-primary !py-2.5 !px-5">
              <CalendarPlus className="h-4 w-4" />
              Book Now
            </Link>
          </div>

          <button type="button" className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-navy-700 shadow-2xl animate-slide-in">
            <div className="flex h-16 items-center justify-between px-5">
              <Logo variant="light" />
              <button type="button" onClick={() => setMobileOpen(false)} className="text-white" aria-label="Close menu"><X className="h-6 w-6" /></button>
            </div>
            <div className="px-5 py-4">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="mb-1">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-white/80"
                      onClick={() => setOpenDropdown(openDropdown === link.dropdown ? null : link.dropdown)}
                      aria-expanded={openDropdown === link.dropdown}
                    >
                      {link.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === link.dropdown ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === link.dropdown && link.dropdown !== 'locations' && (
                      <div className="ml-3 border-l border-white/10 pl-3">
                        {dropdownItems[link.dropdown].map((item) => <Link key={item.href} to={item.href} className="block rounded-lg px-3 py-2 text-sm text-white/60 hover:text-white">{item.label}</Link>)}
                      </div>
                    )}
                    {openDropdown === 'locations' && link.dropdown === 'locations' && (
                      <div className="ml-3 border-l border-white/10 pl-3">
                        {publishedLocations.map((city) => (
                          <div key={city.slug} className="mb-3">
                            <Link to={`/locations/${city.slug}`} className="block px-3 py-2 text-sm font-semibold text-teal-300">{city.name}</Link>
                            <div className="space-y-0.5">
                              {(locationAreaOptions[city.slug] || []).map((area) => <Link key={area} to={`/locations/${city.slug}`} className="block px-3 py-1.5 text-xs text-white/50">{area}</Link>)}
                            </div>
                          </div>
                        ))}
                        <p className="px-3 py-2 text-[11px] text-white/40">Areas are preferences; availability is confirmed after enquiry.</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.label} to={link.href} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white">{link.label}</Link>
                )
              )}
              <Link to="/book" className="btn-primary mt-4 w-full"><CalendarPlus className="h-4 w-4" />Book Now</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

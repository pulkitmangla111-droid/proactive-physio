import { Link } from 'react-router-dom';
import { Home, ArrowRight, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';
import { locations } from '@/data/locations';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | ProActive Physio"
        description="The page you are looking for could not be found. Explore ProActive Physio's physiotherapy services in Delhi, Gurugram and Chandigarh."
      />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-700 px-5">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />

        <div className="relative text-center">
          <p className="font-display text-8xl font-extrabold text-white/10 sm:text-9xl">404</p>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">Page Not Found</h1>
          <p className="mx-auto mt-4 max-w-md text-base text-white/60">
            The page you are looking for does not exist or has been moved. Let's get you back on track.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/" className="btn-primary group">
              <Home className="h-4 w-4" />
              Back to Home
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-10">
            <p className="text-sm text-white/40 mb-3">Or explore our locations:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  to={`/locations/${loc.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm transition-all hover:border-teal-400/40 hover:text-teal-300"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

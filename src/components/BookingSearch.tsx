import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Calendar, Clock, ChevronDown } from 'lucide-react';
import { locations } from '@/data/locations';
import { sports } from '@/data/sports';
import { services } from '@/data/services';

interface BookingSearchProps {
  variant?: 'hero' | 'section';
  defaultLocation?: string;
  defaultSport?: string;
  defaultService?: string;
}

export default function BookingSearch({
  variant = 'section',
  defaultLocation = '',
  defaultSport = '',
  defaultService = '',
}: BookingSearchProps) {
  const navigate = useNavigate();
  const [sport, setSport] = useState(defaultSport);
  const [service, setService] = useState(defaultService);
  const [loc, setLoc] = useState(defaultLocation);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (sport) params.set('sport', sport);
    if (service) params.set('service', service);
    if (loc) params.set('location', loc);
    if (date) params.set('date', date);
    if (time) params.set('time', time);
    navigate(`/book?${params.toString()}`);
  };

  const isHero = variant === 'hero';

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl ${isHero ? 'bg-white/95 backdrop-blur-lg p-5 shadow-2xl shadow-navy-900/30' : 'border border-surface-300 bg-white p-5 shadow-lg'} sm:p-6`}
    >
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50">
          <Search className="h-4.5 w-4.5 text-teal-600" />
        </div>
        <div>
          <h3 className="font-display text-base font-bold text-navy-700">
            Find a Sports Physiotherapist Near You
          </h3>
          <p className="text-xs text-ink-light">Select your preferences to get started</p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-navy-600">Select Sport</label>
          <div className="relative">
            <select
              value={sport}
              onChange={(e) => setSport(e.target.value)}
              className="select-field"
            >
              <option value="">Any sport</option>
              {sports.map((s) => (
                <option key={s.slug} value={s.slug}>{s.name}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-light" />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-navy-600">Select Service</label>
          <div className="relative">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="select-field"
            >
              <option value="">Any service</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>{s.name}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-light" />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-navy-600">Select Location</label>
          <div className="relative">
            <select
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
              className="select-field"
            >
              <option value="">Select location</option>
              {locations.map((l) => (
                <option key={l.slug} value={l.slug}>{l.name}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-light" />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-navy-600">Date</label>
          <div className="relative">
            <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-light" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input-field pl-10"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-navy-600">Preferred Time</label>
          <div className="relative">
            <Clock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-light" />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="input-field pl-10"
            />
          </div>
        </div>

        <div className="flex items-end">
          <button type="submit" className="btn-primary w-full">
            <Search className="h-4 w-4" />
            Find a Physiotherapist
          </button>
        </div>
      </div>
    </form>
  );
}

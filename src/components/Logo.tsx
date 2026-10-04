import { Link } from 'react-router-dom';
export default function Logo({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy-700';
  const subColor = variant === 'light' ? 'text-teal-300' : 'text-teal-600';

  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label="ProActive Physio home">
      <img
        src="/proactive_physio_logo.png"
        alt="ProActive Physio logo"
        className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <div className="flex flex-col leading-none">
        <span className={`font-display text-lg font-extrabold tracking-tight ${textColor}`}>
          ProActive<span className={subColor}> Physio</span>
        </span>
        <span className={`text-[10px] font-medium tracking-wide ${variant === 'light' ? 'text-white/60' : 'text-ink-light'}`}>
          Sports Physio, Wherever You Play
        </span>
      </div>
    </Link>
  );
}

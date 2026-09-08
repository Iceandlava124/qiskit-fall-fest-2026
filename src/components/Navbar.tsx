import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Share2, Check, ChevronDown, Sparkles, Calendar, Layers } from 'lucide-react';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#organizers', label: 'Organizers' },
  { href: '/#speakers', label: 'Speakers' },
  { href: '/#schedule', label: 'Schedule' },
  { href: '/#hackathon', label: 'Hackathon' },
  { href: '/#venue', label: 'Venue' },
];

const pastEventLinks = [
  {
    href: '/qmi-2025',
    title: 'QMI 2025',
    desc: 'International Workshop & Colloquium (Feb 2025)',
    icon: Sparkles,
  },
  {
    href: '/qff-2025',
    title: 'Qiskit Fall Fest 2025',
    desc: 'Inaugural Festival Edition at VIT Chennai',
    icon: Calendar,
  },
  {
    href: '/past-events',
    title: 'All Past Events & Gallery',
    desc: 'Complete photo archives & highlights',
    icon: Layers,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobilePastOpen, setIsMobilePastOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsOpen(false);
  }, [location.pathname]);

  // Click outside to close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPct = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolledPct);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const isPastActive =
    location.pathname === '/qmi-2025' ||
    location.pathname === '/qff-2025' ||
    location.pathname === '/past-events';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-quantum-purple transition-all duration-100 ease-out pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Lockup */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-quantum-purple rounded group mr-2"
          >
            <div className="flex items-center gap-2 shrink-0">
              <img
                src="/logos/qiskit-logo.svg"
                alt="IBM Qiskit Logo"
                className="h-7 w-7 shrink-0 object-contain transition-transform group-hover:scale-105"
              />
              <span className="h-4 w-px bg-slate-300 shrink-0" />
              <img
                src="/logos/vit-chennai-logo.png"
                alt="VIT Chennai Logo"
                className="h-6 w-auto shrink-0 object-contain max-h-6"
              />
            </div>
            <div className="flex items-baseline gap-1 font-heading font-bold text-slate-900 text-sm sm:text-base tracking-tight shrink-0 whitespace-nowrap">
              <span>Qiskit Fall Fest</span>
              <span className="text-quantum-purple font-mono text-xs font-semibold">2026</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 2xl:gap-4 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-slate-600 hover:text-quantum-purple transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-quantum-purple rounded px-1.5 py-1 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}

            {/* Past Events Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`inline-flex items-center gap-1 text-xs xl:text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-quantum-purple rounded px-1.5 py-1 whitespace-nowrap ${
                  isPastActive || isDropdownOpen
                    ? 'text-quantum-purple font-semibold'
                    : 'text-slate-600 hover:text-quantum-purple'
                }`}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                <span>Past Events</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180 text-quantum-purple' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full right-0 sm:left-0 sm:right-auto mt-2 w-72 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 border-b border-slate-100 mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Previous Editions
                    </span>
                  </div>
                  {pastEventLinks.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsDropdownOpen(false)}
                      className={`flex items-start gap-3 px-3.5 py-2.5 hover:bg-slate-50 transition-colors rounded-xl mx-1 group ${
                        location.pathname === item.href ? 'bg-quantum-purple/5' : ''
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-quantum-purple/10 flex items-center justify-center text-slate-500 group-hover:text-quantum-purple transition-colors shrink-0 mt-0.5">
                        <item.icon size={15} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-semibold text-slate-800 group-hover:text-quantum-purple transition-colors truncate">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-slate-500 leading-snug truncate">
                          {item.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact */}
            <a
              href="/#contact"
              className="text-xs xl:text-sm font-medium text-slate-600 hover:text-quantum-purple transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-quantum-purple rounded px-1.5 py-1 whitespace-nowrap"
            >
              Contact
            </a>

            {/* Quick Share Button */}
            <button
              onClick={handleShare}
              className="text-slate-600 hover:text-quantum-purple p-1.5 rounded-lg border border-transparent hover:border-slate-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-quantum-purple shrink-0"
              title={copied ? 'Link Copied!' : 'Share Site'}
              aria-label="Share Event Link"
            >
              {copied ? <Check size={16} className="text-quantum-purple" /> : <Share2 size={16} />}
            </button>

            {/* Register CTA - Solid #6929c4 */}
            <a
              href="/#register"
              className="px-4 py-2 text-xs xl:text-sm font-semibold rounded-lg bg-quantum-purple hover:bg-quantum-purple-light text-white shadow-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-quantum-purple shrink-0 whitespace-nowrap"
            >
              Register Now
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={handleShare}
              className="text-slate-600 hover:text-quantum-purple p-1.5 rounded focus:outline-none"
              aria-label="Share site"
            >
              {copied ? <Check size={18} className="text-quantum-purple" /> : <Share2 size={18} />}
            </button>

            <button
              className="text-slate-700 hover:text-quantum-purple transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-quantum-purple rounded p-1"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 max-h-[85vh] overflow-y-auto shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-slate-700 hover:text-quantum-purple transition-colors py-2.5 px-3 rounded-lg hover:bg-slate-50 font-medium text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Past Events Accordion */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setIsMobilePastOpen(!isMobilePastOpen)}
                className="w-full flex items-center justify-between text-slate-700 hover:text-quantum-purple transition-colors py-2.5 px-3 rounded-lg hover:bg-slate-50 font-medium text-sm"
              >
                <span>Past Events</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isMobilePastOpen ? 'rotate-180 text-quantum-purple' : 'text-slate-400'
                  }`}
                />
              </button>

              {isMobilePastOpen && (
                <div className="pl-4 pr-1 py-1 space-y-1 bg-slate-50/70 rounded-xl mt-1 border border-slate-100">
                  {pastEventLinks.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="flex items-center gap-2.5 py-2 px-3 rounded-lg text-slate-600 hover:text-quantum-purple text-xs font-medium hover:bg-white"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon size={14} className="text-quantum-purple shrink-0" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/#contact"
              className="block text-slate-700 hover:text-quantum-purple transition-colors py-2.5 px-3 rounded-lg hover:bg-slate-50 font-medium text-sm"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>

            <a
              href="/#register"
              className="block text-center mt-3 px-4 py-3 text-sm font-semibold rounded-lg bg-quantum-purple text-white shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

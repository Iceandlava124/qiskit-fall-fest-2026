import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Share2, Check } from 'lucide-react';

const navLinks = [
  { href: '/#about', label: 'About', isRoute: false },
  { href: '/#organizers', label: 'Organizers', isRoute: false },
  { href: '/#speakers', label: 'Speakers', isRoute: false },
  { href: '/#schedule', label: 'Schedule', isRoute: false },
  { href: '/#hackathon', label: 'Hackathon', isRoute: false },
  { href: '/#venue', label: 'Venue', isRoute: false },
  { href: '/qmi-2025', label: 'QMI 2025', mobileLabel: 'QMI 2025 Page', isRoute: true },
  { href: '/past-events', label: 'Gallery', mobileLabel: 'Past Events Gallery', isRoute: true },
  { href: '/#contact', label: 'Contact', isRoute: false },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

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
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-xs xl:text-sm font-medium text-slate-600 hover:text-quantum-purple transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-quantum-purple rounded px-1.5 py-1 whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs xl:text-sm font-medium text-slate-600 hover:text-quantum-purple transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-quantum-purple rounded px-1.5 py-1 whitespace-nowrap"
                >
                  {link.label}
                </a>
              )
            )}

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
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-slate-700 hover:text-quantum-purple transition-colors py-2.5 px-3 rounded-lg hover:bg-slate-50 font-medium text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.mobileLabel || link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-slate-700 hover:text-quantum-purple transition-colors py-2.5 px-3 rounded-lg hover:bg-slate-50 font-medium text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.mobileLabel || link.label}
                </a>
              )
            )}
            <a
              href="/#register"
              className="block text-center mt-3 px-4 py-3 text-sm font-semibold rounded-lg bg-quantum-purple text-white"
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

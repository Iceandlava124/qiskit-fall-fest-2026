import { useState, useEffect } from 'react';
import { Menu, X, Share2, Check } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#community', label: 'Community' },
  { href: '#attend', label: 'Who Can Attend' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#hackathon', label: 'Hackathon' },
  { href: '#venue', label: 'Venue' },
  { href: '#organizers', label: 'Organizers' },
  { href: '#faq', label: 'FAQ' },
  { href: '#past-event', label: 'Past Event' },
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
          ? 'bg-[#06060e]/95 backdrop-blur-md border-b border-quantum-border/80 shadow-lg shadow-black/50'
          : 'bg-transparent'
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
          <a
            href="#"
            className="flex items-center gap-2.5 font-heading text-base sm:text-lg font-bold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-quantum-purple rounded"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-quantum-purple text-white text-xs font-mono font-bold">
              Q
            </span>
            <span className="tracking-tight">
              Qiskit Fall Fest <span className="text-quantum-purple font-mono text-xs font-semibold">2026</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-quantum-text-secondary hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-quantum-purple rounded px-1"
              >
                {link.label}
              </a>
            ))}

            {/* Quick Share Button */}
            <button
              onClick={handleShare}
              className="text-quantum-text-secondary hover:text-white p-2 rounded-lg border border-transparent hover:border-quantum-border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-quantum-purple"
              title={copied ? 'Link Copied!' : 'Share Site'}
              aria-label="Share Event Link"
            >
              {copied ? <Check size={16} className="text-quantum-purple" /> : <Share2 size={16} />}
            </button>

            {/* Register CTA - Solid #6929c4 */}
            <a
              href="#register"
              className="px-5 py-2 text-sm font-semibold rounded-lg bg-quantum-purple hover:bg-quantum-purple-light text-white shadow-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-quantum-purple"
            >
              Register Now
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={handleShare}
              className="text-quantum-text-secondary hover:text-white p-1.5 rounded focus:outline-none"
              aria-label="Share site"
            >
              {copied ? <Check size={18} className="text-quantum-purple" /> : <Share2 size={18} />}
            </button>

            <button
              className="text-quantum-text-secondary hover:text-quantum-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-quantum-purple rounded p-1"
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
        <div className="lg:hidden bg-quantum-surface/98 backdrop-blur-xl border-b border-quantum-border max-h-[85vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-quantum-text-secondary hover:text-white transition-colors py-2.5 px-3 rounded-lg hover:bg-quantum-surface-hover font-medium text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
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
